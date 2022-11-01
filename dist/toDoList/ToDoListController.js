"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListController = void 0;
const { v4: uuidv4 } = require("uuid");
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
    addTask(id, description, estimation) {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        const usuarios = JSON.parse(json_tasks);
        let index = usuarios.findIndex((usuario) => usuario.id === id);
        if (index === -1) {
            let newTask = {
                id: this.tasks.length + 1,
                description: description,
                estimation: estimation,
                completed: false,
            };
            this.tasks.push(newTask);
            this.tasksUsu.push({ id: id, task: this.tasks, endTask: [] });
            const json_tasks2 = JSON.stringify(this.tasksUsu);
            fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        }
        else {
            this.tasks = this.tasksUsu[index].task;
            let newTask = {
                id: this.tasks.length + 1,
                description: description,
                estimation: estimation,
                completed: false,
            };
            this.tasks.push(newTask);
            this.tasksUsu[index].task = this.tasks;
            const json_tasks2 = JSON.stringify(this.tasksUsu);
            fs.writeFileSync("./src/tasks.json", json_tasks2, "utf-8");
        }
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
    }
    getUsers() {
        const json_tasks = fs.readFileSync("./src/tasks.json", "utf-8");
        let usuarios = JSON.parse(json_tasks);
        return usuarios;
    }
}
exports.ToDoListController = ToDoListController;
//# sourceMappingURL=toDoListController.js.map