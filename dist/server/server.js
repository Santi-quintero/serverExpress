"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("../router/router");
const path = require('path');
const morgan = require('morgan');
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    Settings() {
        this.app.use(express.json());
    }
    router() {
        this.app.use(router_1.router);
    }
    start() {
        this.app.listen(this.port);
    }
    static init(port) {
        return new Server(port);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map