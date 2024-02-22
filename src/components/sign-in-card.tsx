"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import SignInButton from "./signin-button";

import {
  Form,
  FormControl,
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
      email: "",
      password: ""
    }
  });

  async function handleSignIn(values: TSignInForm) {
    try {
      const { password, email } = values;

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      // if (!response?.ok) {
      //   throw new Error("Email or password is invalid");
      // }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        return;
      }

      alert("Email or password is invalid");
    }
  }

  return (
    <div className="max-w-[31.25rem] flex-1 border-2 border-input rounded-lg py-8 px-8 flex flex-col gap-12">
      <div className="flex flex-col gap-7 flex-1">
        <h2 className="text-2xl font-semibold text-center tracking-wide">
          Sign in With
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <SignInButton providerId="github" githubClassName="w-5 h-5" />
          <SignInButton providerId="google" googleClassName="w-5 h-5" />
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignIn)}
          className="flex flex-col gap-5 flex-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
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
