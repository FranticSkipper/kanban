import { useDrag } from "react-dnd";
import { useDeleteTaskMutation } from "../../../../../../features/kanban/store/tasksApi";
import Task from "../../../../../../types/kanban/Task";
import { useEffect, useRef } from "react";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }: { task: Task }) {
  const liRef = useRef<HTMLLIElement>(null);
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  function handleTaskDelete() {
    deleteTask(task.id);
  }

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

      <button type="button" onClick={handleTaskDelete} disabled={isLoading}>
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
