import { RxPencil1 as EditIcon, RxTrash as DeleteIcon } from "react-icons/rx";
import { Button } from "../ui/button";

type TProps = {
  onEdit: () => void;
  onDelete: () => void;
};

function TaskItemActions({ onDelete, onEdit }: TProps) {
  return (
    <div className="flex gap-1 items-center">
      <Button onClick={() => onEdit()} variant="ghost" size="icon">
        <EditIcon className="w-5 h-5" />
      </Button>

      <Button onClick={() => onDelete()} variant="ghost" size="icon">
        <DeleteIcon className="w-5 h-5 text-red-500/80" />
      </Button>
    </div>
  );
}

export default TaskItemActions;
