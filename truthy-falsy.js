// boolean

const usuarioLogado = true
const contapaga = false

// truthy or falsy

// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// null => representa o vazio ou nada
// undefined => variável não definida que pode ser utilizada

let minhaVar; // não passou nenhum valor, então vai sair coo valor indefinido
let varNull = null; // nul é um tipo de dado, retornará null

console.log(minhaVar)
console.log(varNull)

let number = 3;
let string = "Exmed";

console.log(typeof number)
console.log(typeof string)

console.log(typeof minhaVar)
console.log(typeof varNull)