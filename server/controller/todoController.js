
const TodoModel = require("../models/todoModel");


/**
 * get all tasks
 * route -> GET /todo
 */
const getTasks = async (req, res) => {
  try {
    const response = await TodoModel.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * get a single task
 * route -> GET /todos/:id
 */
const getTask = async (req, res) => {
   try {
      const { id } = req.params
      const response = await TodoModel.findById(id)

      if(!response) {
         res.status(404).send(`No task exist with an id of ${id}`)
      }

      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({message: error.message})
   }
}

/**
 * post todo
 * route -> POST /todos
 */
const addTask = async (req, res) => {
  try {
    const response = await TodoModel.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * update todo
 * route -> PUT /todos/:id
 */
const updateTask = async (req, res) => {
   try {
      const { id } = req.params
      const response = await TodoModel.findByIdAndUpdate(
         {_id: id}, req.body, { new: true, runValidators: true}
      )
      
      if (!response) {
         res.status(404).json({ message: "No task found!" });
      }

      res.status(200).json(response)
   } catch (error) {
      res.status(500).json({message: error.message})
   }
};

/**
 * delete todo
 * route -> DELETE /todos/:id
 */
const deleteTask = async (req, res) => {
   try {
      const { id } = req.params
      const response = await TodoModel.findByIdAndDelete(id)

      if(!response) {
         res.status(404).send(`No task exist with an id of ${id}`)
      }

      res.status(200).send('Task successfully deleted')
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
