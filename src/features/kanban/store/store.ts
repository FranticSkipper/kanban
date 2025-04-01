import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks";
import columnSlice from "./columns";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    column: columnSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
