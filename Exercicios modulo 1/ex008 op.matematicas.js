//Escreva uma função para cada operação matemática básica (soma, subtração, multiplicação e divisão). As funções devem receber dois números e retornar o resultado da operação.

//fiz sozinha
let a = 10
let b = 6
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

const aplicarOperacao = (a, b, operacao) => operacao(a , b);

const resultadoSomar = aplicarOperacao (a, b, somar);
console.log(`O Resultado da Soma de ${a} com ${b} é ${resultadoSomar}`);

const resultadoSubtrair = aplicarOperacao (a, b, subtrair);
console.log(`O Resultado da Subtração de ${b} de ${a} é ${resultadoSubtrair}`);

const resultadoDividir = aplicarOperacao (a, b, dividir);
console.log(`O Resultado da Divisão de ${a} por ${b} é ${resultadoDividir}`);

const resultadoMultiplicar = aplicarOperacao (a, b, multiplicar);
console.log(`O Resultado da Multiplicação de ${a} por ${b} é ${resultadoMultiplicar} `)
