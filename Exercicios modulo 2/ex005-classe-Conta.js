//Crie uma classe Conta que representa uma conta bancária cujo saldo e senha de acesso são informações privadas protegidas). Adicione também os métodos depositar e sacar.

class Pessoa {
    constructor (nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}
class Conta extends Pessoa{
    constructor (nome, cpf, tipoConta, agencia, contan,_saldo){
    super (nome, cpf);
        this.tipoConta = tipoConta;
        this.agencia = agencia;
        this.contan = contan;
        this.saldo = 0;
    }
    
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    depositarDinheiro(valor){
        this._saldo += valor;
    }

    sacarDinheiro(valor){
        if (valor <= this._saldo) {
            this._saldo -= valor;
        } else {
            throw "Valor indisponível";
        }
    }
}
const transacao = new Conta ("Poupança", 001, 100, 0, "João", "123.456.789-10");

transacao.depositarDinheiro(250);
transacao.depositarDinheiro(400);

transacao.saldo;

transacao.sacarDinheiro(200);
transacao.saldo;

console.log(transacao);