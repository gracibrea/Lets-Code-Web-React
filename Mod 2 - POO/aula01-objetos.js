/*
const pessoa = {nome: 'Lucas', idade: 26};
console.log(`O nome da pessoa é ${pessoa.nome}`);
*/

/*
const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base * this.altura}
};
console.log(`A área do quadrado é ${quadrado.calculaArea()}m2`);
*/


const agenda = {
    contatos: [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}
    ],
    adicionar : function(contato) {this.contatos.push(contato)},

    //remover : function() {this.contatos.splice()}, não funcionou
}
console.log(agenda.contatos);
console.log('Adicionando contatos');
console.log(agenda.adicionar({
    nome:'Claudia', 
    contato: '123456789', 
    email: 'email@email.com'}));
console.log(agenda.adicionar({
    nome:'Maria', 
    contato: '678912345', 
    email: 'teste@email.com'}));
console.log(agenda.contatos);
//console.log('Removendo um contato');
//console.log(agenda.remover(2, 0));
//console.log(agenda.contatos);

