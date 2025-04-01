import ColumnList from "./ColumnList/ColumnList";
import Title from "./Title/Title";

export default function Kanban() {
  return (
    <div className="rounded-xl border-black border-2 p-4">
      <Title />
      <ColumnList />
    </div>
  );
}
