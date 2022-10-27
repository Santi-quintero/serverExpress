import { Router, Request, Response } from "express";
import { GameController } from "../game/gameController";


const router = Router();

router.get('/',(rep: Request, res: Response)=>{
    res.send('Hola mundo')
    

})
router.get('/send/:number',(rep: Request, res: Response)=>{
    console.log(rep.params.number)
    res.send('Hola mundo2')
    

})

export default router;