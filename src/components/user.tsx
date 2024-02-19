import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { getInitials, getUser } from "@/utils";

async function User() {
  const user = await getUser();

  console.log(user?.name);

  return user ? (
    <Avatar>
      <AvatarImage src={user?.image ?? "/fallback-avatar.jpg"} />
      <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
    </Avatar>
  ) : null;
}

export default User;
