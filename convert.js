// tipo de dado
// booleanos

// "=" => atribuir valor a uma variável
// "==" => comparação pelo valor, apenas pelo que está dentro
// "===" => compara não só o valor como também o tipo da variável

// conversão implícita
// permite que converta um tipo de dado em outro

const numero = 159;
const numberString = "159";

console.log(numero === numberString) // vai dar falso pq ta comparando numero com texto
console.log(numero == numberString) // reconhece como equivalente quando usa ==

console.log(numero + numberString) // vai concatenar como string e não somar os valores


// conversão explícita
// Number()
// String()

console.log(numero + Number(numberString))
// Number() converteu o tipo de string para número

// se tiver algum outro caracter além de número vai resultar em NaN

let largura = "10";
let altura = "5";
console.log(+ largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

let meuNome = "Luiza";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log(+ meuNome); // a conversão também retornará NaN