/*
const vetor = [1, 2, 3, 4, 5, 6];

const soma = vetor.reduce((estado, item) => estado + item);

//variável estado é um acumulador que guarda a soma parcial até o presente elemento da iteração. Assim, a função recebe a soma acumulada e o novo item, retornando o estado somado ao item

console.log(soma);
*/

/*
//O primeiro elemento não recebe um estado por ser o primeiro, então o segundo elemento recebe o primero como estado. Porém, é possível declarar explicitamente qual seria o estado inicial a ser passado para o primeiro elemento, basta passar como parâmetro para o reduce:
const vetor = [1, 2, 3, 4, 5, 6];
const soma = vetor.reduce((estado, item) => estado + item, 0);
//0 é o estado inicial
console.log(`A soma dos elementos do vetor é ${soma}`);

const produto = vetor.reduce((estado, item) => estado * item, 1);
console.log(`O produto dos elementos do vetor é ${produto}`);
*/

/*
let vetor = [
    { nome : 'nome1', nota1 : 5, nota2 : 4 },
    { nome : 'nome2', nota1 : 4, nota2 : 3 },
    { nome : 'nome3', nota1 : 7, nota2 : 8 },
    { nome : 'nome4', nota1 : 2, nota2 : 7 },
    { nome : 'nome5', nota1 : 9, nota2 : 9 },
  ];

const estadoInicial = {
    somaNota1 : 0,
    somaNota2 : 0,
    qtdNota1 : 0,
    qtdNota2 : 0,
};

const result = vetor.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
  }, estadoInicial);

  console.log(result);
*/


const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somaColuna = (estado, item) => {
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[4]+item[5]]
};
const vetor2 = matriz.reduce(somaColuna,[0, 0, 0]);//explicita que é um vetor com 3 elementos, caso contrário, considerará estado inicial a primeira linha que será passado para o segundo estado.
console.log(vetor2);
