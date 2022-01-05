/*
const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter (x => x % 2 == 0) //vetor recebe x e verifica se é par

const impares = vetor.filter (function(x){return x % 2 == !0}); //vetor recebe x e verifica se é ímpar

console.log(`Os números pares são: ${pares}`);

console.log(`Os números ímpares são: ${impares} `);
*/

//Um outro exemplo é retirar elementos maior do que um valor limite:
const vetor = [10, 4, 5, 6, 2, 7, 3, 8, 9, 1];

const vetor2 = vetor.filter (x => x < 8); //filtra o que é menor que 8

console.log (`Os números menores que oito são: ${vetor2}`)
