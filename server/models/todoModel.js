const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
   title: {
      type: String,
      require: [true, 'Please add a title task']
   },
   description: {
      type: String,
      require: [true, 'Please add a task description']
   },
   priority: {
      type: String,
      require: [true, 'Please add a level of priority']
   },
}, {
   timeStamps: true
})


module.exports = mongoose.model('Todo', todoSchema)