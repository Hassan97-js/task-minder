import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(2, {
      message: "Email must be at least 7 characters"
    })
    .max(50, {
      message: "Email must be max 50 characters."
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
