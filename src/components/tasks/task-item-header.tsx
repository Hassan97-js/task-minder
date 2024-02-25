import TaskItemActions from "./task-item-actions";
import TaskItemCreator from "./task-item-creator";

function TaskItemHeader() {
  return (
    <header className="flex flex-row max-sm:flex-col items-center justify-between gap-4">
      <TaskItemCreator />
      <TaskItemActions />
    </header>
  );
}

export default TaskItemHeader;
