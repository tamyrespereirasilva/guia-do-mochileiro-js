/* O objeto Array é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
    Principais características:
    1. Arrays são listas ordenadas de valores.   
    2. Objetos que nativamente contém diversos métodos embutidos para realizar diversos tipos de operações.
    3. São heterogêneos, ou seja, podem conter diferentes tipos de dados.
    4. Não possuem tamanho fixo, podendo crescer ou diminuir dinamicamente. Acessamos o tamanho do array através da propriedade length: array.length
    5. Podem ser acessados por índices: array[0], array[1], array[2] ...
    6. Podem ser iterados por loops.
    7. Podem ser aninhados.

*/

// Criando um array de forma literal:
let frutas = ['Maçã', 'Banana', 'Pera']; // pode ser vazio: let frutas = [];
console.log(frutas.length); // 3

// Criando um array usando o operador new:
let carros = new Array('Fusca', 'Gol', 'Uno', 'Celta', 'Corsa');    
console.log(carros.length); // 5    

// Acessando elementos do array:
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

// Iterando sobre um array:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Adicionando elementos ao array:
frutas.push('Manga');
console.log(frutas); // [ 'Maçã', 'Banana', 'Pera', 'Manga' ]

// Removendo elementos do array:
frutas.pop();
console.log(frutas);   // [ 'Maçã', 'Banana', 'Pera' ]

// usando o delete para remover um elemento:
delete frutas[1];
console.log(frutas); // [ 'Maçã', <1 empty item>, 'Pera' ] o delete remove o elemento, mas não reorganiza os índices, deixando um espaço vazio.