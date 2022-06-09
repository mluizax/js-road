// Arrow Function
// É possível declarar tudo em apenas uma linha, sem chaves, return...
// Não pode ser nomeada, sempre vem com uma const e o nome da variável que vamos usar antes.
// Tem casos especiais (não serão comentados agora)
// A rrow function é um jeito rápido e curto de você escrever a função, então, 
// nosso código acaba ficando mais curto e isso é uma coisa boa.
// Também tem algumas vantagens, quando estamos mexendo com objetos.

const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (number1, number2) => number1 + number2

// Arrow function com mais de uma linha de instrução]
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9."
    } else {
        return num1 + num2
    }
}

