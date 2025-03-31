import Task from "../../../../../../types/kanban/Task";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }) {
  return (
    <li>
      <p>{task.text}</p>
      <p>{task.status}</p>
    </li>
  );
};

export default TaskCard;
