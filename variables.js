// var
// var pode ser declarada depois
// var é uma variável muito solta dentro do programa
// podemos acabar reutilizando o nome dessa variável em alguns outros locais, dentro de outros blocos de código
// seu uso não é muito recomendado por ser muito solta e propensa a bugs

var altura = 19;
var comprimento = 30;

area = altura * comprimento;
console.log(area)
var area;


// let
// let não acessa a variável antes de ser iniciada
// let - declarada antes
// let aceita reatribuições, aceita que mude os valores
// permite trocar os valores, mas precisa ser declarada antes

let forma = 'retângulo'
let altura = 6;
let comprimento = 8;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)


// const
// const é uma constante
// uma vez atribuído um valor, não é possível alterar
// sempre que inicializa uma variável constante ela já precisa ter um valor
// let e var pode começar sem valor atribuído 
// por isso "area" não pode ser const e precisa ser let
// os valores da const são fixos e a const precisa ser declarada antes

const forma = 'quadrado'
const altura = 5;
const comprimento = 5;
let area;

if (forma === 'quadrado') {
    area = altura * quadrado;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)