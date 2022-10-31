"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListController = void 0;
var uuidv4 = require("uuid").v4;
var fs = require("fs");
var ToDoListController = (function () {
    function ToDoListController() {
        this.tasks = [];
        this.taskObject = {};
        this.tasksUsu = [];
        var json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8');
        var usuarios = JSON.parse(json_tasks);
        this.tasksUsu = usuarios;
    }
    ToDoListController.prototype.addTask = function (id, description, estimation) {
        var json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8');
        var usuarios = JSON.parse(json_tasks);
        var index = usuarios.findIndex(function (usuario) { return usuario.id === id; });
        if (index === -1) {
            var newTask = {
                id: this.tasks.length + 1,
                description: description,
                estimation: estimation,
                completed: false
            };
            this.tasks.push(newTask);
            var newTaskObject = {
                id: id,
                task: this.tasks
            };
            this.taskObject[id] = this.tasks;
            this.tasksUsu.push(newTaskObject);
            var json_tasks2 = JSON.stringify(this.tasksUsu);
            ;
            fs.writeFileSync('./src/tasks.json', json_tasks2, 'utf-8');
        }
        else {
            this.tasks = this.tasksUsu[index].task;
            console.log(this.tasks);
            var newTask = {
                id: this.tasks.length + 1,
                description: description,
                estimation: estimation,
                completed: false
            };
            this.tasks.push(newTask);
            this.taskObject[id] = this.tasks;
            this.tasksUsu[index].task = this.tasks;
            var json_tasks2 = JSON.stringify(this.tasksUsu);
            fs.writeFileSync('./src/tasks.json', json_tasks2, 'utf-8');
        }
    };
    return ToDoListController;
}());
exports.ToDoListController = ToDoListController;
//# sourceMappingURL=toDoListController.js.map