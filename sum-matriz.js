matriz = [[1, 5, 6], [3, 6, 10], [100, 4, 20]]

function sum(matriz) {
    const sumArrays = matriz.reduce((acumulador, atual) => atual + acumulador, 0)
    return sumArrays
}

console.log(`A soma do primeiro array é: ${sum(matriz[0])}`)
console.log(`A soma do segundo array é: ${sum(matriz[1])}`)
console.log(`A soma do terceiro array é: ${sum(matriz[2])}`)


let sumTotal = 0

for (let i in matriz) {
    for (let j in matriz) {
        sumTotal += matriz[i][j]
    }
}

console.log(`A soma total é: ${sumTotal}`)


// const matrix = [[1, 5, 6], [3, 6, 10], [100, 4, 20]]

// const matrixNew = matrix[0].reduce((acumulador, elemento) => acumulador += elemento,
//     matrix[1].reduce((acumulador, elemento) => acumulador += elemento, 0))
// console.log(matrixNew)