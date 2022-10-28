"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gameController_1 = require("../game/gameController");
var router = (0, express_1.Router)();
var gameController = new gameController_1.GameController();
router.get('/', function (req, res) {
    res.send('Hola mundo');
});
router.get('/send/:number', function (req, res) {
    console.log(req.params.number);
    res.send('Hola mundo2');
});
router.get('/play/:number', function (req, res) {
    var numero = req.params.number;
    res.send(gameController.play(numero));
});
exports.default = router;
//# sourceMappingURL=router.js.map