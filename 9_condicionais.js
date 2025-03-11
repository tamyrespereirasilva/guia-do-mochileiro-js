// estrutura de controle if-else

/* 
if (condicao) {  
    bloco de código que será executado se a condição for verdadeira;
} else {                         
    bloco de código que será executado se a condição for falsa;
} 
*/

// Exemplo 1:

let fruta = "banana";
if (fruta === "banana") {
    console.log('fruta é banana');
}   else {      
    console.log('fruta não é banana');
}

// Exemplo 2:

const numero = 18;
if (numero === 18) {
    console.log('é igual a 18');
} else if (numero > 18) {
    console.log('é maior que 18');
} else {
    console.log('é menor que 18');
}

// conectivos lógicos && (e)  || (ou)  !(não)
// conectivos lógicos são palavras ou expressões que conectam duas ou mais proposições, formando uma nova proposição.

// premissas:
// 1. Eu gosto de JavaScript.
// 2. Eu gosto de Java.

// Juntando as premissas numa única proposição, posso usar o conectivo "e" (&&) ou "ou" (||)
// 1. Eu gosto de JavaScript e Java.
// 2. Eu gosto de JavaScript ou Java.

// no primeiro caso, as duas premissas precisam ser verdadeiras para que a proposição seja verdadeira.
// no segundo caso, basta que uma das premissas seja verdadeira para que a proposição seja verdadeira.

// Exemplo com conectivo lógico && (e):
const numero1 = 10, numero2 = 20;
if (numero1 === 10 && numero2 === 20) {
    console.log('expressão verdadeira');
} else {
    console.log('expressão falsa');
}

// Exemplo com conectivo lógico || (ou):
const numero3 = 10, numero4 = 20;       
if (numero3 === 10 || numero4 === 30) {
    console.log('expressão verdadeira');
}

// Exemplo com conectivo lógico ! (não):
const numero5 = 10, numero6 = 20;
if (!(numero5 === 10)) {
    console.log('expressão verdadeira');
}

// Estrutura de controle switch-case
// switch-case é uma estrutura de controle que permite a execução de diferentes blocos de código

const dia = 6;
switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}

// Operador ternário
// O operador ternário é uma forma abreviada de escrever uma estrutura if-else      
// sintaxe: condição ? expressão1 : expressão2

const idade = 18;
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade');

// Exemplo de função com operador ternário:
function maiorMenor(numero) {
    return numero >= 0 ? 'positivo' : 'negativo';
}
console.log(maiorMenor(10)); // positivo

// mesma função com if-else:
function maiorMenor2(numero) {
    if (numero >= 0) {
        return 'positivo';
    } else {
        return 'negativo';
    }
}
console.log(maiorMenor2(-10)); // negativo
