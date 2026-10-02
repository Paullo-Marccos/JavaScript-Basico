
            // uma constante, ou seja, nao pode ser alterado
            // const name = 'Paulo Marcos'

            //  let, quer dizer que pode ser alterado
            // let num1 = 1378

            //  booleanos, 0 ou 1
            // let aprovado = false

            const name = prompt("Digite o seu nome")
            // TIVE QUE COLOCAR O Number, PQ O JAVA DAVA ERRADO NA SOMA + , PORUQE ELE PODE JUNTAR OU SOMAR
            // TEM O PARSEINT = ELE CONVERTE TUDO DENTRO DOS PARENTESES EX PARSEINT(N1 + N2) ELE NAO FAZ O DECIMAL, OU SEJA, 10.6 = 10.
            // DIFERENTE DO NUMBER. 10.565 = 10.565 O NUMBER VIA LER OS NUMERO DECIMAIS.
            const n1 = Number(prompt("Digite um numero"))
            
            const n2 = Number(prompt("Digite um numero"))

            const aprovado = true

            const minimo = 9


            console.log (name)

            console.log ("Operadores Aritméticos")
            console.log ( n1 + n2 )
            console.log ( n1 - n2 )     
            console.log ( n1 * n2 )
            console.log ( n1 / n2 )
            console.log ( n1 % n2 )

            console.log ("Operadores Relacionais")
            console.log( n1 == n2 )
            console.log( n1 != n2 )
            console.log( n1 > n2 )
            console.log( n1 < n2 )
            console.log( n1 >= n2 )
            console.log( n1 <= n2 )

            console.log ("Operadores Logicos")  
            console.log(aprovado)
            console.log(!aprovado)
            console.log( n1 >= 5 && n1 >= minimo)
            console.log( n1 >= 5 || n1 >= minimo)


            // NESSE CASO, EU COLOQUEI ESSA FUNÇÃO PORQUE EU QUERIA SALTAR UMA LINHA PARA CADA CONTEUDO
            function write(conteudo) {
                document.write(conteudo + "<br>")
            }

        
            write("<h2>Olá, " + name + "</h2>");

            write("<strong>Operadores Aritméticos</strong>");
            write("Soma: " + (n1 + n2));
            write("Subtração: " + (n1 - n2));
            write("Multiplicação: " + (n1 * n2));
            write("Divisão: " + (n1 / n2));
            write("Módulo (resto): " + (n1 % n2));

            write("<br><strong>Operadores Relacionais</strong>");
            write("n1 == n2: " + (n1 == n2));
            write("n1 != n2: " + (n1 != n2));
            write("n1 > n2: " + (n1 > n2));
            write("n1 < n2: " + (n1 < n2));
            write("n1 >= n2: " + (n1 >= n2));
            write("n1 <= n2: " + (n1 <= n2));

            write("<br><strong>Operadores Lógicos</strong>");
            write("Aprovado: " + aprovado);
            write("Não aprovado (!): " + !aprovado);
            write("n1 >= 5 E n1 >= mínimo: " + (n1 >= 5 && n1 >= minimo));
            write("n1 >= 5 OU n1 >= mínimo: " + (n1 >= 5 || n1 >= minimo));
        