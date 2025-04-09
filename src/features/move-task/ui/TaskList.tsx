import { useEffect, useRef } from "react";
import useTaskDrop from "../model/useTaskDrop";
import Task from "../../../entities/task/type";
import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  columnID,
}: {
  tasks: Task[];
  columnID: string;
}) {
  const ulRef = useRef<HTMLUListElement>(null);
  const { isOver, dropRef } = useTaskDrop(columnID);

  useEffect(() => {
    if (ulRef.current) {
      dropRef(ulRef);
    }
  }, [dropRef]);

  if (!tasks.length) {
    return <p>Нет задач!</p>;
  }

  return (
    <ul
      ref={ulRef}
      className={`flex flex-col overflow-x-auto bg-white rounded-lg shadow-md gap-y-[5px] min-h-100 border-1 transition-colors ${
        isOver ? "bg-blue-100 border-blue-400 border-2" : ""
      }`}
    >
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  );
}
