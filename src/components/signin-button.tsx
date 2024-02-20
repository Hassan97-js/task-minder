"use client";

import { signIn } from "next-auth/react";

import { Button } from "./ui/button";

import type { TUser } from "@/types/auth";

function SignInButton() {
  async function handleSignIn() {
    await signIn();
  }

  return (
    <Button
      onClick={handleSignIn}
      type="submit"
      variant="outline"
      className="flex items-center gap-2 mt-auto w-max h-max text-sm font-medium">
      <span>Sign in</span>
    </Button>
  );
}

export default SignInButton;
