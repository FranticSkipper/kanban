import { useDispatch, useSelector } from "react-redux";
import { move } from "../../../../../../../features/kanban/store/tasks";
import { RootState } from "../../../../../../../features/kanban/store/store";
import { useState } from "react";
import Task from "../../../../../../../types/kanban/Task";

interface IProps {
  task: Task;
}

const TaskMoveSelect: React.FC<IProps> = function ({ task }) {
  const [selectedValue, setSelectedValue] = useState<number>(task.columnId);
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.column);

  const optionToRender = columns.map((column) => {
    return (
      <option key={column.id} value={column.id}>
        {column.title}
      </option>
    );
  });

  function handleTaskMove() {
    dispatch(move({ taskId: task.id, columnId: selectedValue }));
    setSelectedValue(0);
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(+e.target.value);
        }}
      >
        {optionToRender}
      </select>
      <button onClick={handleTaskMove}>Move</button>
    </div>
  );
};

export default TaskMoveSelect;
