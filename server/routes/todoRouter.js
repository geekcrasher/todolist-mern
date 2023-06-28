const express = require('express')
const router = express.Router()
const {getTodo, addTodo, updateTodo, deleteTodo} = require('../controller/todoController')

// get all tasks
router.get('/', getTodo)

// add a new task
router.post('/', addTodo)

// update a task
router.put('/:id', updateTodo)

// delete a task
router.delete('/:id', deleteTodo)


module.exports = router