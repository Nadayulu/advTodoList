const express = require('express');
const todoController = require('./controller/todoController.js')
const router = express.Router();

router.route('/save')
  .post(todoController.saveTodoList)

router.route('/loadAll')
  .get(todoController.getAllTodos)

module.exports = router;