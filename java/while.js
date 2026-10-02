// WHILE

function repetir(){
    const qtd = document.getElementById("qtd").value
    const texto = document.getElementById("texto").value
    const resultadoRepetir = document.getElementById("resultadoRepetir")
    let contador = 0

    // AQUI LIMPA O RESULTADO ANTERIOR
resultadoRepetir.innerHTML = ""
while(contador < qtd){
    contador = contador + 1
         
    resultadoRepetir.innerHTML += texto + " Repetiu " + contador + " vezes." + "<br>"
}
}


// WHILE

// TA LEGAL, AQUI BASICAMENTE VAI EXIBIR QUANTOS "BLOCOS" O USUARIO QUER
function containerBlocos(){
    const qtdBlocos = Number(document.getElementById("qtdnotas").value)
    const containerBlocos = document.getElementById("containerBlocos")

    containerBlocos.innerHTML = ""
    // Mais explicativo na 
// O USO DO i VEM DE UMA VARIAVEL QUE VAI CONTAR QUANTOS BLOCOS JA FORAM CRIADOS, ELA COMEÇA EM 1, POIS O PRIMEIRO BLOCO É O BLOCO 1, E VAI AUMENTANDO ATÉ CHEGAR NO NUMERO DE BLOCOS QUE O USUARIO DIGITOU.
    let i = 1
    while(i <= qtdBlocos && i <= 50){ // limite de 50 para não travar a página, ja que no exemplo acima, se o usuario colocar 100 o site buga.
        containerBlocos.innerHTML += `
            <input type="number" class="nota" placeholder="Nota ${i}"><br><br>
        `
        i = i + 1  
    }
}
// const campos = document.querySelectorAll(".nota")
// <input type="number" class="nota" placeholder="Nota ${i}">
// ambos estao "juntos" porque o querySelectorAll pega todos os elementos com a classe nota, e o input acima é um elemento com a classe nota, então ele vai pegar todos os inputs que forem criados dinamicamente.
// Lembrando que o Visual Studio cria sozinho essa parte de cima -_-

function mediaEscolar(){
    const qtdnotas = Number(document.getElementById("qtdnotas").value)
    const resultadoMediaWhile = document.getElementById("resultadoMediaWhile")
    const minimoWhile = Number(document.getElementById("minimoWhile").value)
    const campos = document.querySelectorAll(".nota") // document.querySelectorAll(".nota") procura em toda a página todos os elementos que têm a classe nota e devolve uma lista com eles.
    
    
    // ASSEGURANDO QUE O USUARIO DIGITE A QUANTIDADE DE NOTAS E OS CAMPOS DE NOTAS, SE NAO ELE VAI DAR ERRO.

    if(qtdnotas <= 0 || campos.length === 0){ //se qtdnotas for menor ou igual a 0 ou se o tamanho da lista de campos for igual a 0, ou seja, se nao tiver nenhum campo de nota, ele vai exibir a mensagem abaixo e retornar.
        resultadoMediaWhile.innerHTML = "Digite a quantidade de notas primeiro!"
        return
    }
    
    // document.querySelectorAll(".nota") procura em toda a página todos os elementos que têm a classe nota e devolve uma lista com eles.
    
    
    let soma = 0
    let contador = 0
    
    
    while(contador < qtdnotas){ // enquanto o contador for menor que o tamanho da lista de campos, ele vai somar as notas e incrementar o contador.
        
        soma = soma + campos[contador].valueAsNumber // valueAsNumber pega o valor do campo como número, se o usuário digitar um valor inválido, ele vai retornar NaN.
        contador = contador + 1
    }
    const mediafinal = (soma / qtdnotas).toFixed(1)

    resultadoMediaWhile.innerHTML = "A média é: " + mediafinal + "<br> A média mínima é: " + minimoWhile
    
    if(Number(mediafinal) >= minimoWhile){
        resultadoMediaWhile.innerHTML += "<br> Aluno aprovado!"
    }
    else{
        resultadoMediaWhile.innerHTML += "<br> Aluno reprovado!"
    }
}



// "SIMPLES WHILE"

function pedirTexto(){
    const texto = prompt("Quantas notas você deseja inserir?")
    const resultado1 = document.getElementById("resultado1")
    const media1 = Number(prompt("Qual é a média mínima?"))

    if(texto === null){
        // o usuário clicou em "Cancelar"
        return
    }

    let contador1 = 1
    let nota = 0
    let soma = 0
    
    
    const qtd = Number(texto)

    
    while(contador1 <= qtd){

      do{
        nota = Number(prompt("Digite a nota " + contador1))
        }while (nota < 0 || nota > 10) 
            if(nota < 0 || nota > 10)
            alert("Nota inválida! Digite uma nota entre 0 e 10.") // enquanto a nota for menor que 0 ou maior que 10, ele vai pedir para o usuário digitar novamente.
        soma = soma + nota
        resultado1.innerHTML += "Nota " + contador1 + ": " + nota + "<br>"
        resultado1.innerHTML += "Soma das notas: " + soma + "<br>"
        resultado1.innerHTML += "Média das notas: " + (soma / contador1).toFixed(2) + "<br><br>"
        contador1 = contador1 + 1
    }
    resultado1.innerHTML = "Você digitou: " + texto + " notas<br>"
    resultado1.innerHTML += "A soma das notas é: " + soma + "<br>"
    resultado1.innerHTML += "A média das notas é: " + (soma / qtd).toFixed(2) + "<br>"
    resultado1.innerHTML += "A média mínima é: " + media1 + "<br>"
    
    
    
    if(Number((soma / qtd).toFixed(2)) >= media1){
        resultado1.innerHTML += "Aluno <span style='color: green;'>Aprovado(a)</span>!"
        
    }
    else{
        resultado1.innerHTML += "Aluno <span style='color: red;'>Reprovado(a)</span>!"
        
    }
}