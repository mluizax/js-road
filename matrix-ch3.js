// A partir de uma matriz, criar um array com todos seus números ímpares.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 15, 20]
]

const impar = n => n % 2 !== 0

for (i = 0; i < matrix.length; i++) {
    const numerosImpar = matrix[i].filter(impar)
    console.log(`Números ímpares: ${numerosImpar}`)
}