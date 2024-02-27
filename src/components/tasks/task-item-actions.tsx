import { TaskStatus } from "@prisma/client";
import {
  RxPencil1 as EditIcon,
  RxTrash as DeleteIcon,
  RxDotsHorizontal as DropdownMenuIcon
} from "react-icons/rx";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { handleError } from "@/utils/handle-error";
import { markTaskAction } from "@/actions/tasks.actions";

type TProps = {
  onEdit: () => void;
  onDelete: () => void;
  type: "todo" | "in-progress" | "done";
  taskId: string;
};

function TaskItemActions({ onEdit, onDelete, type, taskId }: TProps) {
  const isTodo = type === "todo";
  const isInProgress = type === "in-progress";
  const isDone = type === "done";

  async function handleTaskMark(status: TaskStatus) {
    try {
      if (status !== "TODO" && status !== "IN_PROGRESS" && status !== "DONE") {
        return;
      }

      await markTaskAction(status, taskId);
    } catch (error) {
      return handleError(error, "Error updating task status");
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <Button variant="secondary" size="sm">
        Show
      </Button>
      <div className="flex items-center">
        <Button
          onClick={() => onEdit()}
          type="submit"
          variant="ghost"
          size="icon">
          <EditIcon className="w-5 h-5" />
        </Button>
        <Button onClick={() => onDelete()} variant="ghost" size="icon">
          <DeleteIcon className="w-5 h-5 text-red-500/80" />
        </Button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <div className="flex items-center justify-center h-9 w-9 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            <DropdownMenuIcon className="w-5 h-5 " />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {!isTodo && (
            <DropdownMenuItem
              onClick={() => handleTaskMark("TODO")}
              className="cursor-pointer">
              Mark as Todo
            </DropdownMenuItem>
          )}
          {!isInProgress && (
            <DropdownMenuItem
              onClick={() => handleTaskMark("IN_PROGRESS")}
              className="cursor-pointer">
              Mark as In progress
            </DropdownMenuItem>
          )}
          {!isDone && (
            <DropdownMenuItem
              onClick={() => handleTaskMark("DONE")}
              className="cursor-pointer">
              Mark as Done
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TaskItemActions;
