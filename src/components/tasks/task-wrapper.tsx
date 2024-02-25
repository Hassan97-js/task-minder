import { type ReactNode } from "react";
import {
  RxSquare as TodoIcon,
  RxLapTimer as InProgressIcon,
  RxCheck as DoneIcon
} from "react-icons/rx";

type TProps = {
  children: ReactNode;
  type: "todo" | "in-progress" | "done";
};

function TaskWrapper({ children, type }: TProps) {
  const isTodo = type === "todo";
  const isInProgress = type === "in-progress";
  const isDone = type === "done";

  return (
    <div className="flex flex-col gap-7 w-full h-[43.75rem] lg:h-[62.5rem] overflow-auto flex-auto border border-muted rounded-lg p-5 bg-secondary/15 text-secondary-foreground">
      <p className="flex items-center gap-3">
        {isTodo && <TodoIcon className="w-5 h-5" />}
        {isInProgress && <InProgressIcon className="w-5 h-5" />}
        {isDone && <DoneIcon className="w-5 h-5" />}

        <span className="font-semibold">
          {isTodo && "To do"}
          {isInProgress && "In progress"}
          {isDone && "Done"}
        </span>
      </p>

      {children}
    </div>
  );
}

export default TaskWrapper;
