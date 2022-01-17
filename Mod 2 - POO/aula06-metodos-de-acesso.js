/*
class Quadrado {
    constructor (base, altura) {
        let cor = 'blue';
        this.base = base;
        this.altura = altura;
        this.getCor = () => {return cor;};
        this.setCor = (c) => {cor = c;}
    }
}

const quadrado = new Quadrado (3,4);
quadrado.cor = 'red';
console.log(quadrado.getCor());
console.log(quadrado);
//Dessa forma ainda é possível acidentalmente incluir atributo de cor diretamente ao objeto (linha 12)
*/

class Quadrado {
    constructor (base, altura) {
        this._cor = 'blue'; //esse novo atributo guarda temporariamente o valor do atributo, _ faz como se fosse uma propriedade privada, embora não impeça o acesso do usuário, deixa mais escondida
        this.base = base;
        this.altura = altura;
    }
    get cor() { return this._cor;}
    set cor(cor) {this._cor = cor;}
    
}

const quadrado = new Quadrado (3,4);
quadrado.cor = 'red';
console.log(quadrado.cor); //quadrado.cor NÃO é atributo e a chamada do método set cor