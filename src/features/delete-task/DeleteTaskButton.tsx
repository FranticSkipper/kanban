import useDeleteTask from "./model";

export default function DeleteTaskButton({
  taskID,
  children,
}: {
  taskID: string;
  children: React.ReactNode;
}) {
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
