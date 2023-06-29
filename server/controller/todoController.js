
// get todo
// route -> GET /api/todos
const getTodo = async (req, res) => {
   res.status(200).json({ msg: 'Get Tasks' })
}

// post todo
// route -> POST /api/todos
const addTodo = async (req, res) => {
   res.status(200).json({ msg: 'Add Todo' })
}

// update todo
// route -> PUT /api/todos/:id
const updateTodo = async (req, res) => {
   res.status(200).json({ msg: 'Update Todo' })
}

// delete todo
// route -> DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
   res.status(200).json({ msg: 'Delete Todo' })
}


module.exports = {
   getTodo,
   addTodo,
   updateTodo,
   deleteTodo
}