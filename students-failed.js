const nomes = ['Luíza', 'Lucas', 'Yuri', 'Lígia', 'Giovana']
const notas = [10, 9, 4.5, 8.5, 4]

const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
// filter funciona como true or false
// se colocar um "_", o js entende que o parâmetro existe, 
// mas não está sendo usado e por isso não será declarado
// aluno poderia ser trocado por _

console.log(`Lista de reprovados: ${reprovados}`)