"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const game_1 = require("./game");
class GameController {
    constructor() {
        this.game = new game_1.Game();
    }
    play(numero) {
        console.log("numero es:" + this.game.numero);
        let result = this.game.adivinarNumero(numero);
        if (result.includes('Felicidades')) {
            this.game.reiniciarJuego();
        }
        else if (this.game.intentos === 10) {
            return this.pista();
        }
        return result;
    }
    pista() {
        return `Pista! El numero en la posicion 3 es: ${this.game.numero[2]}`;
    }
}
exports.GameController = GameController;
//# sourceMappingURL=gameController.js.map