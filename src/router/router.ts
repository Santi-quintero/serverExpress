import { Router, Request, Response } from "express";
import { GameController } from "../game/gameController";

const fs = require('fs')

const router = Router();
const gameController = new GameController();

// const tasks: {description:any}[]=[]
const json_tasks = fs.readFileSync('./src/tasks.json', 'utf-8')
const tasks = JSON.parse(json_tasks)

router.get('/',(req: Request, res: Response)=>{
    res.send('Hola mundo')
    

})
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});

router.get('/new-tasks',(req: Request, res: Response)=>{
    res.send({tasks})
    

})
router.post('/new-tasks',(req: Request, res:Response)=>{
    const {description } = req.body;

    let newTask={
        id: tasks.length +1,
        description: description,
        status: 'pending'
    }
    tasks.push(newTask)
    const json_tasks= JSON.stringify(tasks)
    fs.writeFileSync('src/tasks.json', json_tasks, 'utf-8')
    console.log(description)
    res.end("received")
})

export default router;