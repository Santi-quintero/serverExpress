"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const gameController_1 = require("../game/gameController");
const toDoListController_1 = require("../toDoList/toDoListController");
const router = (0, express_1.Router)();
exports.router = router;
const gameController = new gameController_1.GameController();
const toDoListTask = new toDoListController_1.ToDoListController();
router.get("/play/:number", function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});
router.get("/usuario-tasks", (req, res) => {
    res.send(toDoListTask.getUsers());
});
router.post("/usuario-tasks", (req, res) => {
    const { id, description, estimation } = req.body;
    if (!description) {
        res.status(400).send({ error: "Task is required" });
    }
    toDoListTask.addTask(id, description, estimation);
    res.send("Agregado");
});
router.delete("/usuario-task/delete", (req, res) => {
    const { id, idTask } = req.body;
    if (!id) {
        res.status(400).send({ error: "id is required type string" });
    }
    if (!idTask) {
        res.status(400).send({ error: "idTask is required type number" });
    }
    toDoListTask.deleteTask(id, idTask);
    res.send("received, delete");
});
router.put("/usuario-task/update", (req, res) => {
    const { id, idTask, description, estimation } = req.body;
    if (!id) {
        res.status(400).send({ error: "id is required type string" });
    }
    if (!idTask) {
        res.status(400).send({ error: "idTask is required type number" });
    }
    if (!description) {
        res.status(400).send({ error: "description is required type string" });
    }
    if (!estimation) {
        res.status(400).send({ error: "estimation is required type number" });
    }
    toDoListTask.editTask(id, idTask, description, estimation);
    res.send("received, update");
});
router.get("/usuario-task/:string", (req, res) => {
    const id = req.params.string;
    res.send(toDoListTask.getUsuTask(id));
});
router.patch("/usuario-task/completed", (req, res) => {
    const { id, idTask } = req.body;
    if (!id) {
        res.status(400).send({ error: "id is required type string" });
    }
    if (!idTask) {
        res.status(400).send({ error: "idTask is required type number" });
    }
    toDoListTask.completedTask(id, idTask);
    res.send("received, completed");
});
router.patch("/usuario-task/pending", (req, res) => {
    const { id, idTask } = req.body;
    if (!id) {
        res.status(400).send({ error: "id is required type string" });
    }
    if (!idTask) {
        res.status(400).send({ error: "idTask is required type number" });
    }
    toDoListTask.uncompletedTask(id, idTask);
    res.send("passed to pending");
});
//# sourceMappingURL=router.js.map