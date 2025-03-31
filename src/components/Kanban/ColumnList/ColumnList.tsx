import Column from "../../../types/kanban/Column";
import Task from "../../../types/kanban/Task";
import KanbanColumn from "./KanbanColumn/KanbanColumn";

// TODO: remove all of theese test arrs in the future.

const columns: Column[] = [
  {
    id: 0,
    title: "Text",
  },
];

const tasks: Task[] = [
  {
    id: 0,
    title: "test title",
    text: "test text",
    columnId: 0,
    status: "todo",
  },
];

//

export default function ColumnList() {
  const columnsToRender = columns.map((column: Column) => {
    const columnTasks = tasks.filter((task) => task.columnId === column.id);

    return <KanbanColumn key={column.id} column={column} tasks={columnTasks} />;
  });

  return <ul>{columnsToRender}</ul>;
}
