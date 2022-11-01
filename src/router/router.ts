import { Router, Request, Response } from "express";
import { GameController } from "../game/gameController";
import { ToDoListController } from "../toDoList/toDoListController";

const  { v4: uuidv4} = require('uuid')
const fs = require('fs')

const router = Router();
const gameController = new GameController();
const toDoListTask = new ToDoListController();

// const tasks: {description:any}[]=[]
const json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8')
const usuarios = JSON.parse(json_tasks)

router.get('/',(req: Request, res: Response)=>{
    res.render('index');
})
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});

router.get('/usuario-tasks',(req: Request, res: Response)=>{
    res.send({usuarios})
})
router.post('/usuario-tasks',(req: Request, res:Response)=>{
    const {id,description, estimation} = req.body;
    if (!description) {
        res.status(400).send({error: 'Task is required'});
    }
    toDoListTask.addTask(id,description, estimation);
    res.send("Agregado")
    
})
router.delete('/usuario-task/delete',(req: Request, res:Response)=>{
    const {id, idTask} = req.body;
    if (!id) {
        res.status(400).send({error: 'id is required type string'}); 
    }
    if (!idTask) {
        res.status(400).send({error: 'idTask is required type number'}); 
    }
    toDoListTask.deleteTask(id,idTask)
    res.send("received, delete")
})
router.put('/usuario-task/update',(req: Request, res:Response)=>{
    const {id, idTask, description, estimation} = req.body;
    if (!id) {
        res.status(400).send({error: 'id is required type string'}); 
    }
    if (!idTask) {
        res.status(400).send({error: 'idTask is required type number'}); 
    }
    if (!description) {
        res.status(400).send({error: 'description is required type string'}); 
    }
    if (!estimation) {
        res.status(400).send({error: 'estimation is required type number'}); 
    }
    toDoListTask.editTask(id, idTask, description, estimation);
    res.send("received, update")

})
router.get('/usuario-task/:string',(req: Request, res:Response)=>{
    // const {id} = req.body;
    // if (!id) {
    //     res.status(400).send({error: 'id is required type string'}); 
    // }
    const id = req.params.string;
    // const usuTask = toDoListTask.getUsuTask(id);
    // res.send(usuTask)
    res.send(toDoListTask.getUsuTask(id));
})

router.patch('/usuario-task/completed',(req: Request, res:Response)=>{
    const {id, idTask} = req.body;
    if (!id) {
        res.status(400).send({error: 'id is required type string'}); 
    }
    if (!idTask) {
        res.status(400).send({error: 'idTask is required type number'}); 
    }
    toDoListTask.completedTask(id, idTask)
    res.send("received, completed")
})
router.patch('/usuario-task/pending',(req: Request, res:Response)=>{
    const {id, idTask} = req.body;
    if (!id) {
        res.status(400).send({error: 'id is required type string'}); 
    }
    if (!idTask) {
        res.status(400).send({error: 'idTask is required type number'}); 
    }
    toDoListTask.uncompletedTask(id, idTask)
    res.send("passed to pending")
})
export  {router};