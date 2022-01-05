/*
//Função passada como parâmetro
const subtrair = (a, b) => a-b;
const aplicaOperacao = (a, b, operacao) => operacao(a, b);

let resultado = aplicaOperacao (4, 2, subtrair);
console.log (resultado);
*/

//Função retornada como parâmetro
const somarX = (x) => (y) => x+y; //função recebe parâmetro x e retorna uma função que recebe y e retorna x+y

const somar2 = somarX(2);
console.log(somar2(5));

const somar3 = somarX(3);
console.log(somar3(5));