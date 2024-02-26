import { type ReactNode } from "react";

import TaskItemActions from "./task-item-actions";
import TaskItemCreator from "./task-item-creator";

type TProps = {
  children: ReactNode;
};

function TaskItemHeader({ children }: TProps) {
  return (
    <header className="flex flex-row max-sm:flex-col items-center justify-between gap-4">
      {children}
    </header>
  );
}

export default TaskItemHeader;
