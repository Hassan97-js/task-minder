"use server";

import { TCreateTask } from "@/constants/validators/tasks";

export async function createTaskAction(values: TCreateTask, userId: string) {
  const newTask = prisma?.task.create({
    data: {
      status: "TODO",
      text: values.text,
      userId: ""
    }
  });
}
