import Column from "../../../../entities/column/type";
import Task from "../../../../entities/task/type";
import TaskList from "../../../../features/move-task/ui/TaskList";

interface IProps {
  column: Column;
  tasks: Task[];
}

const KanbanColumn: React.FC<IProps> = function ({ column, tasks }) {
  return (
    <li className="border-2 min-w-[400px]">
      <h3 className="bg-black p-1 text-white font-bold text-lg p-3 border-b">
        {column.title}
      </h3>
      <TaskList columnID={column.id} tasks={tasks} />
    </li>
  );
};

export default KanbanColumn;
