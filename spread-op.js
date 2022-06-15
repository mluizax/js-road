const cliente = [
    {
        nome: 'Maria Luíza',
        cpf: '22009864085',
        dependentes: [{
            nome: 'Lucas Gabriel',
            parentesco: 'Sobrinho',
            dataNascimento: '19/05/2008'
        },
        {
            nome: 'Maria Helena',
            parentesco: 'Filha',
            dataNascimento: '08/02/2023'
        }],
    },
    {
        nome: 'Carlos Alexandre',
        cpf: '88705129087',
        dependentes: [{
            nome: 'Maria Luíza',
            parentesco: 'Filha',
            dataNascimento: '30/03/1998'
        },
        {
            nome: 'João Manoel',
            parentesco: 'Filho',
            dataNascimento: '28/05/1992'
        }],
    }
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.log(listaDependentes)

console.table(listaDependentes)