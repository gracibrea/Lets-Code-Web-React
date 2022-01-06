//Crie uma classe que represente o tipo de objeto carro.

class Carro {
    constructor (marca, modelo, ano){
        if (isNaN(ano)) throw "Informação não numérica";  //não funcionou!!
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.cor = undefined;
    }
}

const carro = new Carro ("Nissan", "Etios", 2021); 
carro.cor = 'laranjado';//só é possível incluir a cor assim
console.log(carro);