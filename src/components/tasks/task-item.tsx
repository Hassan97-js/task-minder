import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

function TaskItem({ children }: TProps) {
  return (
    <div className="flex flex-col gap-6 w-full bg-secondary/30 px-5 py-7 rounded-sm">
      {children}
    </div>
  );
}

export default TaskItem;
