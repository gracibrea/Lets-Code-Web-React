let estaSol = true;

if(estaSol){
    console.log('Vou pra praia!');
}
else{
    console.log('Vou pro campo!');
}

let numero = -1;

if(numero > 0){
    console.log('Número positivo!')
}

else if(numero == 0){
    console.log('Número é zero!')
}
else{
    console.log("Número negativo!")
}

/*Operador ternário  '?'  */
let num = 4;
let paridade = num % 2 == 0 ? 'Num é par!' : 'Num é ímpar!'; /*Se num dividido por 2 o resto é zero será par, senão, será ímpar [ ? é operador ternário ]*/
console.log(paridade);

let sinal = 'azul';

switch(sinal){
    case 'verde' :
        console.log('Pode passar!');
        break;
    case 'amarelo' :
        console.log('Prestes a fechar, cuidado!');
        break;
    case 'vermelho' :
        console.log('Fechado, não passe!');
        break;
    default: /*Quando nenhum dos casos é satisfeito*/
    console.log('Sinal inválido!');
}
