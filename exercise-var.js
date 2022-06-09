var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

// var tem um escopo global, então funciona em qualquer parte do código,
// o que pode gerar possíveis problemas em relação à lógica da aplicação.

// let e const têm escopo local, sendo assim, não podem ser acessadas em
// outros escopos, e const não pode ter seu valor alterado depois de definido.