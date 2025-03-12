/* 
    o método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, 
    com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada
*/

// Exemplo Bind()

function thisBindExemplo() {
    console.log(this);
}

const obj = { exemplo: "exemplo" }; // objeto que será referenciado pelo this

thisBindExemplo = thisBindExemplo.bind(obj); // bind(obj) retorna uma nova função com o this apontando para obj
thisBindExemplo(); 

/*
    O método call() invoca uma função com um dado valor 'this' e arguments passados individualmente.
    O método apply() invoca uma função com um dado valor 'this' e arguments passados como um array (ou um objeto array-like).

    A diferença entre call() e apply() é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.
    📍lembre-se: lista é uma sequência de valores separados por vírgula, enquanto array é um objeto que armazena uma coleção de valores.
   
*/

// Exemplo Call()      
const obj1 = { 
    exemplo: "exemplo1", 
    exibir: function thisCallExemplo() {  
        console.log(this);
    }
}; 

obj1.exibir();

const obj2 = { exemplo: "exemplo2" }; 

obj1.exibir.call(obj2); 

// Exemplo Aplly()
const obj3 = { 
    exemplo: "exemplo3", 
    exibir: function thisApplyExemplo(a, b, c) {  
        console.log(this);
    }
};

obj3.exibir();

const obj4 = { exemplo: "exemplo4" };

obj3.exibir.apply(obj4), [1, 2, 3];