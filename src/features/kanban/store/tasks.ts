import { configureStore } from "@reduxjs/toolkit";

export const tasksStore = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof tasksStore.getState>;
export type AppDispatch = typeof tasksStore.dispatch;
