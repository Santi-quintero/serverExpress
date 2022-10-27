"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./router/router");
var server_1 = require("./server/server");
var server = server_1.default.init(8080);
server.app.use(router_1.default);
server.start();
//# sourceMappingURL=index.js.map