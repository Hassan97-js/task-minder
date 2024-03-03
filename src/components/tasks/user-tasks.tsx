import { redirect } from "next/navigation";

import TasksHeader from "./tasks-header";
import TasksBody from "./tasks-body";

import { getTasks } from "@/utils/tasks";
import { auth } from "@/utils";

async function UserTasks() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const user = session?.user;
  const userId = session?.user?.id;

  const tasks = await getTasks(userId);

  return (
    <div className="w-full h-full flex flex-col gap-14">
      <TasksHeader>
        <h3 className="font-semibold text-2xl">Tasks</h3>
      </TasksHeader>

      <TasksBody
        user={user}
        tasks={tasks ?? []}
      />
    </div>
  );
}

export default UserTasks;
