// Criar uma função onde o usuário cadastra seu nome e peso, e ao final, 
// será mostrado o seu peso em cada planeta do sistema solar.

function getInfo(nome, peso) {
    var nome = prompt('Qual o seu nome? ')
    var peso = prompt('Qual o seu peso? ')

    console.log(`Olá, ${nome}! Na Terra, o seu peso é ${peso}kg. Vamos conferir em outros planetas?\n`)

    let pesoMercurio = (peso * 0, 37)
    console.log(`Peso em Mercúrio: ${pesoMercurio}kg.`)

    let pesoVenus = (peso * 0, 88)
    console.log(`Peso em Vênus: ${pesoVenus}kg.`)

    let pesoMarte = (peso * 0, 38)
    console.log(`Peso em Marte: ${pesoMarte}kg.`)

    let pesoJupiter = (peso * 2, 64)
    console.log(`Peso em Júpiter: ${pesoJupiter}kg.`)

    let pesoSaturno = (peso * 1, 15)
    console.log(`Peso em Saturno: ${pesoSaturno}kg.`)

    let pesoUrano = (peso * 1, 17)
    console.log(`Peso em Urano: ${pesoUrano}kg.`)

    let pesoNetuno = (peso * 1, 18)
    console.log(`Peso em Netuno: ${pesoNetuno}kg.`)

}

getInfo()