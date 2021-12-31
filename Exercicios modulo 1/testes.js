/*
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
  for (let numero = 2; numero <= limite; numero++){
    let nPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++){
      if (numero % divisor === 0) {
        nPrimo = false;
        break;
      }
    }
    if (nPrimo) console.log(numero); 
  }
}
*/

exibirPrimos(10)

function exibirPrimos(limite){
    
    for(let numero = 2; numero <= limite; numero++){//looping de 2 até o limite estipulado
        let ehPrimo = true //estamos considerando que todos até aqui são primos 
        
        for(let divisor = 2; divisor < numero; divisor++){//os numeros e os divisores são calculados um com o outro até chegar a um número ANTES do número, para nunca um número ser dividido por ele mesmo (2%2, 3%3, 4%4 por exemplo), já que daria resto 0 e ele cairia como false. 
            
            if(numero % divisor === 0){//aqui é calculado o resto da divisão 

                ehPrimo = false //a variável boleana captura todos os números os quais tem resto 0, é feita uma intersecção com os números que receberam "true"
                    break; //para não gastar memória atoa 
                }
            }
        
       if(ehPrimo) console.log(numero) //se tiver recebido "true" imprimir no console 
    }

}
