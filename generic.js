function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const luiza = new Cliente('Luíza', '22009864085', 'marialuiza@orbcorporate.com', 1000000)

console.log(luiza)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const henrique = new ClientePoupanca('Henrique', '45607162001', 'henrique@email.com', 1000, 1500)

console.log(henrique)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

henrique.depositarPoup(1500)

console.log(henrique.saldoPoup)