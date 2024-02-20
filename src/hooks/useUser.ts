import { useSession } from "next-auth/react";

function useUser() {
  const session = useSession();
  const user = session.data?.user;

  return user;
}

export default useUser;
