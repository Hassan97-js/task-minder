"use server";

import { revalidatePath } from "next/cache";
import { type TaskStatus } from "@prisma/client";

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
        message: "Created task"
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
        message: "Updated task"
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
        message: "Deleted task"
      };
    }
    console.log("[DELETED]");
  } catch (error) {
    return handleError(error, "Error deleting task");
  }
}

export async function markTaskAction(status: TaskStatus, taskId: string) {
  try {
    const session = await auth();

    if (session) {
      const userId = session.user.id;

      const task = await db.task.findFirst({
        where: {
          userId,
          id: taskId,
          status
        }
      });

      if (task) {
        throw new Error(`Task already has status ${status}`);
      }

      await db.task.update({
        where: {
          userId,
          id: taskId
        },
        data: {
          status
        }
      });

      revalidatePath("/tasks");

      return {
        error: null,
        message: "Updated task status"
      };
    }
  } catch (error) {
    return handleError(error, "Error updating task status");
  }
}
