import { PlusIcon as NewTaskIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import { cn } from "@/utils";

type TProps = {
  className?: string;
  onCreateTask: () => void;
};

function NewTaskButton({ onCreateTask, className }: TProps) {
  return (
    <Button
      onClick={onCreateTask}
      type="submit"
      size="sm"
      variant="outline"
      className={cn("items-center gap-1", className)}>
      <NewTaskIcon className="w-3 h-3 mt-[1px]" />
      <span>New task</span>
    </Button>
  );
}

export default NewTaskButton;
