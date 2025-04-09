import { useGetColumnsQuery } from "../../../entities/column/api";
import Column from "../../../entities/column/type";
import { useAddTaskMutation } from "../../../entities/task/api";
import FormColumnOption from "./FormColumnOption/FormColumnOption";
import { useEffect, useState } from "react";

export default function NewTaskForm() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [columnId, setColumnId] = useState<string>("");
  const [addTask] = useAddTaskMutation();
  const {
    data: columns = [],
    isLoading: loadingCols,
    isError: errorCols,
  } = useGetColumnsQuery();

  useEffect(() => {
    if (columns.length) {
      setColumnId(columns[0].id);
    }
  }, [columns]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(columnId);

    addTask({
      title: title,
      text: text,
      columnId: columnId,
      status: "todo",
    });

    resetForm();
  }

  function resetForm() {
    setTitle("");
    setText("");
    setColumnId("");
  }

  if (loadingCols || errorCols) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Title</span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Task title"
            required
          />
        </label>
      </p>

      <p>
        <label>
          <span>Text</span>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Task text"
            required
          />
        </label>
      </p>

      <p>
        <label>
          <span>Column</span>
          <select
            name="columnId"
            value={columnId}
            onChange={(e) => {
              setColumnId(e.target.value);
            }}
            required
          >
            {columns.map((column: Column) => (
              <FormColumnOption key={column.id} column={column} />
            ))}
          </select>
        </label>
      </p>

      <button type="submit">Create</button>
    </form>
  );
}
