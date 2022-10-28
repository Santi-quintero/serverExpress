import { Router, Request, Response } from "express";
import { GameController } from "../game/gameController";


const router = Router();
const gameController = new GameController();
router.get('/',(req: Request, res: Response)=>{
    res.send('Hola mundo')
    

})
router.get('/send/:number',(req: Request, res: Response)=>{
    console.log(req.params.number)
    res.send('Hola mundo2')
    
})
router.get('/play/:number',(req: Request, res: Response)=>{
    let numero = req.params.number
    res.send(gameController.play(numero))
})

export default router;