import { type AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
  providers: [Google(googleConfig), Github(githubConfig)]
} satisfies AuthOptions;
