import Task from "../../../../../../types/kanban/Task";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }) {
  return (
    <li className="bg-white border-2 p-2 rounded-xl cursor-pointer">
      <h3 className="font-bold text-left">{task.title}</h3>
      <p className="text-left">{task.text}</p>
      {/* <p>{task.status}</p> */}
    </li>
  );
};

export default TaskCard;
