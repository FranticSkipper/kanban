import AddTaskForm from "../../features/add-task/ui/AddTaskForm/AddTaskForm";
import ColumnList from "./ColumnList/ColumnList";
import Title from "./Title";

export default function Kanban() {
  return (
    <div className="rounded-xl border-black border-2 p-4">
      <Title />
      <ColumnList />
      <AddTaskForm />
    </div>
  );
}
