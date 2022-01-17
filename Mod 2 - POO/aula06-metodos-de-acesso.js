
class Quadrado {
    constructor (base, altura) {
        let cor = 'blue';
        this.base = base;
        this.altura = altura;
        this.getCor = () => {return cor;};
        this.setCor = (c) => {cor = c;} //redefine o valor da variável cor
    }
}

const quadrado = new Quadrado (3,4);
//quadrado.setCor('red');
quadrado.cor = 'red';
console.log(quadrado.getCor());
console.log(quadrado);
//Dessa forma ainda é possível acidentalmente incluir atributo de cor diretamente ao objeto (linha 12)



class Quadrado {
    constructor (base, altura) {
        this._cor = 'blue'; //esse novo atributo guarda temporariamente o valor do atributo, _ faz como se fosse uma propriedade privada, embora não impeça o acesso do usuário, deixa mais escondida
        this.base = base;
        this.altura = altura;
    }
    get cor() { return this._cor;} //metódo que retorna a propriedade interna
    set cor(cor) {this._cor = cor;} //redefine a propriedade interna
    
}

const quadrado = new Quadrado (3,4);
console.log(quadrado.cor); //retorna o cor original do objeto
quadrado.cor = 'red'; //modifica a cor do objeto e depois retor a cor modificada
console.log(quadrado.cor); //quadrado.cor NÃO é atributo é a chamada do método set cor(cor)
