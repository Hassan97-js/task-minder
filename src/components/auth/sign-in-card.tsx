"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  type TSignInForm,
  signInFormSchema
} from "@/constants/validators/auth";

function SignInCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<TSignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  async function handleSignIn(values: TSignInForm) {
    try {
      const { password, email } = values;

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false
      });

      if (!response?.ok) {
        throw new Error("Email or password is invalid");
      }

      const callbackUrl = searchParams?.get("callbackUrl");
      const pathname = callbackUrl ? new URL(callbackUrl).pathname : "/";
      router.push(pathname);
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
          <SignInButton
            disabled={isSubmitting}
            providerId="github"
            githubClassName="w-5 h-5"
          />
          <SignInButton
            disabled={isSubmitting}
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Email"
                    {...field}
                  />
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
                  <Input
                    disabled={isSubmitting}
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isSubmitting} type="submit" className="mt-4">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignInCard;
