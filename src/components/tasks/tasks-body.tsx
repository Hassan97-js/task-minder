"use client";

import { type User as TUser } from "next-auth";

import { TaskStatus } from "@prisma/client";

import TaskColumn from "./task-column";

import { getTaskContainer } from "@/utils/tasks";

import type { TTask } from "@/types/task";

type TProps = {
  user: TUser;
  tasks: TTask[];
};

function TasksBody({ user, tasks: initialTasks }: TProps) {
  const tasks = getTaskContainer(initialTasks);

  return (
    <div className="h-full w-full flex flex-col xl:flex-row gap-10 pb-5">
      <TaskColumn
        user={user}
        status={TaskStatus.TODO}
        tasks={tasks.TODO}
      />
      <TaskColumn
        user={user}
        status={TaskStatus.IN_PROGRESS}
        tasks={tasks.IN_PROGRESS}
      />
      <TaskColumn
        user={user}
        status={TaskStatus.DONE}
        tasks={tasks.DONE}
      />
    </div>
  );
}

export default TasksBody;
