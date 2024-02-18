import { RxExit as LogOutIcon } from "react-icons/rx";

import { Button } from "./ui/button";

function LogOutButton() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 mt-auto w-max h-max text-sm font-medium">
      <LogOutIcon />
      <span>Log out</span>
    </Button>
  );
}

export default LogOutButton;
