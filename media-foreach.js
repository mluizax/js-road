const notas = [10, 8, 9, 5.5]
let somaDasNotas = 0

// callback
notas.forEach(nota => {
    somaDasNotas += nota
})

// notas.forEach(function(nota){
//     somaDasNotas += nota
// })

let media = somaDasNotas / notas.length

console.log(media)