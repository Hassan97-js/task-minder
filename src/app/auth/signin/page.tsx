import SignInCard from "@/components/sign-in-card";
import { auth } from "@/utils";
import { redirect } from "next/navigation";

type TProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

async function SignIn({ searchParams }: TProps) {
  const session = await auth();

  if (session) {
    const callbackUrl = searchParams.callbackUrl;
    const pathname = callbackUrl ? new URL(callbackUrl).pathname : "/";
    return redirect(pathname);
  }

  return (
    <section className="flex justify-center items-center w-full min-h-screen">
      <SignInCard />
    </section>
  );
}

export default SignIn;
