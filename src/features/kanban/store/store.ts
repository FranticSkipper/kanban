import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks";
import columnSlice from "./columns";
import { columnsApi } from "./columnsApi";
import { tasksApi } from "./tasksApi";

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
