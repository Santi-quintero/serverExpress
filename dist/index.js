"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const server = server_1.default.init(8080);
server.start();
server.Settings();
server.router();
//# sourceMappingURL=index.js.map