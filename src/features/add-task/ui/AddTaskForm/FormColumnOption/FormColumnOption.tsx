import Column from "../../../../../entities/column/type";

export default function FormColumnOption({ column }: { column: Column }) {
  return <option value={column.id}>{column.title}</option>;
}
