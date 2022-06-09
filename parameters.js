// parâmetros de função

function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(7, 9))
console.log(sum(-100, 250))
console.log(sum(19, 30))

// parâmetros vs argumentos - basicamente a mesma coisa para nosso uso
// a ordem dos parâmetros importa

function info(name, age) {
    return `Olá! O meu nome é ${name} e eu tenho ${age} anos.`
}

console.log(info("Maria Luíza", 22))


function mult(number1, number2) {
    return number1 * number2
}

console.log(mult(sum(7, 9), sum(5, 3))) // função dentro de função - usando parâmetros

console.log(mult(sum(7, 9)))
// a função mult deveria receber dois parâmetros, recebendo apenas um 
// ele fica com um número undefined e número * undefined = NaN
// para solucionar isso é só colocar um valor como padrão na declaração da função
// quando for executar a função, ele ignora o padrão e usa o novo valor
// nesse caso da multiplicação, poderia colocar number1 = 1, number2 = 1