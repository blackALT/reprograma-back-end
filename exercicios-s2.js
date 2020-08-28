const input = require("readline-sync");

const nota1 = input.question('Digite primeira nota: ')
const nota2 = input.question('Digite segunda nota: ')
const nota3 = input.question('Digite terceira nota: ')
const nota4 = input.question('Digite quarta nota: ')
const nota5 = input.question('Digite quinta nota: ')
const nota6 = input.question('Digite sexta nota: ')

const media = ((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5)+parseFloat(nota6))/(6.0))

console.log("=== Resultado final ===")

const resultado = media.toFixed(1)

if (resultado >= 7.0){
    console.log(`Aluno aprovado. Média: ${resultado}`)
} else if (resultado < 7.0 && resultado >= 5.0){
    console.log(`Aluno em recuperação. Média: ${resultado}`)
} else if (resultado < 5.0){
    console.log(`Aluno reprovado. Média: ${resultado}`)
}