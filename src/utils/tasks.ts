import { TaskStatus, type Task as TTask } from "@prisma/client";

import db from "./db";

import { TTaskContainers, TTaskStatus } from "@/types/task";

export async function getTasks(userId?: string) {
  if (userId) {
    return await db.task.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}

export function getTaskContainer(tasks?: TTask[]) {
  if (!tasks || !Array.isArray(tasks)) {
    return {
      TODO: [],
      IN_PROGRESS: [],
      DONE: []
    };
  }

  const taskContainer = {
    TODO: getTasksByStatus(tasks, TaskStatus.TODO),
    IN_PROGRESS: getTasksByStatus(tasks, TaskStatus.IN_PROGRESS),
    DONE: getTasksByStatus(tasks, TaskStatus.DONE)
  } satisfies TTaskContainers;

  return taskContainer;
}

export function getTasksByStatus(tasks: TTask[], status: TTaskStatus) {
  return tasks.filter((task) => task.status === status);
}

export function getTasksById(tasks: TTask[], id?: string | null) {
  if (!id) {
    return;
  }

  return tasks?.find((task) => task.id === id);
}
