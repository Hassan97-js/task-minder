import NewTaskButton from "./new-task-button";

function TaskHeader() {
  return (
    <header className="flex justify-between items-center gap-5 pt-5">
      <h3 className="font-semibold text-2xl">Tasks</h3>
      <NewTaskButton />
    </header>
  );
}

export default TaskHeader;
