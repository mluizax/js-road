const listaDeChamada = [' Maria', ' Luíza', ' Rodrigo', ' Roberto', ' Yuri', ' Lucas', ' Lígia', ' Rossana', ' João', ' Nena', ' Carlos']

listaDeChamada.splice(3, 4, ' Miguel')
listaDeChamada.splice(2, 0, ' Giovana') // não remove ninguém com o 0 no segundo parâmetro

console.log(`Lista de chamada: ${listaDeChamada}`)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1, 0, '🐠')
animaisDoAquario.splice(3, 2, '🐟') // remove 2 elementos do array - a partir da posição 3

console.log(animaisDoAquario)