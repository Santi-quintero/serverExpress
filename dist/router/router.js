"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gameController_1 = require("../game/gameController");
var toDoListController_1 = require("../toDoList/toDoListController");
var uuidv4 = require('uuid').v4;
var fs = require('fs');
var router = (0, express_1.Router)();
var gameController = new gameController_1.GameController();
var toDoListTask = new toDoListController_1.ToDoListController();
var json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8');
var usuarios = JSON.parse(json_tasks);
router.get('/', function (req, res) {
    res.send('Hola mundo');
});
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});
router.get('/new-tasks', function (req, res) {
    res.send({ usuarios: usuarios });
});
router.post('/new-task', function (req, res) {
    var _a = req.body, id = _a.id, description = _a.description, estimation = _a.estimation;
    if (!description) {
        res.status(400).send({ error: 'Task is required' });
    }
    toDoListTask.addTask(id, description, estimation);
    res.send("received");
});
exports.default = router;
//# sourceMappingURL=router.js.map