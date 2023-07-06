import axios from "axios";

const api =  axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
   headers: { "Access-Control-Allow-Origin": "*" },
})

// get all the tasks
export const getTasks = async () => {
   return await api.get('/todos')
}

// get a single task
export const getTask = async (_id) => {
   const response = await api.get(`/todos/${_id}`)
   return response.data
}

// add a task
export const addTask = async (todo ) => {
   return await api.post('/todos', todo)
}

// update a task
export const updateTask = async (todo) => {
   return await api.put(`/todos/${todo._id}`, todo)
}

// delete a task
export const deleteTask = async (_id) => {
   return await api.delete(`/todos/${_id}`, _id)
}


export default api;