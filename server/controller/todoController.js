const TodoModel = require('../models/todoModel')


// get todo
// route -> GET /api/todos
const getTodo = async (req, res) => {

   try {
      const response = await TodoModel.find()
      console.log(response.data)
   } catch (err) {
      console.log(err)
   }
   // res.send('Hello')
   // res.status(200).json({ msg: 'Get Tasks' })
}

// post todo
// route -> POST /api/todos
const addTodo = async (req, res) => {
  try {
   const response = await TodoModel.create(req.body)
   res.json(response)
   res.status(200).json("Task created")
  } catch (error) {
   res.status(500).json({message: error.message})
  }
}

// update todo
// route -> PUT /api/todos/:id
const updateTodo = async (req, res) => {
   res.status(200).send({ msg: 'Successfully updated the Task' })
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