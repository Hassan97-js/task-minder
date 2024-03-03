"use client";

import { useState } from "react";
import { type Task as TTask, TaskStatus } from "@prisma/client";
import { type User as TUser } from "next-auth";
import {
  RxSquare as TodoIcon,
  RxLapTimer as InProgressIcon,
  RxCheck as DoneIcon
} from "react-icons/rx";
import { toast } from "sonner";

import CreateTaskInput from "./create-task-input";
import NewTaskButton from "./new-task-button";
import TaskItem from "./task-item";

import { type TCreateTask } from "@/constants/validators/tasks";
import { createTaskAction } from "@/actions/tasks.actions";
import { handleError } from "@/utils/handle-error";

type TProps = {
  status: TaskStatus;
  tasks: TTask[];
  user: TUser;
};

function TaskColumn({ status, tasks, user }: TProps) {
  const [isCreating, setIsCreating] = useState(false);

  const isTodo = status === TaskStatus.TODO;
  const isInProgress = status === TaskStatus.IN_PROGRESS;
  const isDone = status === TaskStatus.DONE;

  function handleShowCreateInput() {
    setIsCreating(true);
  }

  async function handleCreateTask(values: TCreateTask) {
    try {
      handleShowCreateInput();
      const response = await createTaskAction(values);

      if (response?.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      toast.error("Couldn't create a new task", {
        position: "top-right"
      });
      return handleError(error, "Couldn't create a new task");
    } finally {
      setIsCreating(false);
    }
  }

  function handleCancelCreateTask() {
    setIsCreating(false);
  }

  return (
    <div className="flex flex-col gap-7 w-full min-h-[43.75rem] lg:h-[62.5rem] max-w-[43.75rem] mx-auto flex-[1_1_43.75rem] border border-muted rounded-lg p-5 bg-secondary/10 text-secondary-foreground relative">
      <p className="flex items-center gap-3">
        {isTodo && <TodoIcon className="w-5 h-5" />}
        {isInProgress && <InProgressIcon className="w-5 h-5" />}
        {isDone && <DoneIcon className="w-5 h-5" />}

        <span className="font-semibold">
          {isTodo && "Todo"}
          {isInProgress && "In progress"}
          {isDone && "Done"}
        </span>
      </p>

      {isCreating && (
        <CreateTaskInput
          onCreateTask={handleCreateTask}
          onCancelCreateTask={handleCancelCreateTask}
        />
      )}

      <div className="flex flex-col gap-5 overflow-y-auto flex-auto overflow-x-hidden max-h-[52.625rem] rounded-md">
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskItem
              user={user}
              task={task}
            />
          </div>
        ))}
      </div>

      {status === TaskStatus.TODO && (
        <NewTaskButton
          onCreateTask={handleShowCreateInput}
          className="flex-1 min-h-9 max-h-9"
        />
      )}
    </div>
  );
}

export default TaskColumn;
