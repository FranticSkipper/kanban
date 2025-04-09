import { useEffect, useRef } from "react";
import Task from "../../type";
import TaskCardUI from "./TaskCardUI";
import useTaskMove from "../../lib/useTaskMove";

interface IProps {
  task: Task;
}

const TaskCard: React.FC<IProps> = function ({ task }: { task: Task }) {
  const liRef = useRef<HTMLLIElement>(null);
  const { isDragging, dragRef } = useTaskMove(task);

  useEffect(() => {
    if (liRef.current) {
      dragRef(liRef);
    }
  }, [dragRef]);

  return <TaskCardUI task={task} isDragging={isDragging} refCallback={liRef} />;
};

export default TaskCard;
