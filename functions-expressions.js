// declaração de função é como fiz anteriormente
// function sum(number1, number2) {
//     return number1 + number2
// }

// expressão de função - outra forma de escrever funções em js
const sum = function (number1, number2) { return number1 + number2 }
console.log(sum(5, 9))

// funções e var são "listadas" no topo quando executa
// funções que declaramos com um nome ou as var -> o interpretador do JavaScript
// vai passar pelo nosso código e puxar todas essas declarações para o topo do
// nosso código. então, ele vai, primeiro, iniciar todas essas declarações e todas
// as nossas var, e depois vai executar o nosso código