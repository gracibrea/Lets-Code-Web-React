/*
function Quadrado (base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; //variável de acesso privado, somente por dentro da função
}

const quadrado = new Quadrado (3, 4);
console.log(`Cor ${quadrado.cor}`);
quadrado.cor = 'red'; //criação de um novo atributo para o objeto
console.log(`Cor ${quadrado.cor} não significa que acessamos o atributo cor, apenas que criamos novo atributo para o objeto, uma extensão.`);
*/

/*
function criaQuadrado (base, altura){
    
    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function() {return cor;} //método com uma função que retorna a variável interna, cor.
    };
}

//instancia o objeto
const quadrado = criaQuadrado (3, 4); //chama a função que fabrica o objeto passando os parâmetros
console.log(quadrado.getCor()); //chama o método e imprime
*/

//Declaração de variável privada no contexto de classe

class Quadrado {
    constructor (base, altura) {
        let cor = 'blue';
        this.base = base;
        this.altura = altura;
        this.getCor = () => {return cor;};
    }
}

const quadrado = new Quadrado (3, 4);
console.log(quadrado.getCor());