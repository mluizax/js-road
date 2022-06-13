// const number = [100, 200, 300, 400, 500, 600]

// for (let i = 0; i < number.length; i++) {
//     console.log(i, number[i])
// }

const notas = [10, 8, 9, 5.5]
let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

let media = somaDasNotas / notas.length

console.log(media)