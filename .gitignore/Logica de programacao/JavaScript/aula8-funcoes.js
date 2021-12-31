/*
//Definindo a função
function geradorNumerico(){
    for (let i = 0; i <10; i++){
        console.log(i);
    }
}
//Chamando a função
geradorNumerico()
*/
/*
//Definindo a função
function geradorNumerico (comeco, fim){
    for (let i = comeco; i <= fim; i++){
        console.log(i);
    }
}
//Chamando a função
geradorNumerico (5, 36);
*/

/*
function somar (a, b){
    return a+b;
}

let resultado = somar (2, 3);
console.log(resultado);
*/

/*
const somar = function(a, b){return a + b;} //A função anônima (que recebe diretamente os parâmetros) fica salva dentro da variável podendo ser acessada posteriormente, como feito antes
console.log(somar(15, 2));
*/

//Função de flecha
const somar = (a, b) => a + b;

console.log(somar(2, 5));
