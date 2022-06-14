// Criar uma função onde o usuário cadastra seu nome e peso, e ao final, 
// será mostrado o seu peso em cada planeta do sistema solar.
// Mesmo desafio anterior, mas com uma versão melhorada do código.

function getInfo(name, weight) {
    var name = prompt('Qual o seu nome? ')
    var weight = prompt('Qual o seu peso? ')

    console.log(`Olá, ${name}! Na Terra, o seu peso é ${weight}kg. Vamos conferir em outros planetas?\n`)

    const planets = [['Mercúrio', 0.37], ['Vênus', 0.88], ['Marte', 0.38],
    ['Júpiter', 2.64], ['Saturno', 1.15], ['Urano', 1.17], ['Netuno', 1.18]];

    for (let i = 0; i < planets.length; i++)
        console.log(`Peso em ${planets[i][0]}: ${planets[i][1] * weight}kg.`)

}

getInfo()