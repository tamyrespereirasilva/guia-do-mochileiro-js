/*
    o debugger(depurador) é uma ferramenta de desenvolvimento que permite pausar a execução do código e examiná-lo durante a execução.
    F5 para executar o código, F10 para passar para a próxima linha, F11 para entrar na função, F8 para continuar a execução do código, 
    F9 para adicionar ou remover um breakpoint, Shift + F11 para sair da função, Ctrl + Shift + F5 para resetar o debugger, Shift + F5 para parar a execução do código.
*/

const frase = "debugger é uma ferramenta de desenvolvimento";
console.log(frase);

if(frase.length > 10) {
    console.log("A frase possui mais de 10 caracteres");
} else {
    console.log("A frase possui menos de 10 caracteres");
}