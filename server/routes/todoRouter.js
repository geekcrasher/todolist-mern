const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
   res.status(200).json({ msg: 'Get Todos' })
})

router.post('/', (req, res) => {
   res.status(200).json({ msg: 'Add Todo' })
})


router.put('/:id', (req, res) => {
   res.status(200).json({ msg: 'Update Todo' })
})

router.delete('/:id', (req, res) => {
   res.status(200).json({ msg: 'Delete Todo' })
})


module.exports = router