import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

function TasksBody({ children }: TProps) {
  return (
    <div className="h-full w-full flex flex-col xl:flex-row gap-10 pb-5">
      {children}
    </div>
  );
}

export default TasksBody;
