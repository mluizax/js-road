class Bank {
    constructor() {
        this.accounts = []
    }

    _validateAccountType(account) {
        if (account.accountType !== 'Gold' && account.accountType !== 'Silver') {
            throw new Error('Tipo de conta inexistente. Por favor, insira uma opção válida.')
        }
    }

    _validateCpf(cpf) {
        const VALID_CPF_LENGTH = 11

        let cpfSize = String(cpf)

        if (cpfSize.length !== VALID_CPF_LENGTH) {
            throw new Error('CPF inválido! Tente novamente.')
        }
    }

    _cpfSearch(cpf) {
        return !!this.accounts.find((key) => key.cpf === cpf) // !! vem boolean
    }

    _validateSaldo(balance, valueTransf) {
        if (balance <= 0 || balance < valueTransf) {
            throw new Error('Saldo insuficiente.')
        }
    }

    _saldoMaxTransference(accountTypeDestino, valueTransf) {
        const maxValueSilver = 300
        const maxValueGold = 1000

        while (accountTypeDestino === 'Silver') {
            if (valueTransf > maxValueSilver) {
                throw new Error('Valor de transferência excedido.')
            }
        }
        while (accountTypeDestino === 'Gold') {
            if (valueTransf > maxValueGold) {
                throw new Error('Valor de transferência excedido.')
            }
        }
    }

    _getDate() {
        const date = Date.now()
        let dateAtual = new Date(date)
        let lastMovimentationDate = dateAtual.toUTCString()
        return lastMovimentationDate
    }

    _doTransference(cpfOrigem, cpfDestino, valueTransf) {
        let clientOrigem = accounts.find(item => {
            return item.cpf === cpfOrigem
        })

        let clientDestino = accounts.find(item => {
            return item.cpf === cpfDestino
        })

        clientOrigem.balance -= valueTransf
        clientDestino.balance += valueTransf
    }

    createAccount(account) {
        try {
            this._validateCpf()
            this._validadeAccount()
            this._cpfExist()
            if (this._cpfSearch(account.cpf)) {
                throw new Error('O CPF informado já está cadastrado no banco de dados.')
            }
        } catch (error) {
            console.log(error.message)
        }

        this.accounts.push({
            name: account.name,
            cpf: account.cpf,
            accountType: account.accountType,
            balance: 0,
            lastMovimentationDate: null,
        })
    }

    displayAllVAccounts() {
        this.accounts.forEach(accounts => console.log(accounts))
    }

    transferenceBetweenAccounts(cpfOrigem, cpfDestino, balance, accountTypeDestino, valueTransf) {
        try {
            this._validateCpf(cpfOrigem)
            this._validateCpf(cpfDestino)
            this._validateSaldo(balance, valueTransf)
            this._saldoMaxTransference(accountTypeDestino, valueTransf)
            this._doTransference(cpfOrigem, cpfDestino, valueTransf)
        } catch (error) {
            console.log(error.message)
        }
    }

    offMonth(accountType, balance) {
        this._validateAccountType

        if (accountType === 'Silver') {
            const DISCOUNT_SILVER = (5 / 100)
            let discount = DISCOUNT_SILVER * balance
            return balance - discount
        }
        else (accountType === 'Gold')
        return balance
    }

    getTotalBalance() {
        let sumTotal = this.accounts.reduce((sum, account) => sum + account.balance, 0)
        return sumTotal
    }

    bonusMonth(accountType, balance) {
        if (accountType === 'Silver') {
            const BONUS_SILVER = (5 / 100)
            let bonusValue = BONUS_SILVER * balance
            return balance + bonusValue
        }
        else if (accountType === 'Gold') {
            const BONUS_GOLD = (10 / 100)
            let bonusValue = BONUS_GOLD * balance
            return balance + bonusValue
        }
        else {
            return 'Tipo de conta inexistente.'
        }
    }

    newBalance(cpf, balance, accountType, valueAdd) {
        try {
            this._validateCpf(cpf)
            this._validateSaldo(balance)
            if (!this._cpfSearch(cpf)) {
                throw new Error('CPF não cadastrado no banco de dados.')
            }

            if (accountType === 'Silver') {
                const maxAddSaldo = 2000
                try {
                    if (valueAdd <= maxAddSaldo) {
                        client = accounts.map(item => {
                            if (item.cpf === cpf) {
                                return { ...item, balance: item.balance + valueAdd }
                            }
                            return item
                        })
                    } else {
                        throw new Error("Valor da operação excedido.\nLimite por operação: R$2.000,00")
                    }
                } catch (error) {
                    console.log(error.message)
                }

                if (accountType === 'Gold') {
                    const maxAddSaldo = 10000
                    try {
                        if (valueAdd <= maxAddSaldo) {
                            client = accounts.map(item => {
                                if (item.cpf === cpf) {
                                    return { ...item, balance: item.balance + valueAdd }
                                }
                                return item
                            })
                        } else {
                            throw new Error("Valor da operação excedido.\nLimite por operação: R$10.000,00")
                        }
                    } catch (error) {
                        console.log(error.message)
                    }
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    deleteAccount(cpf) {
        try {
            this._cpfSearch(cpf)
        } catch (error) {
            console.error(error.message)
        }
        return this.accounts.filter(account => account.cpf !== cpf)
    }
}