const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoData')

const Schema = mongoose.Schema;

var todoSchema = new Schema({
  name: String
})

module.exports = mongoose.model('todo', todoSchema);