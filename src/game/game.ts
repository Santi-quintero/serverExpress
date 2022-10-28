class Game {
  numero: string;
  intentos: number;
  constructor() {
    this.numero = this.generateNumber();
    this.intentos = 0;
  }

  generateNumber(): string {
    let numero: number[] = [];
    while (numero.length < 4) {
      let digito: number = Math.floor(Math.random() * 10);
      if (numero.indexOf(digito) === -1) {
        numero.push(digito);
      }
    }
    return numero.join("");
  }

  adivinarNumero(numero:  string): string{
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

  validarNumero(numero: string):string{
    let fijas : number = 0;
    let picas: number  = 0;
    for (let i = 0; i < numero.length; i++) {
      let numeroUsuario = numero[i];
      let numeroAleatorio = this.numero[i];
      if (numeroUsuario === numeroAleatorio) {
        fijas++;
      } else if (this.numero.indexOf(numeroUsuario) !== -1) {
        picas++;
      }
    }
    this.intentos++;

    if (fijas ==4) {
      return `Felicidades, adivinaste el numero en ${this.intentos} intentos`
    }else{
      return `${numero} tiene ${fijas} fijas, ${picas} picas`;
    }
  }

  tratarError(message: string): string{
    return message;
  }

  reiniciarJuego(): void{
    this.numero = this.generateNumber();
    this.intentos = 0;
  }
 
}
export {Game};
