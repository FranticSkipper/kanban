import { useDispatch } from "react-redux";
import Task from "../../../../../../types/kanban/Task";
import { remove } from "../../../../../../features/kanban/store/tasks";
import TaskMoveSelect from "./TaskMoveSelect/TaskMoveSelect";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }) {
  const dispatch = useDispatch();

  function handleTaskDelete() {
    dispatch(remove(task.id));
  }

  return (
    <li className="bg-white border-2 p-2 rounded-xl cursor-pointer hover:border-red-500 transition-all duration-200 ease-in-out">
      <h3 className="font-bold text-left">{task.title}</h3>
      <p className="text-left">{task.text}</p>
      <TaskMoveSelect task={task} />
      <button type="button" onClick={handleTaskDelete}>
        Delete
      </button>
      {/* <p>{task.status}</p> */}
    </li>
  );
};

export default TaskCard;
