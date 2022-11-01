"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        this.numero = this.generateNumber();
        this.intentos = 0;
    }
    generateNumber() {
        let numero = [];
        while (numero.length < 4) {
            let digito = Math.floor(Math.random() * 10);
            if (numero.indexOf(digito) === -1) {
                numero.push(digito);
            }
        }
        return numero.join("");
    }
    adivinarNumero(numero) {
        if (numero.length !== 4) {
            return this.tratarError("El numero debe de tener 4 digitos");
        }
        if (new Set(numero).size !== 4) {
            return this.tratarError("El numero no debe de tener digitos repetidos y deben ser del 1 al 9");
        }
        if (isNaN(Number(numero))) {
            return this.tratarError("El dato debe ser un numero");
        }
        return this.validarNumero(numero);
    }
    validarNumero(numero) {
        let fijas = 0;
        let picas = 0;
        for (let i = 0; i < numero.length; i++) {
            let numeroUsuario = numero[i];
            let numeroAleatorio = this.numero[i];
            if (numeroUsuario === numeroAleatorio) {
                fijas++;
            }
            else if (this.numero.indexOf(numeroUsuario) !== -1) {
                picas++;
            }
        }
        this.intentos++;
        if (fijas == 4) {
            return `Felicidades, adivinaste el numero en ${this.intentos} intentos`;
        }
        else {
            return `${numero} tiene ${fijas} fijas, ${picas} picas`;
        }
    }
    tratarError(message) {
        return message;
    }
    reiniciarJuego() {
        this.numero = this.generateNumber();
        this.intentos = 0;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map