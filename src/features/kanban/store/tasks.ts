import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Task from "../../../types/kanban/Task";

const initialState: Task[] = [
  {
    id: 0,
    title: "Create a new task",
    text: "Create a new task",
    columnId: 1,
    status: "todo",
  },
  {
    id: 1,
    title: "Add functionality to create a new task",
    text: "Add functionality to create a new task",
    columnId: 1,
    status: "todo",
  },
  {
    id: 2,
    title: "Delete a task",
    text: "Delete a task",
    columnId: 0,
    status: "todo",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        title: string;
        text: string;
        columnId: number;
        status: string;
      }>
    ): void => {
      const newTask = {
        id: state.length ? state[state.length - 1].id + 1 : 0,
        ...action.payload,
      };
      state.push(newTask);
    },
    remove: (state, action: PayloadAction<number>): Task[] => {
      return state.filter((task: Task) => task.id !== action.payload);
    },
    move: (
      state,
      action: PayloadAction<{ taskId: number; columnId: number }>
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
