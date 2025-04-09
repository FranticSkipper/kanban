import { useDeleteTaskMutation } from "../../entities/task/api";

export default function useDeleteTask() {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  function handleDelete(id: string) {
    deleteTask(id);
  }

  return { handleDelete, isLoading };
}
