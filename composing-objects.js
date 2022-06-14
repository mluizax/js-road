const cliente = {
    nome: "Maria",
    idade: 22,
    cpf: '22009864085',
    email: 'maria@email.com',
    fones: ['8171007474', '8181767474']
}

cliente.fones.forEach(fone => console.log(fone))

// adicionando objetos em objetos
cliente.dependentes = {
    nome: 'Lucas',
    parentesco: 'Sobrinho',
    dataNascimento: '19/05/2008'
}

console.log(cliente)

cliente.dependentes.nome = 'Lucas Gabriel'
console.log(cliente)