import { useGetColumnsQuery } from "../../../entities/column/api";
import Column from "../../../entities/column/type";
import { useGetTasksQuery } from "../../../entities/task/api";
import Task from "../../../entities/task/type";
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
