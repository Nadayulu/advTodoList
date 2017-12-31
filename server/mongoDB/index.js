const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoData')

const Schema = mongoose.Schema;

var todoSchema = new Schema({
  todoEntry: {type: String, required: true},
  tag: {type: String, required: false},
  status: String
})

module.exports = mongoose.model('todo', todoSchema);