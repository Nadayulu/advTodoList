const axios = require('axios');
const Todo = require('../../mongoDB');
// const express = require('express');
// const router = express.Router();

const todoController = {
    saveTodoList: function(req, res) {
        let todo = new Todo();
        todo.todoEntry = req.body.todoEntry;
        todo.tag = req.body.tag;
        todo.status = req.body.status;
        todo.save(function(err) {
            if (err)
              res.send("could not save the data", err)

            res.json({message: "Todo has been created!"});
        })
    },
    getAllTodos: function(req, res) {
        Todo.find(function(err, todos) {
            if (err) 
              res.send("Couldnt get the todos from the list", err)

            res.json(todos);
        })
    }
}

module.exports = todoController