import { useState } from "react";
import Task from "../../../../../../../types/kanban/Task";
import { useGetColumnsQuery } from "../../../../../../../features/kanban/store/columnsApi";
import { useUpdateTaskMutation } from "../../../../../../../features/kanban/store/tasksApi";

interface IProps {
  task: Task;
}

const TaskMoveSelect: React.FC<IProps> = function ({ task }) {
  const [selectedValue, setSelectedValue] = useState<string>(task.columnId);
  const {
    data: columns = [],
    isLoading: loadingCols,
    isError: errorCols,
  } = useGetColumnsQuery();
  const [updateTask] = useUpdateTaskMutation();

  function handleTaskMove() {
    updateTask({
      ...task,
      columnId: selectedValue,
    });
  }

  if (loadingCols || errorCols) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        {columns.map((column) => {
          return (
            <option key={column.id} value={column.id}>
              {column.title}
            </option>
          );
        })}
      </select>
      <button onClick={handleTaskMove}>Move</button>
    </div>
  );
};

export default TaskMoveSelect;
