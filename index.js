const arrayNums = [1, 2, 3, 4]

const arrayNumsAtt = arrayNums.map(multiplicar => multiplicar * 10)

console.log(arrayNumsAtt)

// outra forma
function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)