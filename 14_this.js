/*  
    o "This" é uma palavra chave que faz referência a um objeto, e seu comportamento varia 
    de acordo com o contexto em que é chamado.
*/

// o this no devtools do chrome nos traz o objeto global window, no node.js nos traz o objeto global
console.log(this.document === document); 

// em navegadores, o objeto window é também o objeto global:
console.log(this === window); //true

this.a = 30;
console.log(window.a); // 30

// quando não estiver no modo estrito, o this se refere ao objeto global
function f1() { return this === window; }
console.log(f1()); // true

// porém, quando estiver no modo estrito, o this não se refere ao objeto global
function f2() {
    'use strict';
    return this === undefined;
}           
console.log(f2()); // true

// método de um objeto
var obj = {
    prop: 50,
    f: function() {
        return this.prop;
    }
};
console.log(obj.f()); // 50

// Arrow functions: IIFE (Immediately Invoked Function Expression) não possuem um this próprio, elas herdam o this do contexto em que foram criadas
// contexto de criação: objeto // errado
var obj1 = {
    prop: 100,
    f: () => {console.log(this)}
};

// contexto de criação: objeto // correto
var obj2 = {
    prop: 200,
    f: function() {
        const f = (() => this)()
        console.log(f)
    }
};