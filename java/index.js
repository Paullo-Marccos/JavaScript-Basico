function somar(){
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value

    const soma = Number(n1) + Number(n2)

    const resultado = document.getElementById("resultado")

    resultado.innerHTML = "O resultado é " + soma
    
}

function subtrair(){
    const sub1 = document.getElementById("sub1").value
    const sub2 = document.getElementById("sub2").value

    const subtrair = sub1 - sub2 

    const resultadosub = document.getElementById("resultadosub")

    resultadosub.innerHTML = "O resultado é " + subtrair
    
}

function multi(){
    const multi1 = document.getElementById("multi1").value
    const multi2 = document.getElementById("multi2").value

    const multi = multi1 * multi2 

    const resultadomulti = document.getElementById("resultadomulti")

    resultadomulti.innerHTML = "O resultado é " + multi
    
}

function dividir(){
    const div1 = document.getElementById("div1").value
    const div2 = document.getElementById("div2").value

    const dividir = div1 / div2 

    const resultadodiv = document.getElementById("resultadodiv")

    resultadodiv.innerHTML = "O resultado é " + dividir
    
}

  