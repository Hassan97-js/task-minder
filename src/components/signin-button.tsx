"use client";

import { signIn } from "next-auth/react";

import { Button } from "./ui/button";

type TProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

function SignInButton({ user }: TProps) {
  async function handleSignIn() {
    await signIn();
  }

  return !user ? (
    <Button
      onClick={handleSignIn}
      type="submit"
      variant="outline"
      className="flex items-center gap-2 mt-auto w-max h-max text-sm font-medium">
      <span>Sign in</span>
    </Button>
  ) : null;
}

export default SignInButton;
