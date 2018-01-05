const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoData')

var todoSchema = mongoose.Schema({
  todoEntry: {type: String, required: true},
  tag: {type: String, required: false},
  whichBox: String
})

var Todo = mongoose.model('Todo', todoSchema);

var save = (todoEntry, tag, whichBox, cb) => {
  new Todo({
    todoEntry: todoEntry,
    tag: tag,
    whichBox: whichBox
  }).save(function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
}

var loadAll = (cb) => {
  Todo.find(function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
}
module.exports.save = save;
module.exports.loadAll = loadAll;