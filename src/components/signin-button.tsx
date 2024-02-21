"use client";

import { signIn } from "next-auth/react";
import {
  AiOutlineGoogle as GoogleIcon,
  AiOutlineGithub as GithubIcon
} from "react-icons/ai";

import { Button, type ButtonProps } from "./ui/button";

type TProps = {
  providerId: "google" | "github";
};

function SignInButton({ providerId }: TProps) {
  const isGoogle = providerId === "google";
  const isGithub = providerId === "github";

  const buttonAttriubtes = {
    type: "submit",
    variant: "outline",
    className:
      "flex items-center gap-2 mt-auto w-max h-max text-sm font-medium",
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
        {isGoogle && <GoogleIcon />}
        {isGithub && <GithubIcon />}
        <span>{isGoogle ? "Google" : "Github"}</span>
      </p>
    </Button>
  );
}

export default SignInButton;
