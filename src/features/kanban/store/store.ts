import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks";
import columnSlice from "./columns";
import { kanbanApi } from "./kanbanApi";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    column: columnSlice,
    [kanbanApi.reducerPath]: kanbanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
