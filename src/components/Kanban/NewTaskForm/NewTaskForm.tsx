import { useDispatch, useSelector } from "react-redux";
import FormColumnOption from "./FormColumnOption/FormColumnOption";
import Column from "../../../types/kanban/Column";
import { useState } from "react";
import { add } from "../../../features/kanban/store/tasks";
import { RootState } from "../../../features/kanban/store/store";

export default function NewTaskForm() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [columnId, setColumnId] = useState<string>("");
  const dispatch = useDispatch();

  const columns = useSelector((state: RootState) => state.column);
  const optionsToRender = columns.map((column: Column) => (
    <FormColumnOption key={column.id} column={column} />
  ));

  function handleSubmti(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(
      add({
        title: title,
        text: text,
        columnId: +columnId,
        status: "todo",
      })
    );

    setTitle("");
    setText("");
    setColumnId("");
  }

  return (
    <form onSubmit={handleSubmti}>
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
            {optionsToRender}
          </select>
        </label>
      </p>

      <button type="submit">Create</button>
    </form>
  );
}
