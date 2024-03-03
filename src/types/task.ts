import { TaskStatus, type Task } from "@prisma/client";

export type TTaskStatus = TaskStatus;

export type TTask = Task;

export type TTaskContainers = {
  [key: string]: TTask[];
};
