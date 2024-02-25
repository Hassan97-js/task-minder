import UserTasks from "@/components/tasks/user-tasks";
import { auth } from "@/utils";
import { redirect } from "next/navigation";

async function Tasks() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <section className="w-full h-full container">
      <UserTasks />
    </section>
  );
}

export default Tasks;
