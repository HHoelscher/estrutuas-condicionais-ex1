/*
2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
*/

let number1 = 8;
let number2 = 2;
let operacao = '/';

if (operacao === '+') {
    let operacao = number1 + number2
    console.log(`A soma entre ${number1} e ${number2} resulta em ${operacao}.`)
}
else if (operacao === '-') {
    let operacao = number1 - number2
    console.log(`A subtração de ${number1} e ${number2} resulta em ${operacao}.`)
}
else if (operacao === '*') {
    let operacao = number1 * number2
    console.log(`A multiplicação entre ${number1} e ${number2} resulta em ${operacao}.`)
}
else if (operacao === '/') {
    let operacao = number1 / number2
    console.log(`A divisão entre ${number1} e ${number2} resulta em ${operacao}.`)
}
else {
    console.log('A operação informada não é válida.')
}