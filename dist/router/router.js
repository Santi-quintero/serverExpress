"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (rep, res) {
    res.send('Hola mundo');
});
router.get('/send/:number', function (rep, res) {
    console.log(rep.params.number);
    res.send('Hola mundo2');
});
exports.default = router;
//# sourceMappingURL=router.js.map