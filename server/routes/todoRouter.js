const express = require('express')
const router = express.Router()
const { 
   getTasks, 
   getTask,
   addTask, 
   updateTask, 
   deleteTask,
} = require('../controller/todoController')

/**
 * chaining the routes with the same path/route
 * 
 * get and post a task - > ('/')
 * update and delete a task -> ('/:id')
 */

router.route('/').get(getTasks).post(addTask)
router.get('/:id', getTask)
router.route('/:id').put(updateTask).delete(deleteTask)


module.exports = router