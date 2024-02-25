import TaskItemBody from "./task-item-body";
import TaskItemHeader from "./task-item-header";

function TaskItem() {
  return (
    <div className="w-full h-48 bg-secondary/40 p-5 rounded-sm">
      <TaskItemHeader />
      <TaskItemBody />
    </div>
  );
}

export default TaskItem;
