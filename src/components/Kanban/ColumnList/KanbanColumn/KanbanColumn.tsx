import Column from "../../../../types/kanban/Column";
import Task from "../../../../types/kanban/Task";
import TaskList from "./TaskList/TaskList";

interface IProps {
  column: Column;
  tasks: Task[];
}

const KanbanColumn: React.FC<IProps> = function ({ column, tasks }) {
  return (
    <li className="border-2 min-w-[400px]">
      <h3 className="bg-black p-1 text-white">{column.title}</h3>
      <TaskList columnID={column.id} tasks={tasks} />
    </li>
  );
};

export default KanbanColumn;
