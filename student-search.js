const alunos = ['Luíza', 'Rodrigo', 'Lígia', 'João']
const mediaDosAlunos = [10, 9, 8, 7]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice] + '.'
    } else {
        return "Aluno não cadastrado."
    }
}

console.log(exibeNomeNota("Luíza"))
console.log(exibeNomeNota("Lucas"))

// includes retorna booleano
// indexOf retorna um número (referente ao índice)