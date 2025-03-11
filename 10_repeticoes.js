//  Estruturas de repetição em JavaScript

// 1. for
// for (inicialização; condição; incremento) {
//     // código a ser executado    
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while
// while (condição) {
//     // código a ser executado
// }

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. do while
// do { 
//     // código a ser executado
// } while (condição);      

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// quando usar cada um?
// for: quando sabemos quantas vezes o bloco de código deve ser executado
// while: quando não sabemos quantas vezes o bloco de código deve ser executado
// do while: quando queremos que o bloco de código seja executado pelo menos uma vez

