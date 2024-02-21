import { z } from "zod";

export const signInFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters."
    })
    .max(50, {
      message: "Username must be max 50 characters."
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters."
    })
    .max(25, {
      message: "Password must be max 25 characters."
    })
});

export type TSignInForm = z.infer<typeof signInFormSchema>;
