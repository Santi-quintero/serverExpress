"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router_1 = require("../router/router");
var Server = (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
    }
    Server.prototype.FormData = function () {
        this.app.use(express.json());
    };
    Server.prototype.router = function () {
        this.app.use(router_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.port);
    };
    Server.init = function (port) {
        return new Server(port);
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map