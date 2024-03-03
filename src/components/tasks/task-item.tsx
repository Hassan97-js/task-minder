"use client";

import { useState } from "react";
import { type Task as TTask } from "@prisma/client";
import { type User as TUser } from "next-auth";
import { toast } from "sonner";

import TaskItemHeader from "./task-item-header";
import TaskItemCreator from "./task-item-creator";
import TaskItemActions from "./task-item-actions";
import TaskItemBody from "./task-item-body";
import EditTaskForm from "./edit-task-form";

import { type TUpdateTask } from "@/constants/validators/tasks";
import { deleteTaskAction, updateTaskAction } from "@/actions/tasks.actions";
import { handleError } from "@/utils/handle-error";

type TProps = {
  user: TUser;
  task: TTask;
};

function TaskItem({ user, task }: TProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleUpdateTask(values: TUpdateTask) {
    try {
      await updateTaskAction(values, task.id);
    } catch (error) {
      toast.error("Couldn't update the task", {
        position: "top-right"
      });
      return handleError(error, "Error updating task");
    } finally {
      setIsEditing(false);
    }
  }

  async function handleDeleteTask() {
    try {
      setIsDeleting(true);
      await deleteTaskAction(task.id);
    } catch (error) {
      toast.error("Couldn't delete the task", {
        position: "top-right"
      });
      return handleError(error, "Error deleting task");
    } finally {
      setIsDeleting(false);
    }
  }

  function handleCancelUpdateTask() {
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-6 w-full bg-secondary/30 px-5 py-7 rounded-md max-w-[452.333px]">
      <TaskItemHeader>
        <TaskItemCreator user={user} />
        <TaskItemActions
          status={task.status}
          onDelete={handleDeleteTask}
          onEdit={() => setIsEditing(true)}
          taskId={task.id}
        />
      </TaskItemHeader>

      {!isEditing && <TaskItemBody text={task?.text} />}
      {isEditing && (
        <EditTaskForm
          isDeleting={isDeleting}
          onCancelUpdateTask={handleCancelUpdateTask}
          onUpdateTask={handleUpdateTask}
          task={task}
        />
      )}
    </div>
  );
}

export default TaskItem;
