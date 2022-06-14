// callback

const array = [1, 2, 3, 5]

const array3 = ['Lucas', 'Gabriela', 'Marcelo']


function nossoMap(array, funcao) {
    const aux = []

    for (let i = 0; i < array.length; i++) {
        aux[i] = funcao(array[i], i, array)
    }

    return aux
}

console.log(nossoMap(array, (item, index, array) => array))
console.log(nossoMap(array3, (item, index, array) => 'Senhor(a)' + ' ' + item))

console.log(array.map((item, index, array) => array))

//filter
const array2 = [1, 2, 3, 4, 5];

const arrayNomes = ["Maria Luiza", "Ramos Silva", "Noé Silva"]

console.log(arrayNomes.filter((item) => item.includes('Silva')))


list = ['Lucas Gabriel', 'Maria Lígia', 'Maria Letícia', 'Yuri']

function nossoFilter(list, funcao) {
    const newArray = []

    for (let i = 0; i < list.length; i++) {
        const filterzinho = funcao(list[i], i, list)

        if (filterzinho) {
            newArray.push(list[i])
        }
    }
    return newArray
}

console.log(nossoFilter(list, (item, index, list) => item.includes('Maria')))
console.log(nossoFilter(list, (item, index, list) => item.length === 2))
console.log(nossoFilter(list, (item, index, array) => item.length % 2 !== 0))

const arrayOutro = [[1, 2, 3], [3, 4, 5], [5, 6, 7]]

console.log(arrayOutro.map((item, index) => {
    const matrixNew = arrayOutro[0].reduce((acumulador, elemento) => acumulador += elemento, 0)
    const matrixNew2 = arrayOutro[1].reduce((acumulador, elemento) => acumulador += elemento, 0)
    const matrixNew3 = arrayOutro[2].reduce((acumulador, elemento) => acumulador += elemento, 0)
    const matrixFinale = [matrixNew, matrixNew2, matrixNew3]
    return matrixFinale
}))