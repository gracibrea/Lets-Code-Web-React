class Quadrado{
    constructor (base, altura){
        if (isNaN(base) || isNaN(altura)) throw "informação não numérica"; //se ou a base ou a altura não é um número (NaN) lançar erro
        this.base = base;
        this.altura = altura;
        this.cor = undefined; //como é um atributo opcional, não está sendo passado parâmetro
    }
}
//const quadrado = new Quadrado ("11", "doze"); 
const quadrado = new Quadrado (11, 12); //cria uma instância do quadrado
quadrado.cor = 'blue'; //parâmetro passado depois da construção
console.log(quadrado);