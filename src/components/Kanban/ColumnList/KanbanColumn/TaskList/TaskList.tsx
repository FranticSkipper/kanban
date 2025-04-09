import { useDrop } from "react-dnd";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Task from "../../../../../entities/task/type";
import { useUpdateTaskMutation } from "../../../../../entities/task/api";
import TaskCard from "../../../../../entities/task/components/TaskCard/TaskCard";

export default function TaskList({
  tasks,
  columnID,
}: {
  tasks: Task[];
  columnID: string;
}) {
  const ulRef = useRef<HTMLUListElement>(null);
  const [updateTask] = useUpdateTaskMutation();
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TASK",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: async (task: Task) => {
      if (task.columnId !== columnID) {
        try {
          await updateTask({
            ...task,
            columnId: columnID,
          });
          toast("Задача перемещена");
        } catch {
          // TODO: add error handler for error case
          console.log("error");
        }
      }
    },
  }));
  const tasksToRender = tasks.map((task: Task) => (
    <TaskCard key={task.id} task={task} />
  ));

  useEffect(() => {
    if (ulRef.current) {
      dropRef(ulRef);
    }
  }, [dropRef]);

  return (
    <ul
      ref={ulRef}
      className={`flex flex-col overflow-x-auto bg-white rounded-lg shadow-md gap-y-[5px] min-h-100 border-1 transition-colors ${
        isOver ? "bg-blue-100 border-blue-400 border-2" : ""
      }`}
    >
      {tasksToRender.length ? tasksToRender : <p>Нет задач!</p>}
    </ul>
  );
}
