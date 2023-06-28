const express = require('express')
const router = express.Router()

// get all tasks
router.get('/', (req, res) => {
   res.status(200).json({ msg: 'Get Tasks' })
})

// add a new task
router.post('/', (req, res) => {
   res.status(200).json({ msg: 'Add Todo' })
})

// update a task
router.put('/:id', (req, res) => {
   res.status(200).json({ msg: 'Update Todo' })
})

// delete a task
router.delete('/:id', (req, res) => {
   res.status(200).json({ msg: 'Delete Todo' })
})


module.exports = router