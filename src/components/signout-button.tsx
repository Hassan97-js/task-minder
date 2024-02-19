import { RxExit as LogOutIcon } from "react-icons/rx";

import { Button } from "./ui/button";

import { signOutAction } from "@/actions/auth.actions";
import { getUser } from "@/utils";

async function SignOutButton() {
  const user = await getUser();

  return user ? (
    <form action={signOutAction} className="mt-auto">
      <Button
        type="submit"
        variant="outline"
        className="flex items-center gap-2 w-max h-max text-sm font-medium">
        <LogOutIcon />
        <span>Sign out</span>
      </Button>
    </form>
  ) : null;
}

export default SignOutButton;
