import { type AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/utils/db";
import { Adapter } from "next-auth/adapters";

const googleID = process.env.AUTH_GOOGLE_ID!;
const googleSecret = process.env.AUTH_GOOGLE_SECRET!;

const githubID = process.env.AUTH_GITHUB_ID!;
const githubSecret = process.env.AUTH_GITHUB_SECRET!;

const googleConfig = {
  clientId: googleID,
  clientSecret: googleSecret
};

const githubConfig = {
  clientId: githubID,
  clientSecret: githubSecret
};

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [Google(googleConfig), Github(githubConfig)],
  pages: {
    error: "/error",
    signIn: "/sign-in"
  }
} satisfies AuthOptions;
