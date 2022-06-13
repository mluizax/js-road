const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`)
console.log(`Média da sala de JavaScript: ${mediaSala(salaJava)}`)
console.log(`Média da sala de JavaScript: ${mediaSala(salaPython)}`)

// reduce é um método que sempre tem dois parâmetros: um acumulador e atual
// atual é o valor atual


// -------------------------------------------- //


// resolvendo o problema anterior
// let media = (notasAlunos[0] + notasAlunos[1] + notas2[2] + notas2[3]) / notas2.length
// console.log(`A média do aluno é ${media}`)
// mas agora com o método reduce:

const notasAlunos = [10, 7, 8, 5]
const mediaAlunos = notasAlunos.reduce((acum, atual) => atual + acum, 0) / notasAlunos.length
console.log(mediaAlunos)