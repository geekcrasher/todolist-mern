import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
   {  
      title: "", 
      description: "", 
      priority: "" 
   }
],
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
    },

   //  setTodo: (state, action) => {
   //    state.title = action.payload;
   //    state.description = action.payload;
   //    state.priority = action.payload;
   //  }


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
