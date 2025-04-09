import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../entities/task/slice";
import columnSlice from "../entities/column/slice";
import { columnsApi } from "../entities/column/api";
import { tasksApi } from "../entities/task/api";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    column: columnSlice,
    [columnsApi.reducerPath]: columnsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tasksApi.middleware)
      .concat(columnsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
