/*
    Em JavaScript, existem 3 tipos de escopos:
    - Escopo global: variáveis declaradas fora de uma função 
    - Escopo de função: variáveis declaradas dentro de uma função, comum o uso de var
    - Escopo de bloco: variáveis declaradas dentro de um bloco, comum o uso de let e const
*/

// escopo global
var nome = 'João';
function exibirNome() {
    console.log(nome);
}
exibirNome();


// escopo de função
function exibirIdade() {
    var i = 20;
    console.log(i);
}
exibirIdade();

// escopo de bloco
if (true) {
    let j = 30;
    console.log(j);
}

// Argumentos de função são variáveis locais
function somar(a, b) {
    return a + b;
}
console.log(somar(2, 3));

// Variáveis locais têm prioridade sobre variáveis globais