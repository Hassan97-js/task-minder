"use server";

import { revalidatePath } from "next/cache";

import {
  createTaskSchema,
  updateTaskSchema,
  type TCreateTask,
  type TUpdateTask
} from "@/constants/validators/tasks";

import db from "@/utils/db";

import { auth } from "@/utils";
import { handleError } from "@/utils/handle-error";

export async function createTaskAction(values: TCreateTask) {
  try {
    const session = await auth();

    const validated = createTaskSchema.parse(values);

    if (session) {
      const userId = session?.user?.id;

      await db?.task.create({
        data: {
          status: "TODO",
          text: validated.text,
          userId
        }
      });

      revalidatePath("/tasks");

      return {
        error: null,
        message: "Created todo"
      };
    }
  } catch (error) {
    return handleError(error, "Error creating a task");
  }
}

export async function updateTaskAction(values: TUpdateTask, taskId: string) {
  try {
    const session = await auth();
    const validated = updateTaskSchema.parse(values);

    if (session) {
      const userId = session?.user?.id;

      await db?.task.update({
        where: {
          id: taskId,
          userId
        },
        data: {
          text: validated.text
        }
      });

      revalidatePath("/tasks");

      return {
        error: null,
        message: "Updated todo"
      };
    }
  } catch (error) {
    return handleError(error, "Error updating task");
  }
}

export async function deleteTaskAction(taskId: string) {
  try {
    const session = await auth();
    if (session) {
      const userId = session?.user?.id;
      await db.task.delete({
        where: {
          userId,
          id: taskId
        }
      });

      revalidatePath("/tasks");

      return {
        error: null,
        message: "Deleted todo"
      };
    }
    console.log("[DELETED]");
  } catch (error) {
    return handleError(error, "Error deleting task");
  }
}
