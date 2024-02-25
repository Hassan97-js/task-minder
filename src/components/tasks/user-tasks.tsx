import { type Task as TTask } from "@prisma/client";

import TasksHeader from "./tasks-header";
import TasksBody from "./tasks-body";
import TaskColumn from "./task-column";
import TaskItem from "./task-item";
import TaskItemHeader from "./task-item-header";
import TaskItemBody from "./task-item-body";

async function UserTasks() {
  const tasks = [
    {
      id: "1",
      status: "TODO",
      text: "Todo 1",
      userId: "123"
    },
    {
      id: "2",
      status: "IN_PROGRESS",
      text: "Todo 2",
      userId: "1234"
    },
    {
      id: "3",
      status: "DONE",
      text: "Todo 3",
      userId: "12345"
    }
  ] satisfies TTask[];

  const todoTasksElements = tasks
    .filter((task) => task.status === "TODO")
    .map((task) => {
      return (
        <TaskItem key={task.id}>
          <TaskItemHeader />
          <TaskItemBody text={task.text} />
        </TaskItem>
      );
    });

  const inProgressTasksElements = tasks
    .filter((task) => task.status === "IN_PROGRESS")
    .map((task) => {
      return (
        <TaskItem key={task.id}>
          <TaskItemHeader />
          <TaskItemBody text={task.text} />
        </TaskItem>
      );
    });

  const doneTasksElements = tasks
    .filter((task) => task.status === "DONE")
    .map((task) => {
      return (
        <TaskItem key={task.id}>
          <TaskItemHeader />
          <TaskItemBody text={task.text} />
        </TaskItem>
      );
    });

  return (
    <div className="w-full h-full flex flex-col gap-14">
      <TasksHeader>
        <h3 className="font-semibold text-2xl">Tasks</h3>
      </TasksHeader>
      <TasksBody>
        <TaskColumn type="todo">{todoTasksElements}</TaskColumn>
        <TaskColumn type="in-progress">{inProgressTasksElements}</TaskColumn>
        <TaskColumn type="done">{doneTasksElements}</TaskColumn>
      </TasksBody>
    </div>
  );
}

export default UserTasks;
