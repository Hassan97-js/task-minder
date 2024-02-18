import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Todo: User Image URL, User Initials
function User() {
  return (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/54324376?v=4" />
      <AvatarFallback>HS</AvatarFallback>
    </Avatar>
  );
}

export default User;
