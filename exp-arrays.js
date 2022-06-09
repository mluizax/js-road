const notas = [10, 6, 8]
notas.push(7) // adicionando elemento em uma lista
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)


const notas2 = [10, 7, 8, 5, 10]
notas2.pop() // remove o último elemento de uma lista
console.log(notas2)

let media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length
console.log(`A média do aluno é ${media2}`)