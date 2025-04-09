import { useEffect, useRef } from "react";
import Task from "../../../entities/task/type";
import DeleteTaskButton from "../../delete-task/DeleteTaskButton";
import useTaskDrag from "../model/useTaskDrag";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }: IProps) {
  const liRef = useRef<HTMLLIElement>(null);
  const { isDragging, dragRef } = useTaskDrag(task);

  useEffect(() => {
    if (liRef.current) {
      dragRef(liRef);
    }
  }, [dragRef]);

  return (
    <li
      ref={liRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-white border-2 p-2 rounded-xl cursor-pointer hover:border-red-500 transition-all duration-200 ease-in-out"
    >
      <h3 className="font-bold text-left">{task.title}</h3>
      <p className="text-left">{task.text}</p>

      <DeleteTaskButton taskID={task.id}>Delete</DeleteTaskButton>
    </li>
  );
};

export default TaskCard;
