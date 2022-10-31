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
    res.send('Hola mundo')
    

})
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});

router.get('/new-tasks',(req: Request, res: Response)=>{
    res.send({usuarios})
    

})
router.post('/new-task',(req: Request, res:Response)=>{
    const {id,description, estimation} = req.body;
    if (!description) {
        res.status(400).send({error: 'Task is required'});
    }
    toDoListTask.addTask(id,description, estimation);
    res.send("received")
    
})

export default router;