import { useSelector } from "react-redux";
import Column from "../../../types/kanban/Column";
import Task from "../../../types/kanban/Task";
import KanbanColumn from "./KanbanColumn/KanbanColumn";
import { RootState } from "../../../features/kanban/store/store";

export default function ColumnList() {
  const columns = useSelector((state: RootState) => state.column);
  const tasks = useSelector((state: RootState) => state.tasks);

  const columnsToRender = columns.map((column: Column) => {
    const columnTasks = tasks.filter(
      (task: Task) => task.columnId === column.id
    );

    return <KanbanColumn key={column.id} column={column} tasks={columnTasks} />;
  });

  return <ul className="flex gap-[10px]">{columnsToRender}</ul>;
}
