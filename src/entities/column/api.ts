import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Column from "./type";

export const columnsApi = createApi({
  reducerPath: "columnApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getColumns: builder.query<Column[], void>({
      query: () => "columns",
    }),
  }),
});

export const { useGetColumnsQuery } = columnsApi;
