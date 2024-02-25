import { type ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

function TaskHeader({ children }: TProps) {
  return (
    <header className="flex justify-between items-center gap-5 pt-5">
      {children}
    </header>
  );
}

export default TaskHeader;
