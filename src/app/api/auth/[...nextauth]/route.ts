import NextAuth, { type AuthOptions } from "next-auth";

const authOptions = {
  providers: []
} satisfies AuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
