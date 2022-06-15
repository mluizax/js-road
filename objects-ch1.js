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

// const propsClientes = Object.keys(cliente)
// console.log(propsClientes)

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if (propsClientes.includes('dependentes')) // includes verifica com v ou f
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}.`)
    }
}

// console.log(Object.values(cliente))
// console.log(Object.entries(cliente))
oferecerSeguro(cliente)