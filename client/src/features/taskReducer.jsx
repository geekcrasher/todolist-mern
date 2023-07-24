import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: []
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    }
  },
});

export const { setTodo } = taskSlice.actions;

export default taskSlice.reducer;
