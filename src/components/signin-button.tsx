import { Button } from "./ui/button";

import { getUser } from "@/utils";
import { signInAction } from "@/actions/auth.actions";

async function SignInButton() {
  const user = await getUser();

  return !user ? (
    <form action={signInAction}>
      <Button
        type="submit"
        variant="outline"
        className="flex items-center gap-2 mt-auto w-max h-max text-sm font-medium">
        <span>Sign in</span>
      </Button>
    </form>
  ) : null;
}

export default SignInButton;
