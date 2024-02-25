"use client";

import { useState, type ReactNode } from "react";
import {
  RxSquare as TodoIcon,
  RxLapTimer as InProgressIcon,
  RxCheck as DoneIcon
} from "react-icons/rx";

import CreateTaskInput from "./create-task-input";
import NewTaskButton from "./new-task-button";

import { TCreateTask } from "@/constants/validators/tasks";
import { createTaskAction } from "@/actions/tasks.actions";

type TProps = {
  children: ReactNode;
  type: "todo" | "in-progress" | "done";
};

function TaskColumn({ children, type }: TProps) {
  const [isCreating, setIsCreating] = useState(false);

  const isTodo = type === "todo";
  const isInProgress = type === "in-progress";
  const isDone = type === "done";

  function handleShowCreateInput() {
    setIsCreating(true);
  }

  function handleCreateTask(values: TCreateTask) {
    handleShowCreateInput();
    console.log(values);

    // Todo: Get the user id
    // createTaskAction(values);
  }

  function handleCancelCreateTask() {
    setIsCreating(false);
  }

  return (
    <div className="flex flex-col gap-7 w-full h-[43.75rem] lg:h-[62.5rem] overflow-auto max-w-[37.5rem] mx-auto flex-[1_1_43.75rem] border border-muted rounded-lg p-5 bg-secondary/10 text-secondary-foreground">
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

      {children}

      {isCreating && (
        <CreateTaskInput
          onCreateTask={handleCreateTask}
          onCancelCreateTask={handleCancelCreateTask}
        />
      )}

      {type === "todo" && (
        <NewTaskButton onCreateTask={handleShowCreateInput} />
      )}
    </div>
  );
}

export default TaskColumn;
