import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Task from "../../../types/kanban/Task";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>): void => {
      const newTask = {
        ...action.payload,
      };
      state.push(newTask);
    },
    remove: (state, action: PayloadAction<string>): Task[] => {
      return state.filter((task: Task) => task.id !== action.payload);
    },
    move: (
      state,
      action: PayloadAction<{ taskId: string; columnId: string }>
    ) => {
      const task: Task | undefined = state.find(
        (task: Task) => task.id === action.payload.taskId
      );

      if (task) {
        return state.map((t: Task) => {
          return t.id === task.id
            ? { ...t, columnId: action.payload.columnId }
            : t;
        });
      }
    },
  },
});

export const { add, remove, move } = tasksSlice.actions;
export default tasksSlice.reducer;
