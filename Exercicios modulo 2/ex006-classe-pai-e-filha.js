//Escreva uma classe representando veículo com atributos como marca, modelo, licença etc. Faça também duas classes filhas como carro ou barco adicionando atributos e métodos específicos.

class Veiculo{
    constructor (marca, modelo, licenca){
        this.marca = marca;
        this.modelo = modelo;
        this, licenca = licenca;
    }
}

class Carro extends Veiculo{
    constructor (marca, modelo, licenca, tipo, cor, ano){
        super(marca, modelo, licenca)
        this.tipo = tipo;
        this.cor = cor;
        this.ano = ano;
    }
}

class Moto extends Veiculo{
    constructor (marca, modelo, licenca, cilindradas, cor, ano){
        super(marca, modelo, licenca)
        this.cilindradas = cilindradas;
        this.cor = cor;
        this.ano = ano;
    }
}

const carro = new Carro ('Fiat', 'Toro', '123456', 'Utilitário', 'Prata', 2022);
console.log(carro);
const moto = new Moto ('Honda', 'CBX', '562389', 500, 'vermelha');
console.log(moto);