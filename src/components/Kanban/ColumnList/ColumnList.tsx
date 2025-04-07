import { useGetColumnsQuery } from "../../../features/kanban/store/columnsApi";
import { useGetTasksQuery } from "../../../features/kanban/store/tasksApi";
import Column from "../../../types/kanban/Column";
import Task from "../../../types/kanban/Task";
import KanbanColumn from "./KanbanColumn/KanbanColumn";

export default function ColumnList() {
  const {
    data: columns = [],
    isLoading: loadingCols,
    isError: errorCols,
  } = useGetColumnsQuery();
  const {
    data: tasks = [],
    isLoading: loadingTasks,
    isError: errorTasks,
  } = useGetTasksQuery();

  if (loadingCols || loadingTasks || errorCols || errorTasks) {
    return <div>Loding...</div>;
  }

  return (
    <ul className="flex gap-[10px]">
      {columns.map((column: Column) => {
        const columnTasks = tasks.filter(
          (task: Task) => task.columnId == column.id
        );

        return (
          <KanbanColumn key={column.id} column={column} tasks={columnTasks} />
        );
      })}
    </ul>
  );
}
