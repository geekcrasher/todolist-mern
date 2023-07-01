import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todo: [],
   title: '',
   description: '',
   priority: ''
}

const taskSlice = createSlice({
   name: 'Task',
   initialState,
   reducers: {
      taskTitle: (state, action) => {
         state.title = action.payload
      },
      taskDescription: (state, action) => {
         state.description = action.payload
      },
      taskPriority: (state, action) => {
         state.priority = action.payload
      }
   }
})

const {taskTitle, taskDescription, taskPriority} = taskSlice.actions

export default taskSlice.reducer

