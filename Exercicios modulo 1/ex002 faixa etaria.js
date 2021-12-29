/*Complemente o exercício anterior incluindo as seguintes faixas etárias:
Idade Faixa
● < 12 Criança
● 12-18 Adolescente
● 18-60 Adulto
● > 60 Idoso*/

let idade = 1;
if (idade > 60){
    console.log('Idoso');
}
else if (idade >= 18){
    console.log('Adulto');
}
else if (idade >= 12){
    console.log('Adolescente');
}
else{
    console.log('Criança');
}