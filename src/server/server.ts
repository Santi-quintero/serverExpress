import express = require('express')
import router from '../router/router';
export default  class Server{
    public app: express.Application;

    constructor(private port : number){
        this.app= express();
    }

    public FormData(){
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