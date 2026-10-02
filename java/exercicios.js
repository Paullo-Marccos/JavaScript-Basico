// FIQUEI 20 MIN PROCURANDO O Erro, AI EU FUI VER FOI PORQUE EU NAO CONECTEI O SCRIPT NO HTML
function eleicoes(){

const idade =  Number(document.getElementById("idade").value)
const resultadoEleicoes = document.getElementById("resultadoEleicoes")

if(idade >= 100 ){
        resultadoEleicoes.innerHTML = "Nem Fudendo amigo, que voce tenha " + idade + " anos."
    }
else if(idade >= 18){
    resultadoEleicoes.innerHTML = "O voto é OBRIGATÓRIO!"
}
else if(idade >= 16){
    resultadoEleicoes.innerHTML = "Não é obrigatorio, mas voce pode votar"
    }
    
    else{
        resultadoEleicoes.innerHTML = "Voce não pode votar"
    }

}



function idadeExata(){
    const dia = Number(document.getElementById("dia").value)
    const mes = Number(document.getElementById("mes").value)
    const ano = Number(document.getElementById("ano").value)

    const resultadoIdade = (document.getElementById("resultadoIdade"))

    // PEGAR A DATA DE HOJE
const hoje = new Date() 
const diaAtual = hoje.getDate()
const mesAtual = hoje.getMonth() + 1;
const anoAtual = hoje.getFullYear()

let dia1 = diaAtual - dia
let mes1 = mesAtual - mes
let ano1 = anoAtual - ano


// CASO ALGUM NUMERO DE NEGATIVO
if(dia1 < 0){
    mes1 = mes1 - 1
    const diasNoMesAnterior = new Date(anoAtual, mesAtual - 1, 0). getDate();
    dia1 += diasNoMesAnterior;
}
if(mes1 < 0){
    ano1--
    mes1 += 12
    
}

if(ano1 >= 100 ){
        resultadoIdade.innerHTML = "Nem Fudendo amigo, que voce tenha " + ano1 + " anos." +  "<br>" + `Você tem exatamente ${ano1} ano(s), ${mes1} mês(es) e ${dia1} dia(s) de vida.`;
    }
else if(ano1 >= 18){
    resultadoIdade.innerHTML = "O voto é OBRIGATÓRIO!" + "<br>" + `Você tem exatamente ${ano1} ano(s), ${mes1} mês(es) e ${dia1} dia(s) de vida.`;
}
else if(ano1 >= 16){
    resultadoIdade.innerHTML = "Não é obrigatorio, mas voce pode votar" + "<br>" + `Você tem exatamente ${ano1} ano(s), ${mes1} mês(es) e ${dia1} dia(s) de vida.`;
    }
    else{
        resultadoIdade.innerHTML = "Voce não pode votar" + "<br>" + `Você tem exatamente ${ano1} ano(s), ${mes1} mês(es) e ${dia1} dia(s) de vida.`;
    }
}

function tabuada(){

    const n = Number(document.getElementById("n").value)
    const y = Number(document.getElementById("y").value)

    const resultadoTabuada = document.getElementById("resultadoTabuada")
    
    resultadoTabuada.innerHTML = "";

    for(i = 1; i <= y; i++){

        resultadoTabuada.innerHTML += n + " x " + i + " = " + (i * n) + "<br>";
    }
}
