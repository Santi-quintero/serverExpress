
import Server from './server/server'
const server = Server.init(8080);

server.start();
server.Settings();
server.router();
