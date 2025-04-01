import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Column from "../../../types/kanban/Column";

const initialState = [
  {
    id: 0,
    title: "To Do",
  },
  {
    id: 1,
    title: "In Progress",
  },
  {
    id: 2,
    title: "Done",
  },
];

const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Column>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>): Column[] => {
      return state.filter((column: Column) => column.id !== action.payload);
    },
  },
});

export const { add, remove } = columnSlice.actions;
export default columnSlice.reducer;
