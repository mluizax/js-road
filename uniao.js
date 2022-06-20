const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [2, 3, 4, 7, 8, 9]

let array3 = array1.concat(array2) // união
const arrayFinal = [...new Set(array3)] // removendo os valores repetidos

console.log(arrayFinal)