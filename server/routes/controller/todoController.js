const axios = require('axios');
const db = require('../../mongoDB')
// const express = require('express');
// const router = express.Router();

const todoController = {
    saveTodoList: function(req, res) {
        db.save(req.body.todoEntry, req.body.tag, req.body.whichBox, function(err, data) {
            // console.log(req.body)
            if(err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(data);
            }
        })
    },
    getAllTodos: function(req, res) {
        db.loadAll(function(err, data) {
            console.log("THIS IS GET DATA", data)
           res.json(data);
        })
    }
}

module.exports = todoController