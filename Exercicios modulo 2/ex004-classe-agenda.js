//Crie uma classe Agenda com os atributos de contato (nome, telefone e e-mail) e com métodos para adicionar novo contato e excluir um existente.
class Agenda {
    constructor (nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    /*
    adicionaContato(){
        this.nome = push('Claudia');
        this.telefone = push(23232323);
        this.email = push('push@email.com');
    }
    excluiContato(){
        this.nome = this.nome.pop.nome;
        this.telefone = this.telefone.pop.telefone;
        this.email = this.email.pop.email;
    }
    */
}

const agenda = new Agenda ('Joana', 1234567899, 'email@email.com');
console.log(agenda);
/*agenda.adicionaContato();
console.log(agenda);
agenda.excluiContato();
console.log(agenda)*/
