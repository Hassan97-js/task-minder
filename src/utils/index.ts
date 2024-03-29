import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse
} from "next";
import { getServerSession } from "next-auth";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { authOptions } from "@/constants/auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName?: string | null) {
  if (!fullName) {
    return "U";
  }

  const namesArray = fullName.trim().split(" ");

  if (namesArray.length === 1) {
    return `${namesArray[0].charAt(0).toLocaleUpperCase()}`;
  }

  return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(
    0
  )}`;
}

type TAuthProps =
  | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
  | [NextApiRequest, NextApiResponse]
  | [];

export function auth(...args: TAuthProps) {
  return getServerSession(...args, authOptions);
}

export async function getUser() {
  const session = await auth();
  const user = session?.user;

  return user;
}
