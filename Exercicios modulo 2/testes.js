class Pessoa {
    constructor (nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    }
}
class Conta extends Pessoa {
    constructor(tipoConta, agencia, contan, _saldo, nome, cpf){
        super (nome, cpf);
        this.tipoConta = tipoConta;
        this.agencia = agencia;
        this.contan = contan;

        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    depositarDinheiro(valor){
        this._saldo += valor;
    }

    sacarDinheiro (valor){
        if (valor <= this._saldo){
            this._saldo += valor;
        } else {
            throw "Valor indisponível";
        }
    }
}

const transacao = new Conta ("Poupança", 001, 100, 0, "João", "123.456.789-10");

transacao.depositarDinheiro(1000);
transacao.depositarDinheiro(150);

transacao.saldo;
transacao.sacarDinheiro(250);
transacao.saldo;

console.log(transacao);