"use server";

import { revalidatePath } from "next/cache";

import { TCreateTask } from "@/constants/validators/tasks";

import db from "@/utils/db";

import { auth } from "@/utils";
import { handleError } from "@/utils/handle-error";

export async function createTaskAction(values: TCreateTask) {
  try {
    const session = await auth();

    if (session) {
      const userId = session?.user?.id;

      await db?.task.create({
        data: {
          status: "TODO",
          text: values.text,
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
