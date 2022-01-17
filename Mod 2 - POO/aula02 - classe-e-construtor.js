class Pessoa {
    constructor (nome, idade){
    this.nome = nome;
    this.idade = idade;
    }
}
const pessoa1 = new Pessoa ('Cláudia', 44);
pessoa1.nome = 'Cláudia Krüger';
console.log(pessoa1.nome);
console.log(pessoa1);

const pessoa2 = new Pessoa ("Carol", 27);
const pessoa3 = new Pessoa ('Joaquim', 18);
console.log(pessoa2);
console.log(pessoa3);
console.log(Pessoa);
