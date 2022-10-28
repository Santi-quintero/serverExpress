"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var game_1 = require("./game");
var GameController = (function () {
    function GameController() {
        this.game = new game_1.Game();
    }
    GameController.prototype.play = function (numero) {
        console.log("numero es:" + this.game.numero);
        var result = this.game.adivinarNumero(numero);
        if (result.includes('Felicidades')) {
            this.game.reiniciarJuego();
        }
        else if (this.game.intentos === 10) {
            return this.pista();
        }
        return result;
    };
    GameController.prototype.pista = function () {
        return "Pista! El numero en la posicion 3 es: ".concat(this.game.numero[2]);
    };
    return GameController;
}());
exports.GameController = GameController;
//# sourceMappingURL=gameController.js.map