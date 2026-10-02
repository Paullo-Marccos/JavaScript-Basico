// FOR
const qtd = prompt("quantas vezes deseja repetir?")
let soma = 0
let nota = 0
// COLOQUE O i NO LUGAR DA qtd AQUI EM BQAIXO, E ABRA O COSOLE NO CHEOME KKKKKKKKKKK
for(let i = 1; i <= qtd; i++){

    nota = prompt("Digite a nota " + i)
    soma = soma + Number(nota)     
}
const somafinal = soma
const mediafinal = (soma / qtd).toFixed(1)
console.log("A média é: " + mediafinal)
console.log("A soma das notas é: " + somafinal)