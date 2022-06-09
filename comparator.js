// == (comparação implícita)

const numero = 9;
const texto = "9"

console.log(numero == texto)
// fez a conversão de texto para número sozinho 
// == compara apenas o conteúdo, ignora o tipo

console.log(numero === texto)
// não faz a conversão automática, é necessário converter manualmente
// compara os valores das variáveis e também os tipos

// typeof
console.log(typeof numero)
console.log(typeof texto)

// as boas práticas pedem para usar ===
// e quando for fazer conversão usar o método explícito - Number() e String()