import Column from "../../../../types/kanban/Column";

export default function FormColumnOption({ column }: { column: Column }) {
  return <option value={column.id}>{column.title}</option>;
}
