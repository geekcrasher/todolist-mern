const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
   title: {
      type: String,
      required: [true, 'Please add a title task']
   },
   description: {
      type: String,
      required: [true, 'Please add a task description']
   },
   priority: {
      type: String,
      required: [true, 'Please add a level of priority']
   },
}, {
   timestamps: true
})


module.exports = mongoose.model('Todo', todoSchema)