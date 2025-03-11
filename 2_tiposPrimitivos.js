// quase tudo em Javascript é objeto, mas existem 7 tipos primitivos que são uma exceção:
// String, Number, Boolean, Object, Function, Null, Undefined, Symbol

let numero = 10;
let minhaString = "Olá, mundo!";
let minhaBoolean = true;
let minhaFuncao = function() { return "Olá, mundo!"; };         
let meuObjeto = { nome: "João", idade: 25 };
let meuNull = null; // null é um objeto
let meuUndefined = undefined; // undefined é um valor
let meuSymbol = Symbol("Olá, mundo!");
// Symbol é um tipo primitivo introduzido no ECMAScript 6, que é um valor único e imutável, e pode ser usado como chave de uma propriedade de um objeto.

console.log(typeof numero, numero); // number
console.log(typeof minhaString, minhaString); // string
console.log(typeof minhaBoolean, minhaBoolean); // boolean
console.log(typeof minhaFuncao, minhaFuncao); // function
console.log(typeof meuObjeto. meuObjeto); // object
console.log(typeof meuNull, meuNull); // object
console.log(typeof meuUndefined); // undefined
console.log(typeof meuSymbol, meuSymbol); // symbol

