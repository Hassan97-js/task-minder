import TaskWrapper from "./task-wrapper";
import TaskItem from "./task-item";

function TasksBody() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-10 pb-5">
      <TaskWrapper type="todo">
        <TaskItem />
      </TaskWrapper>
      <TaskWrapper type="in-progress">
        <TaskItem />
      </TaskWrapper>
      <TaskWrapper type="done">
        <TaskItem />
      </TaskWrapper>
    </div>
  );
}

export default TasksBody;
