import { User } from "next-auth";

export type TUser = Omit<User, "id">;
