// FOR IN
console.log("FOR IN")
// ESTOU COM A IDEIA DE ARMAZENAR DADOS DO USUARIO COM ESSE FOR IN AHHAHAHAHAHAHAHAHA 

const pessoa = {
    Nome: "Paulo",
    Idade: "20",
    Graduação: "Analise e Desnvolvimento de Sistemas"
}

for(let atributo in pessoa){
    console.log(atributo + " -> " + pessoa[atributo])
}


// NO FINAL, PRA MIM É A "MESMA" COISA
// FOR OF 

console.log("FOR OF")

const Esports = [
    "Fúria",
    "Team Spirit",
    "Vitality",
    "Faze",
]

for(let times of Esports){
    console.log(times)
}