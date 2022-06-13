const listaCPFs = ['97358899008', '27002462091', '73217821076']

// const cliente = ['nome', 'Maria', 'idade', 22]

const cliente = {
    nome: "Maria",
    idade: 22,
    cpf: '22009864085',
    email: 'maria@email.com'
}

// console.log(cliente.nome)
console.log(`O meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(cliente.cpf.substring(0, 3)) // 3 primeiros números do CPF


// acessando dados com colchetes
const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente['nome']) // também funciona (quando sabe o que quer acessar)


// adicionando, alterando e deletando campos - objetos
console.log('---------------------')
console.log(cliente)

cliente.fone = '8171007474' // adicionou!
console.log(cliente)

cliente.fone = '8181767474' // alterando o valor de fone
console.log(cliente)

delete cliente.fone // deletando fone
console.log(cliente)