"use client";

import { signOut } from "next-auth/react";
import { RxExit as LogOutIcon } from "react-icons/rx";

import { Button } from "./ui/button";

type TProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

function SignOutButton({ user }: TProps) {
  async function handleSignOut() {
    await signOut({
      callbackUrl: "/"
    });
  }

  return user ? (
    <Button
      onClick={handleSignOut}
      type="submit"
      variant="outline"
      className="flex items-center gap-2 w-max h-max text-sm font-medium mt-auto">
      <LogOutIcon />
      <span>Sign out</span>
    </Button>
  ) : null;
}

export default SignOutButton;
