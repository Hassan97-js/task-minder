"use server";

import db from "@/utils/db";
import bcrypt from "bcrypt";

type TCreateUser = {
  email: string;
  password: string;
};

export async function createUser({ email, password }: TCreateUser) {
  const user = await db.user.findUnique({
    where: {
      email
    }
  });

  if (user) {
    return user;
  }

  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);

  const newUser = await db.user.create({
    data: {
      email,
      password: hash
    }
  });

  return newUser;
}
