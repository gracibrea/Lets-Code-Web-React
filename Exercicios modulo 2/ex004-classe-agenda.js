//Crie uma classe Agenda com os atributos de contato (nome, telefone e e-mail) e com métodos para adicionar novo contato e excluir um existente.

class Agenda {
    constructor () {
        this.agenda = [];
    }
    adicionar (contato){ 
        this.agenda.push(contato) 
    }
    excluir (contato) {
        this.agenda = this.agenda.filter((item) => item.nome !== contato);
    }
}

const agenda = new Agenda();

agenda.adicionar( {nome : 'Romilson', telefone : '1234-4321', email : 'email1@teste.com'});

agenda.adicionar({nome : 'Julieta', telefone : '4321-1234', email : 'email2@teste.com'});

agenda.adicionar( {nome : 'Escolástica', telefone : '5689-1245', email : 'email3@teste.com'});

agenda.adicionar({nome : 'Zigfrida', telefone : '9875-6421', email : 'email4@teste.com'});
console.log(agenda);

agenda.excluir('Julieta');
console.log(agenda);


