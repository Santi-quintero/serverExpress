"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gameController_1 = require("../game/gameController");
var fs = require('fs');
var router = (0, express_1.Router)();
var gameController = new gameController_1.GameController();
var json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8');
var tasks = JSON.parse(json_tasks);
router.get('/', function (req, res) {
    res.send('Hola mundo');
});
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});
router.get('/new-tasks', function (req, res) {
    res.send({ tasks: tasks });
});
router.post('/new-tasks', function (req, res) {
    var description = req.body.description;
    var newTask = {
        id: tasks.length + 1,
        description: description,
        status: 'pending'
    };
    tasks.push(newTask);
    var json_tasks = JSON.stringify(tasks);
    fs.writeFileSync('src/tasks.json', json_tasks, 'utf-8');
    console.log(description);
    res.end("received");
});
exports.default = router;
//# sourceMappingURL=router.js.map