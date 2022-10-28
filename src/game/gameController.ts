import { Game } from "./game";

export class GameController{
    private game: Game;

    constructor(){
        this.game = new Game();
    }

  public play(numero:string): string{
    console.log("numero es:"+this.game.numero)
    let result = this.game.adivinarNumero(numero);

    if (result.includes('Felicidades')) {
        this.game.reiniciarJuego();
    }else if(this.game.intentos===10){
       return this.pista();
    }
    return result;
  }

  public pista(): string{
      return `Pista! El numero en la posicion 3 es: ${this.game.numero[2]}`
    }


}



