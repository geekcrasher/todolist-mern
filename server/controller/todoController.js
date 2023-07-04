const TodoModel = require("../models/todoModel");

// get todo
// route -> GET /api/todos
const getTasks = async (req, res) => {
  try {
    const response = await TodoModel.find();
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a single todo
const getTask = async (req, res) => {
   try {
      const { id } = req.params
      const response = await TodoModel.findById(id)

      if(!response) {
         res.status(404).send(`No task exist with an id of ${id}`)
      }
      res.status(200).json({ message: response });
   } catch (error) {
      res.status(500).json({message: error.message})
   }
}

// post todo
// route -> POST /api/todos
const addTask = async (req, res) => {
  try {
    const response = await TodoModel.create(req.body);
    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update todo
// route -> PUT /api/todos/:id
const updateTask = async (req, res) => {
  res.status(200).send({ msg: "Successfully updated the Task" });
};

// delete todo
// route -> DELETE /api/todos/:id
const deleteTask = async (req, res) => {
   try {
      const { id } = req.params
      const response = await TodoModel.findByIdAndDelete(id)

      if(!response) {
         res.status(404).send(`No task exist with an id of ${id}`)
      }
      res.status(200).json({message: response})
   } catch (error) {
      res.status(500).json({message: error.message})
   }
};

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
