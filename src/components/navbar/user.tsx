import { type User as TUser } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { getInitials } from "@/utils";

type TProps = {
  user?: TUser;
};

async function User({ user }: TProps) {
  return user ? (
    <Avatar>
      <AvatarImage src={user?.image ?? "/fallback-avatar.jpg"} />
      <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
    </Avatar>
  ) : null;
}

export default User;
