/*let vetor = [10, 20, 30,40,50];
console.log(vetor[2]);
console.log('o índice (posição) dos valores começa em zero')
*/

/*
console.log(vetor[2]);
trocando valores dos índices
console.log('Trocando os valores dos índices')
let vetor = [10, 20, 30,40,50];
vetor[2] = 60;
*/

/*
let vetor = [10, 20, 30,40,50];
vetor[2] = '30';
console.log(vetor[2]);
console.log('Neste caso, 30 é uma string.')
*/

/*
console.log('Partindo de um vetor vazio e incluindo elementos com .push')
let vetor = [];
for (let i = 0 ; i < 10; i ++){
    vetor.push(i);
}
console.log(vetor);
*/

/*
console.log('Percorrendo os elementos do vetor com .length')
let vetor = [10,20,30,40,50,60,70,80,90];

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}
*/

/*
console.log('Percorrendo os elementos do vetor com for ... of')
let vetor = [10,20,30,40,50,60,70,80,90];

for (let numero of vetor){
    console.log(numero);
}
console.log('fim');
*/

/*
console.log('Percorrendo os elementos do vetor, a partir dos indices, com for ... in')
let vetor = [10,20,30,40,50,60,70,80,90];

for (let indice in vetor){
    console.log(vetor[indice]);
}
console.log('fim');
//É interessante usar quando temos 2 vetores do mesmo tamanho e queremos acessar dois elementos de uma vez
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let linha of matriz){
    for (let elemento of linha){
        console. log(elemento);
    }
}
