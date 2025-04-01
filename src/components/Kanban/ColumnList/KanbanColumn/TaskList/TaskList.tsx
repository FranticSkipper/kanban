import Task from "../../../../../types/kanban/Task";
import TaskCard from "./TaskCard/TaskCard";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const tasksToRender = tasks.map((task: Task) => (
    <TaskCard key={task.id} task={task} />
  ));
  return <ul className="flex flex-col gap-y-[5px]">{tasksToRender}</ul>;
}
