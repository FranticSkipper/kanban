import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import Task from "../../../types/kanban/Task";
import { createApi } from "@reduxjs/toolkit/query/react";
import Column from "../../../types/kanban/Column";

export const kanbanApi = createApi({
  reducerPath: "kanbanApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "tasks",
    }),
    getColumns: builder.query<Column[], void>({
      query: () => "columns",
    }),
  }),
});

export const { useGetTasksQuery, useGetColumnsQuery } = kanbanApi;
