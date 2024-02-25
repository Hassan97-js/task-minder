import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { getInitials } from "@/utils";
import type { TUser } from "@/types/auth";

type TProps = {
  user?: TUser;
};

function TaskItemCreator({ user }: TProps) {
  return (
    <Avatar>
      <AvatarImage src={user?.image ?? "/fallback-avatar.jpg"} />
      <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
    </Avatar>
  );
}

export default TaskItemCreator;