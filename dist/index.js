"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var server = server_1.default.init(8080);
server.start();
server.FormData();
server.router();
//# sourceMappingURL=index.js.map