import express = require('express')
import {router} from '../router/router';

const path = require('path')
const morgan = require('morgan')
export default  class Server{
    public app: express.Application;

    constructor(private port : number){
        this.app= express();
    }

    public Settings(){
        this.app.use(express.json())
       
    }
    router(){
        this.app.use(router)
    }
    start(){
        this.app.listen(this.port)
     }
    static init(port : number ): Server{
        return new Server(port);
    }
}