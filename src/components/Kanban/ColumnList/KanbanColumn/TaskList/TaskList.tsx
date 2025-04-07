import { useDrop } from "react-dnd";
import { useUpdateTaskMutation } from "../../../../../features/kanban/store/tasksApi";
import Task from "../../../../../types/kanban/Task";
import TaskCard from "./TaskCard/TaskCard";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

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
  console.log("com");

  return (
    <ul
      ref={ulRef}
      className={`flex flex-col gap-y-[5px] min-h-100 border-1 transition-colors ${
        isOver ? "bg-blue-100 border-blue-400 border-2" : ""
      }`}
    >
      {tasksToRender}
    </ul>
  );
}
