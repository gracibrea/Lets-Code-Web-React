//Crie uma classe Conta que representa uma conta bancária cujo saldo e senha de acesso são informações privadas protegidas). Adicione também os métodos depositar e sacar.

//Ainda incompleta

class Conta{
    constructor (numero){
    this.numero = numero;
    //this.deposito = deposito;
    //this.saque = saque;
    let saldo = 150;
    let senha = 1*5/4+3;
    }
    /*
    depositaDinheiro(){
        return this.saldo + this.deposito;
    }

    sacarDinheiro(){
        return this.saldo - this.saque;
    }
    */
}

const conta = new Conta (918273);
//console.log(conta.depositaDinheiro(100));

console.log(conta);
console.log(`Senha: ${conta.senha}`);
console.log(`Saldo: ${conta.saldo}`);

