//Crie uma classe Ponto que represente um ponto no plano cartesiano com atributos exclusivamente numéricos x e y.

class Ponto {
    constructor(x, y){
        if(isNaN(x) || isNaN(y)) throw "x e y precisam ser números";
        this.x = x;
        this.y = y;
    }
}

const ponto = new Ponto ('cinco', 10);
console.log(ponto);