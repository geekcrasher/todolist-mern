import axios from "axios";

const api =  axios.create({
   // baseURL: 'http://localhost:4000',

   baseURL: import.meta.env.VITE_API_BASE_URL,
   headers: { "Access-Control-Allow-Origin": "*" },
})

// get all the tasks
export const getTasks = async () => {
   // const response = await api.get('/todos')  
   return await api.get('/todos')
}

// get a single task
export const getTask = async (id) => {
   const response = await api.get(`/todos/${id}`)
   return response.data
}

// add a task
export const addTask = async (todo ) => {
   return await api.post('/todos', todo)
}

// update a task
export const updateTask = async (todo) => {
   return await api.put(`/todos/${todo.id}`, todo)
}

// delete a task
export const deleteTask = async (id) => {
   return await api.delete(`/todos/${id}`, id)
}


export default api;