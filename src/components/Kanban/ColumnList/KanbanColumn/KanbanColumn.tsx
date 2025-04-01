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
    <li className="border-2">
      <h3 className="bg-black p-1 text-white">{column.title}</h3>
      <ul className="px-3 py-2">
        <TaskList tasks={tasks} />
      </ul>
    </li>
  );
}
