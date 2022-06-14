// Gerar matriz de números rândomicos [4x4] e gerar sua matriz oposta

const matrizNova = Array(4).fill(null).map(() => Array(4).fill(Math.floor(Math.random() * 10)));
console.log(matrizNova)
console.table(matrizNova)

matrizNova.reverse()
console.table(matrizNova)