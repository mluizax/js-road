const notas = [10, 8, 9, 5.5, 7]

// adicionando um ponto extra em cada nota
// const notasAtualizadas = notas.map(nota => nota + 1)

// se a nota for dez continua a mesma, se não adiciona um ponto
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

// se precisa retornar um array com novos valores utiliza map
// forEach não altera

// nota++ incrementa depois; ++nota incrementa antes e retorna o valor