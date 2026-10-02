// SWITCH CASE

function verificarCargo(){
    const cargo = document.getElementById("cargo").value
    const resultadoCargo = document.getElementById("resultadoCargo")

    let aumento = 0 

    const salario = Number(document.getElementById("salario").value)

    const salariogerente = salario
    const salariosupervisor = salario
    const salarioanalista = salario
    const salarioprogramador = salario

    const Gerente = salariogerente + (salariogerente * 10/100)
    const Supervisor = salariosupervisor + (salariosupervisor * 15/100)
    const Analista = salarioanalista + (salarioanalista * 30/100)
    const Programador = salarioprogramador + (salarioprogramador * 50/100)

    switch(cargo){
        case "Gerente":
            resultadoCargo.innerHTML = "Voce é um Gerente" + " e seu novo salario é: R$" + Gerente
            break
        case "Supervisor":
            resultadoCargo.innerHTML = "Voce é um Supervisor" + " e seu novo salario é: R$" + Supervisor
            break
        case "Analista":
            resultadoCargo.innerHTML = "Voce é um Analista" + " e seu novo salario é: R$" + Analista
            break
        case "Programador":
            resultadoCargo.innerHTML = "Voce é um Programador" + " e seu novo salario é: R$" + Programador
            break
        default:
            resultadoCargo.innerHTML = "Cargo não encontrado"
            break
    }
}