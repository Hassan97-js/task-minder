import { User } from "next-auth";

export type TUser = Omit<User, "id">;
export type TUserWithId = User & {
  password: string | null;
  emailVerified: Date | null;
};
