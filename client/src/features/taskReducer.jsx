import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  title: "",
  description: "",
  priority: "",
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
      console.log( state.todo);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { setTodo, setTitle, setDescription, setPriority } = taskSlice.actions;

export default taskSlice.reducer;
