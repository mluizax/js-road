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

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor
  }
}

const luiza = new ClientePoupanca("Maria Luíza", "mluiza@orbcorporate.com", "22009864085", 1000000, 150000)

console.log(luiza)

luiza.depositar(50000)
luiza.depositarPoupanca(50000)

console.log(luiza)