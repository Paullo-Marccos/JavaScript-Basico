// IF E ELSE

    function media(){
    const media1 = Number(document.getElementById("media1").value)
    const media2 = Number(document.getElementById("media2").value)
    const media3 = Number(document.getElementById("media3").value)

// Arredonda o resultado para 1 casa decimal (ex: 5.6666 vira 5.7)
    const mediafinal = Number(((media1 + media2 + media3) / 3).toFixed(1));

    const resultadomedia = document.getElementById("resultadomedia")

    if( mediafinal >= 6 ){
        resultadomedia.innerHTML = "Voce foi APROVADO(A)! com a media de: " + mediafinal
        resultadomedia.style.color = "green";
    } 
    else if(mediafinal < 5){
        resultadomedia.innerHTML = "Voce foi REPROVADO(A)! com a media de: " + mediafinal
        resultadomedia.style.color = "red";
    }
    else{
        resultadomedia.innerHTML = "Voce está de RECURAÇÃO! com a media de: " + mediafinal
        resultadomedia.style.color = "blue";
    }
}