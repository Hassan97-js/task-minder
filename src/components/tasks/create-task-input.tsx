"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import {
  type TCreateTask,
  createTaskSchema
} from "@/constants/validators/tasks";

type TProps = {
  onCreateTask: (values: TCreateTask) => void;
  onCancelCreateTask: () => void;
};

function CreateTaskInput({ onCancelCreateTask, onCreateTask }: TProps) {
  const form = useForm<TCreateTask>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      text: ""
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onCreateTask)}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>New task</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="Type a name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex justify-end mt-3">
          <Button
            disabled={isSubmitting}
            onClick={onCancelCreateTask}
            type="button"
            variant="link">
            Cancel
          </Button>
          <Button disabled={isSubmitting} type="submit">
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateTaskInput;
