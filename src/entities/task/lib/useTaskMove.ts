import { useDrag } from "react-dnd";
import Task from "../type";

export default function useTaskMove(task: Task) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return { isDragging, dragRef };
}
