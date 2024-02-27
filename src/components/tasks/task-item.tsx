"use client";

import { useState } from "react";
import { type Task as TTask } from "@prisma/client";
import { type User as TUser } from "next-auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import TaskItemHeader from "./task-item-header";
import TaskItemCreator from "./task-item-creator";
import TaskItemActions from "./task-item-actions";
import TaskItemBody from "./task-item-body";

import {
  type TUpdateTask,
  updateTaskSchema
} from "@/constants/validators/tasks";
import { deleteTaskAction, updateTaskAction } from "@/actions/tasks.actions";
import { handleError } from "@/utils/handle-error";

type TProps = {
  user: TUser;
  task: TTask;
  type: "todo" | "in-progress" | "done";
};

function TaskItem({ user, task, type }: TProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const form = useForm<z.infer<typeof updateTaskSchema>>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      text: task.text
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  async function handleUpdateTask(values: TUpdateTask) {
    try {
      await updateTaskAction(values, task.id);
    } catch (error) {
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
      return handleError(error, "Error deleting task");
    } finally {
      setIsDeleting(false);
    }
  }

  function handleCancelUpdateTask() {
    setIsEditing(false);
    form.reset();
  }

  return (
    <div className="flex flex-col gap-6 w-full bg-secondary/30 px-5 py-7 rounded-sm">
      <TaskItemHeader>
        <TaskItemCreator user={user} />
        <TaskItemActions
          type={type}
          onDelete={handleDeleteTask}
          onEdit={() => setIsEditing(true)}
          taskId={task.id}
        />
      </TaskItemHeader>
      {!isEditing && <TaskItemBody text={task?.text} />}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateTask)}>
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Edit task</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isDeleting || isSubmitting}
                        placeholder="New task name"
                        maxLength={40}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <div className="flex justify-end mt-3">
              <Button
                disabled={isDeleting || isSubmitting}
                type="button"
                variant="link"
                onClick={handleCancelUpdateTask}>
                Cancel
              </Button>
              <Button disabled={isDeleting || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}

export default TaskItem;
