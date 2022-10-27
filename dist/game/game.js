"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = (function () {
    function Game() {
        this.numero = this.generateNumber();
        this.intentos = 0;
    }
    Game.prototype.generateNumber = function () {
        var numero = [];
        while (numero.length < 4) {
            var digito = Math.floor(Math.random() * 10);
            if (numero.indexOf(digito) === -1) {
                numero.push(digito);
            }
        }
        return numero.join("");
    };
    Game.prototype.adivinarNumero = function (numero) {
        if (numero.length !== 4) {
            return this.tratarError("El numero debe de tener 4 digitos");
        }
        if (new Set(numero).size !== 4) {
            return this.tratarError("El numero no debe de tener digitos repetidos");
        }
        if (isNaN(Number(numero))) {
            return this.tratarError("El dato debe ser un numero");
        }
        return this.validarNumero(numero);
    };
    Game.prototype.validarNumero = function (numero) {
        var fijas = 0;
        var picas = 0;
        for (var i = 0; i < numero.length; i++) {
            var numeroUsuario = numero[i];
            var numeroAleatorio = this.numero[i];
            if (numeroUsuario === numeroAleatorio) {
                fijas++;
            }
            else if (this.numero.indexOf(numeroUsuario) !== -1) {
                picas++;
            }
        }
        this.intentos++;
        return "".concat(numero, " tiene ").concat(fijas, " fijas, ").concat(picas, " picas");
    };
    Game.prototype.tratarError = function (message) {
        return message;
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map