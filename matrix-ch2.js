// Gerar matriz de números rândomicos [3x3] e gerar sua matriz transposta.

const matrizNova = Array(3).fill(null).map(() => Array(3).fill(Math.floor(Math.random() * 10)));
console.log(matrizNova)

const transpose = matrizNova => {
    for (let i = 0; i < matrizNova.length; i++) {
        for (let j = 0; j < i; j++) {
            const aux = matrizNova[i][j];
            matrizNova[i][j] = matrizNova[j][i];
            matrizNova[j][i] = aux;
        };
    }
}
transpose(matrizNova);
console.log(matrizNova);