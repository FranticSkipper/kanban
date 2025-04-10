import Column from "../../../../entities/column/type";
import useAddTask from "../../model";
import FormColumnOption from "./FormColumnOption/FormColumnOption";

export default function AddTaskForm() {
  const { formData, columns, loadingCols, errorCols, handleAdd } = useAddTask();

  if (loadingCols || errorCols) {
    return <div>Loading...</div>;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleAdd();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => {
              formData.setTitle(e.target.value);
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
            value={formData.text}
            onChange={(e) => {
              formData.setText(e.target.value);
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
            value={formData.columnId}
            onChange={(e) => {
              formData.setColumnId(e.target.value);
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
