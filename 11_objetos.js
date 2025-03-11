/*
    Um objeto é uma coleção de dados e/ou funcionalidades relacionadas
    (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

    Podem ser inicializados usando new Object(), Object.create(), ou utilizando a sintaxe de objeto literal: {}  

    existem duas formas de acessar as propriedades de um objeto:
    1. Notação de ponto e também mais usado (dot notation)
    2. Notação de colchetes (bracket notation)
*/

// Exemplo de objeto literal
let usuario = {
    nome: 'João',
    idade: 31,
    metodo: function () {
        return "Uma função dentro de um objeto";
    }
};

// Acessando as propriedades com a notação de ponto (dot notation)
console.log(usuario.nome); // João
console.log(usuario.idade); // 31
console.log(usuario.metodo()); // Uma função dentro de um objeto

/* Acessando as propriedades com a notação de colchetes (bracket notation)
console.log(usuario['nome']); 
console.log(usuario['idade']); 
console.log(usuario['metodo']()); 
*/

// Declarando novas propriedades com a notação de ponto
usuario.email = 'joao@email.com';
usuario.telefone = '123456789';

console.log(usuario.email); 
console.log(usuario.telefone);

// Declarando novas propriedades com a notação de colchetes
usuario['endereco'] = 'Rua das Flores, 123';

console.log(usuario['endereco']);
