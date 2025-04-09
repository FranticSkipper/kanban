import { useDrop } from "react-dnd";
import Task from "../../../entities/task/type";
import toast from "react-hot-toast";
import { useUpdateTaskMutation } from "../../../entities/task/api";

export default function useTaskDrop(columnID: string) {
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

  return { isOver, dropRef };
}
