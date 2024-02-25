type TProps = {
  text: string;
};

function TaskItemBody({ text }: TProps) {
  return <p className="text-sm truncate">{text}</p>;
}
export default TaskItemBody;
