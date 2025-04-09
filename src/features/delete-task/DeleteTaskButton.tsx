import useDeleteTask from "./model";

interface Props {
  taskID: string;
  children: React.ReactNode;
}

export default function DeleteTaskButton({ taskID, children }: Props) {
  const { handleDelete, isLoading } = useDeleteTask();

  return (
    <button
      onClick={() => {
        handleDelete(taskID);
      }}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
