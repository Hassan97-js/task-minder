import { PlusIcon as NewTaskIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

type TProps = {
  onCreateTask: () => void;
};

function NewTaskButton({ onCreateTask }: TProps) {
  return (
    <Button
      onClick={onCreateTask}
      type="submit"
      size="sm"
      variant="outline"
      className="items-center gap-1">
      <NewTaskIcon className="w-3 h-3 mt-[1px]" />
      <span>New task</span>
    </Button>
  );
}

export default NewTaskButton;