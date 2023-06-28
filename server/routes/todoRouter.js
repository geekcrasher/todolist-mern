const express = require('express')
const router = express.Router()
const { getTodo, addTodo, updateTodo, deleteTodo} = require('../controller/todoController')

/**
 * chaining the routes with the same path/route
 * 
 * get and post a task - > ('/')
 * update and delete a task -> ('/:id')
 */

router.route('/').get(getTodo).post(addTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)


module.exports = router