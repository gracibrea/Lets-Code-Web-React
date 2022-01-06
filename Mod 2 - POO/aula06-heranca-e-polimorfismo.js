class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{ //extends explicita que Cidadao herda atributos de Pessoa
    constructor(nome, idade, rg, cpf){
        super(nome, idade); //chama o construtor da classe Pessoa
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('Claudia', 44 , '1234567', '11122233344');
console.log(cidadao);
console.log(cidadao instanceof Cidadao);
console.log(cidadao instanceof Pessoa);
//instanceof mostra que a variável cidadao é tanto do tipo Cidadao quanto do tipo Pessoa se retornar true