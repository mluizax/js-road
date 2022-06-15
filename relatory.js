const cliente = {
    nome: "Maria Luíza",
    idade: 22,
    cpf: '22009864085',
    email: 'marialuiza@orbcorporate.com',
    fones: ['8171007474', '8181767474'],
    dependentes: [{
        nome: 'Lucas Gabriel',
        parentesco: 'Sobrinho',
        dataNascimento: '19/05/2008'
    },
    {
        nome: 'Maria Helena',
        parentesco: 'Filha',
        dataNascimento: '08/02/2023'
    }
    ],
    saldo: 1000000,
    depositar: function (valor) {
        this.saldo += valor
    }
}

let relatorio = ''

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue // se for objeto ou função -> continua e não faz nada
    } else {    // guarda dentro da variável 'relatorio'
        relatorio += `
        ${info} - ${cliente[info]}
        `
    }
}

console.log(relatorio)