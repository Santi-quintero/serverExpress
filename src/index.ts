import router from './router/router';
import Server from './server/server'

const server = Server.init(8080);

server.app.use(router)
server.start();