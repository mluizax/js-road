// 1) declara a função 
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (quantas vezes quiser)
imprimeTexto("Olá!")
imprimeTexto("Você sabia? Chloe é a gata mais linda do mundo.")


// três formas de escrever funções

// função sem parâmetros
// function soma() {
//     const resultado = 2 + 2
// }

// console.log(soma()) // pode executar uma função dentro do console.log
// deu undefined pq a função está sendo executada, mas não dá nenhuma resposta


// fazendo como a de cima, usando return
// não precisa declarar const
function soma() {
    return 2 + 2
}

console.log(soma())


imprimeTexto(soma()) // função dentro da função