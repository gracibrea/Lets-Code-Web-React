class Quadrado{
    constructor (base, altura){
        if (isNaN(base) || isNaN(altura)) throw "informação não numérica"; 
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    //declaração da função não precisa de funtion aqui
    calculaArea(){
        return this.base*this.altura;
    }
    //método para alterar o quadrado
    duplicaBase(){
        this.base = 2 * this.base;
    }
    //renderizando com html
    imprimir(){
        return`<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor || "blue"}'></div>`;
    }
}
//instância do objeto
const quadrado = new Quadrado(11, 12);
console.log(`A área do quadrado é ${quadrado.calculaArea()}.`);
quadrado.duplicaBase(); //chamando a função
console.log(`Depois de chamada a função do método área do quadrado é ${quadrado.calculaArea()}.`);