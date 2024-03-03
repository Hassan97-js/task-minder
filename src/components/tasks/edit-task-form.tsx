import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Task as TTask } from "@prisma/client";

import { TUpdateTask, updateTaskSchema } from "@/constants/validators/tasks";
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

type TProps = {
  task: TTask;
  isDeleting: boolean;
  onUpdateTask: (values: TUpdateTask) => void;
  onCancelUpdateTask: () => void;
};

function EditTaskForm({
  task,
  isDeleting,
  onUpdateTask,
  onCancelUpdateTask
}: TProps) {
  const form = useForm<z.infer<typeof updateTaskSchema>>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      text: task.text
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onUpdateTask)}>
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
            onClick={() => {
              onCancelUpdateTask();
              form.reset();
            }}>
            Cancel
          </Button>
          <Button disabled={isDeleting || isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditTaskForm;
