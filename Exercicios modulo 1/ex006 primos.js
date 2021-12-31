//Escreva um programa que imprime todos os números primos entre 1 e 100
/*
function numerosPrimos(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
      let divisores = 0;
      for (let num = 1; num <= i; num++) {
        if (i % num === 0) {  //se i é divisível por 1
          divisores++; //soma 1 aos divisores
        }
      }
      if (divisores === 2) { //se o número de divisores é 2, então é primo
        console.log(i);
      }
    }
  }
  numerosPrimos(1, 100);
*/

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
