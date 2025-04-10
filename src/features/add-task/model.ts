import { useEffect, useState } from "react";
import { useAddTaskMutation } from "../../entities/task/api";
import { useGetColumnsQuery } from "../../entities/column/api";

export default function useAddTask() {
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

  function handleAdd() {
    addTask({
      title: title,
      text: text,
      columnId: columnId,
      status: "todo",
    });

    setTitle("");
    setText("");
    setColumnId("");
  }

  return {
    formData: {
      title,
      setTitle,
      text,
      setText,
      columnId,
      setColumnId,
    },
    columns,
    loadingCols,
    errorCols,
    handleAdd,
  };
}
