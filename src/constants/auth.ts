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

const googleConfig = {
  clientId: googleID,
  clientSecret: googleSecret
};

const githubConfig = {
  clientId: githubID,
  clientSecret: githubSecret
};

const credentialsConfig = {
  name: ""
};

export const authOptions = {
  session: {
    strategy: "jwt"
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google(googleConfig),
    Github(githubConfig),
    CredentialsProivder({
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
      async authorize(credentials) {
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
      },
      type: "credentials"
    })
  ],
  pages: {
    error: "/error",
    signIn: "/sign-in"
  }
} satisfies AuthOptions;
