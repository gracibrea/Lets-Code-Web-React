//Escreva um programa que imprime todos os números primos entre 1 e 100
//Fiz com ajuda
/*
function numerosPrimos(inicio, fim) {
    for (let i = inicio; i <= fim; i++) { 
      let divisores = 0; 
      for (let num = 1; num <= i; num++) {
        if (i % num === 0) {  
          divisores++; 
        }
      }
      if (divisores === 2) { 
        console.log(i);
      }
    }
  }
  numerosPrimos(1, 13);
*/

/*
//outra possibilidade
exibirNumerosPrimos(9);

function exibirNumerosPrimos(n){
  for (let numero = 2; numero <= n; numero++){ 
    let nPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++){
      if (numero % divisor === 0) { 
        nPrimo = false; 
        break;
      }
    }  
    if (nPrimo) console.log(numero); //escrever na tela os números primos
  }
}
*/

exibirNumerosPrimos(15);
function exibirNumerosPrimos(n){
  for (let numero = 2; numero <= n; numero++){ 
    if (NumeroPrimo(numero)) console.log(numero);
  }
}

function NumeroPrimo(numero) {
      for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0) { 
          return false;           
        }
      }
      return true;
}