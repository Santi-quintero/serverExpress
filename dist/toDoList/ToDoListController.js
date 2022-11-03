"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListController = void 0;
const { v4: uuidv4 } = require("uuid");
const pushId = require('unique-push-id');
const fs = require("fs");
class ToDoListController {
    constructor() {
        this.tasks = [];
        this.tasksUsu = [];
        this.usuTask = [];
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        const usuarios = JSON.parse(json_tasks);
        this.tasksUsu = usuarios;
    }
    addUsuario(description, estimation) {
        let idgenerade = uuidv4();
        let newTask = {
            id: pushId(),
            description: description,
            estimation: estimation,
            completed: false,
        };
        this.tasks.push(newTask);
        this.tasksUsu.push({ id: idgenerade, task: this.tasks, endTask: [] });
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return idgenerade;
    }
    addTask(id, description, estimation) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        const usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.tasks = this.tasksUsu[index].task;
        let newTask = {
            id: pushId(),
            description: description,
            estimation: estimation,
            completed: false,
        };
        this.tasks.push(newTask);
        this.tasksUsu[index].task = this.tasks;
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return (this.tasksUsu[index]);
    }
    deleteTask(id, idTask) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.tasks = this.tasksUsu[index].task;
        let indexTask = this.tasks.findIndex((task) => task.id === idTask);
        this.tasks.splice(indexTask, 1);
        this.tasksUsu[index].task = this.tasks;
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return this.tasksUsu;
    }
    editTask(id, idTask, description, estimation) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.tasks = this.tasksUsu[index].task;
        let indexTask = this.tasks.findIndex((task) => task.id === idTask);
        this.tasks[indexTask].description = description;
        this.tasks[indexTask].estimation = estimation;
        this.tasksUsu[index].task = this.tasks;
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return this.tasksUsu[index];
    }
    getUsuTask(id) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.usuTask = usuarios[index];
        return this.usuTask;
    }
    completedTask(id, idTask) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.tasks = this.tasksUsu[index].task;
        let indexTask = this.tasks.findIndex((task) => task.id === idTask);
        this.tasks[indexTask].completed = true;
        this.tasksUsu[index].task = this.tasks;
        this.tasksUsu[index].endTask.push(this.tasks[indexTask]);
        this.tasks.splice(indexTask, 1);
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return this.tasksUsu;
    }
    uncompletedTask(id, idTask) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        this.tasks = this.tasksUsu[index].task;
        let indexTask = this.tasksUsu[index].endTask.findIndex((task) => task.id === idTask);
        this.tasksUsu[index].endTask[indexTask].completed = false;
        this.tasks.push(this.tasksUsu[index].endTask[indexTask]);
        this.tasksUsu[index].task = this.tasks;
        this.tasksUsu[index].endTask.splice(indexTask, 1);
        const json_tasks2 = JSON.stringify(this.tasksUsu);
        fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        return this.tasksUsu;
    }
    getUsers() {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        return usuarios;
    }
}
exports.ToDoListController = ToDoListController;
//# sourceMappingURL=toDoListController.js.map