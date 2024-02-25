"use client";

import { signOut } from "next-auth/react";
import { RxExit as LogOutIcon } from "react-icons/rx";

import { Button } from "../ui/button";

function SignOutButton() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <Button
      onClick={handleSignOut}
      type="submit"
      variant="outline"
      className="flex items-center gap-2 w-max h-max text-sm font-medium mt-auto">
      <LogOutIcon />
      <span>Sign out</span>
    </Button>
  );
}

export default SignOutButton;
