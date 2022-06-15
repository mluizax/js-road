const cliente = {
    nome: "Maria Luíza",
    idade: 22,
    cpf: '22009864085',
    email: 'maria@email.com',
    fones: ['8171007474', '8181767474'],
    dependentes: [{
        nome: 'Lucas Gabriel',
        parentesco: 'Sobrinho',
        dataNascimento: '19/05/2008'
    }]
}

cliente.dependentes.push({
    nome: 'Maria Helena',
    parentesco: 'Filha',
    dataNascimento: '08/02/2023'
})

console.log(cliente)

const dependenteMaisJovem = cliente.dependentes.filter(dependente => dependente.dataNascimento === '08/02/2023')

console.log(dependenteMaisJovem[0].nome)