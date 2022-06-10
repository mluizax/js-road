const nomes = [' Maria', ' Luíza', ' Rodrigo', ' Roberto', ' Yuri', ' Lucas', ' Lígia', ' Rossana', ' João', ' Nena', ' Carlos']

const sala1 = nomes.slice(0, nomes.length / 2)
const sala2 = nomes.slice(nomes.length / 2) // quando não coloca nada, vai até o final do array

console.log('Total de convidados: ', nomes.length)
console.log(`Convidados da sala 1: ${sala1}`)
console.log(`Convidados da sala 2: ${sala2}`)