import Task from "../../../entities/task/type";
import { useDrag } from "react-dnd";

const useTaskDrag = function (task: Task) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return { isDragging, dragRef };
};

export default useTaskDrag;
