class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const luiza = new Cliente("Maria Luíza", "marialuiza@orbcorporate.com", "22009864085", 1000000)

// luiza.exibirSaldo()

console.log(luiza)