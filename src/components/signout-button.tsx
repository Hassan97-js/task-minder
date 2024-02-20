"use client";

import { signOut } from "next-auth/react";
import { RxExit as LogOutIcon } from "react-icons/rx";

import { Button } from "./ui/button";

import type { TUser } from "@/types/auth";

type TProps = {
  user: TUser;
};

function SignOutButton({ user }: TProps) {
  async function handleSignOut() {
    await signOut();
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
