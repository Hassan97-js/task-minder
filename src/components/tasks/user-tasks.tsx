import TasksHeader from "./tasks-header";
import TasksBody from "./tasks-body";

function UserTasks() {
  return (
    <div className="w-full h-full flex flex-col gap-14">
      <TasksHeader />
      <TasksBody />
    </div>
  );
}

export default UserTasks;
