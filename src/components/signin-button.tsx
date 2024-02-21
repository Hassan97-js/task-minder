"use client";

import { signIn } from "next-auth/react";
import {
  AiOutlineGoogle as GoogleIcon,
  AiOutlineGithub as GithubIcon
} from "react-icons/ai";

import { Button, type ButtonProps } from "./ui/button";
import { cn } from "@/utils";

type TProps = {
  providerId: "google" | "github" | "credentials";
  className?: string;
  googleClassName?: string;
  githubClassName?: string;
};

function SignInButton({
  providerId,
  className,
  githubClassName,
  googleClassName
}: TProps) {
  const isGoogle = providerId === "google";
  const isGithub = providerId === "github";
  const isCredentials = providerId === "credentials";

  const buttonAttriubtes = {
    type: "submit",
    variant: "outline",
    className: cn(
      "flex items-center gap-2 mt-auto w-max h-max text-sm font-medium",
      className
    ),
    ...(isGoogle && { onClick: handleSignInWithGoogle }),
    ...(isGithub && { onClick: handleSignInWithGithub })
  } satisfies ButtonProps;

  function handleSignInWithGoogle() {
    signIn("google");
  }

  function handleSignInWithGithub() {
    signIn("github");
  }

  return (
    <Button {...buttonAttriubtes}>
      <p className="flex items-center gap-[0.375rem]">
        {isGoogle && <GoogleIcon className={cn(googleClassName)} />}
        {isGithub && <GithubIcon className={cn(githubClassName)} />}
        {isGoogle && <span>Google</span>}
        {isGithub && <span>Github</span>}
        {isCredentials && <span>Sign in</span>}
      </p>
    </Button>
  );
}

export default SignInButton;
