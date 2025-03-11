// em JS, funções e variáveis são hoisted (içadas) para o topo do código. 
// Isso significa que podemos chamar uma função antes de declará-la no código. 
// Veja o exemplo abaixo:


console.log(soma(50, 30));
function soma(num1, num2) {  // função declarativa
    return num1 + num2;  
}

//observações:
// var é a unica que sofre hoisting, let e const não sofrem hoisting
// funções declarativas sofrem hoisting, funções expressivas não sofrem hoisting
// funções arrow não sofrem hoisting
// funções IIFE sofrem hoisting
// funções construtoras de objetos sofrem hoisting
// funções de métodos de objetos sofrem hoisting
// funções anônimas sofrem hoisting
// funções que recebem parâmetros e retornam valores sofrem hoisting
// funções que não recebem parâmetros e não retornam valores sofrem hoisting

// diferença entre let, var e const:    
// let e const são locais e só funcionam no escopo onde foram declaradas.   
// var é global e local, podendo ser usada fora do escopo onde foi declarada.