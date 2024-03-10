import { type AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type Adapter } from "next-auth/adapters";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProivder from "next-auth/providers/credentials";

import { checkUserPassword, createUser } from "@/actions/auth.actions";
import db from "@/utils/db";

const googleID = process.env.AUTH_GOOGLE_ID!;
const googleSecret = process.env.AUTH_GOOGLE_SECRET!;

const githubID = process.env.AUTH_GITHUB_ID!;
const githubSecret = process.env.AUTH_GITHUB_SECRET!;

const credentialsConfig = {
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
      placeholder: "Enter your Email"
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Enter your password"
    }
  },
  async authorize(
    credentials: Record<"password" | "email", string> | undefined
  ) {
    if (credentials) {
      const password = credentials?.password;
      const email = credentials?.email;

      const user = await createUser({
        email,
        password
      });

      const isCorrectPassword = await checkUserPassword(password, user);

      if (isCorrectPassword) {
        return user;
      }

      return null;
    }

    return null;
  }
};

export const authOptions = {
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
      }

      return session;
    }
  },
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google({
      clientId: googleID,
      clientSecret: googleSecret
    }),
    Github({
      clientId: githubID,
      clientSecret: githubSecret
    }),
    CredentialsProivder(credentialsConfig)
  ],
  pages: {
    signIn: "/auth/signin"
  }
} satisfies AuthOptions;
