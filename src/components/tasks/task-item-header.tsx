"use client";

import TaskItemActions from "./task-item-actions";
import TaskItemCreator from "./task-item-creator";

function TaskItemHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <TaskItemCreator />
      <TaskItemActions onDelete={() => {}} onEdit={() => {}} />
    </header>
  );
}

export default TaskItemHeader;
