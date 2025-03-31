import Column from "../../../../types/kanban/Column";
import Task from "../../../../types/kanban/Task";
import TaskList from "./TaskList/TaskList";

export default function KanbanColumn({
  column,
  tasks,
}: {
  column: Column;
  tasks: Task[];
}) {
  return (
    <li>
      <h3>{column.title}</h3>
      <ul>
        <TaskList tasks={tasks} />
        <li>Task</li>
      </ul>
    </li>
  );
}
