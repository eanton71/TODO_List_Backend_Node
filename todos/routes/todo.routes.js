'use strict'

const TODOController = require('../controllers/todo.controller');

exports.todoRoutes = function (app) {
    app.get('/api/get_todos', TODOController.getAllTODOs);
    app.post('/api/add_todo', TODOController.addTODO);
    app.delete('/api/delete_todo/:id', TODOController.deleteTODO);
    app.put('/api/put_todo', TODOController.putTODO);
}