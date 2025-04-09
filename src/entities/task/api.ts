import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import Task from "./type";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "tasks",
    }),
    addTask: builder.mutation<void, Partial<Task>>({
      query: (newProduct) => ({
        url: "tasks",
        method: "POST",
        body: newProduct,
      }),
    }),
    deleteTask: builder.mutation<void, string>({
      query: (productID) => ({
        url: `tasks/${productID}`,
        method: "DELETE",
      }),
    }),
    updateTask: builder.mutation<void, Task>({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),

      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.map((t) => {
              return task.id === t.id ? task : t;
            });
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
