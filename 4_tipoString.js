let nome = "Tamyres";
console.log(nome); // Tamyres

// concatenando strings
let sobrenome = "Silva";
console.log(nome + " " + sobrenome); // Tamyres Silva

// propriedade length: retorna o tamanho da string
let texto = "Tamyres Silva";
console.log(texto.length); // 13

// método toUpperCase(): retorna a string em letras maiúsculas
console.log(texto.toUpperCase()); // TAMYRES SILVA

// método toLowerCase(): retorna a string em letras minúsculas
console.log(texto.toLowerCase()); // tamyres silva

// exemplo usando índices:
// a string é uma sequência de caracteres, cada caractere tem um índice
// o índice começa em 0 
// índices são usados para acessar caracteres individuais/posições dentro de um array/string
const palavra = "JavaScript";
console.log(palavra[0]); // J
