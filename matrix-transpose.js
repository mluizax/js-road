const matrizNova = Array(3).fill(null).map(() => Array(3).fill(Math.floor(Math.random() * 10)));
console.log(matrizNova)
console.table(matrizNova)

function transpose(matriz) {
    return matriz && matriz.length && matriz[0].map && matriz[0].map(function (_, c) { return matriz.map(function (r) { return r[c]; }); }) || [];
}

console.log(transpose(matrizNova))
console.table(transpose(matrizNova))