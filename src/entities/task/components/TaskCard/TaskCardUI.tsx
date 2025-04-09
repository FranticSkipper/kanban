import Task from "../../type";
import DeleteTaskButton from "../../../../features/delete-task/DeleteTaskButton";

interface IProps {
  task: Task;
  isDragging: boolean;
  refCallback: React.RefObject<HTMLLIElement | null>;
}

const TaskCardUI: React.FC<IProps> = function ({
  task,
  isDragging,
  refCallback,
}) {
  return (
    <li
      ref={refCallback}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-white border-2 p-2 rounded-xl cursor-pointer hover:border-red-500 transition-all duration-200 ease-in-out"
    >
      <h3 className="font-bold text-left">{task.title}</h3>
      <p className="text-left">{task.text}</p>

      <DeleteTaskButton taskID={task.id}>Delete</DeleteTaskButton>
    </li>
  );
};

export default TaskCardUI;
