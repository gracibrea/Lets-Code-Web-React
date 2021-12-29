//Escreva um programa que imprime a soma dos 100 primeiros números naturais.

soma = 0;
for (let num = 0; num < 100; num++){
    soma += num;
    if (num == 99) console.log(soma);
}