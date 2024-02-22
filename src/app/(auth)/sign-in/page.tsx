import SignInCard from "@/components/sign-in-card";
import { auth } from "@/utils";
import { redirect } from "next/navigation";

async function SignIn() {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <section className="flex justify-center items-center w-full h-full">
      <SignInCard />
    </section>
  );
}

export default SignIn;
