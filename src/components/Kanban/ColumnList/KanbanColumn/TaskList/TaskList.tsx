import Task from "../../../../../types/kanban/Task";
import TaskCard from "./TaskCard/TaskCard";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const tasksToRender = tasks.map((task: Task) => (
    <TaskCard key={task.id} task={task} />
  ));
  return <ul>{tasksToRender}</ul>;
}
