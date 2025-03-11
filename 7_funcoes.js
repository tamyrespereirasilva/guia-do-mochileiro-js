// funções em JavaScript são blocos de código(subprogramas ou subrotinas) que podem ser chamados e executados em qualquer parte do código.
// Funções podem receber parâmetros e retornar valores.
// Funções são declaradas com a palavra-chave function, seguida do nome da função e dos parâmetros entre parênteses.
// O corpo da função é delimitado por chaves { }.
// O valor de retorno é definido pela palavra-chave return.
// Funções podem ser declaradas de duas formas: declarativas e expressivas.
// Funções declarativas são aquelas em que utilizamos a palavra-chave function no início da declaração.
// Funções expressivas são aquelas em que a função é atribuída a uma variável.
// Funções podem ou não receber parâmetros.
// Funções podem ou não retornar valores.
// Funções podem ser anônimas.
// Funções podem ser invocadas (ou chamadas) quantas vezes quisermos.
// Funções podem ser armazenadas em variáveis, passadas como argumentos para outras funções e retornadas por outras funções.
// Funções podem ser métodos de objetos.
// Funções podem ser construtores de objetos.
// Funções podem ser arrow functions.


function primeiraFuncao() { 
    let num1 = 10, num2 = 5, soma = num1 + num2;
    return soma;
}
console.log(primeiraFuncao());


// função anônima   
const segundaFuncao = function(num1, num2) {
    return num1 + num2;
}
console.log(segundaFuncao(25,25));

// arrow function
let terceiraFuncao = () => {
    let frase = "Função arrow function";
    return frase;
}
console.log(terceiraFuncao());

// função IIFE: Immediately Invoked Function Expression, ou seja, função imediatamente invocada.
// é uma função que é executada assim que definida.     
(function() {
    let num1 = 10, num2 = 10, soma = num1 + num2;
    console.log(soma);
}());


// Função que recebe parâmetros e retorna um valor

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(10, 30));

