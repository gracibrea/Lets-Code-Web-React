//Escreva um programa que imprime a soma dos 100 primeiros números naturais. 
//Fi sozinha

/*
soma = 0;
for (let num = 0; num <= 100; num++){
    soma += num;
    if (num == 100) console.log(soma);
}
*/

//Escreva um programa que imprime a soma dos números naturais num determinado intervalo.
function somaNaturais(inicio, fim){
    soma = 0;
    for (let num = inicio; num <= fim; num++){
        soma += num;
        if (num == fim) console.log(soma);
    }
}
somaNaturais(1, 100);
