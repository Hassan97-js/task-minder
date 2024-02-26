import { z } from "zod";

export const createTaskSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: "Task cannot be empty"
    })
    .max(100, {
      message: "Task cannot be 100 characters long"
    })
});

export type TCreateTask = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: "Task cannot be empty"
    })
    .max(100, {
      message: "Task cannot be 100 characters long"
    })
});

export type TUpdateTask = z.infer<typeof createTaskSchema>;
