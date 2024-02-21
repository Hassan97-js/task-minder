"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import SignInButton from "./signin-button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  type TSignInForm,
  signInFormSchema
} from "@/constants/validators/auth";

function SignInCard() {
  const form = useForm<TSignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  // Todo: Implement handleSignIn handler
  function handleSignIn(values: z.infer<typeof signInFormSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-[31.25rem] flex-1 border-2 border-input rounded-lg py-8 px-8 flex flex-col gap-12">
      <div className="flex flex-col gap-7 flex-1">
        <h2 className="text-2xl font-semibold text-center tracking-wide">
          Sign in With
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <SignInButton
            className="py-3 px-8 text-base w-36"
            providerId="github"
            githubClassName="w-5 h-5"
          />
          <SignInButton
            className="py-3 px-8 text-base w-36"
            providerId="google"
            googleClassName="w-5 h-5"
          />
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className="flex flex-col gap-5 flex-1">
          <FormField
            control={form.control}
            name="username"
            render={() => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignInCard;
