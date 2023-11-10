
        // SCRIPT PARA TROCAR FUNÇÕES NA HOMEPAGE
        const a = ["Front-End", "Back-End","Desenvolvedor Web Junior","Suporte em TI"]
            

        const funcs = document.getElementById("funcs");
        var i = 0; //Cada Frases
        var j = 0; //Cada Letra
        var intervalo = 150; //Definindo variavel para o intervalo


        // Executa a função em determinado intervalo
        setInterval(() =>{
            // Seleciona uma frase para a variavel
            var palavra = a[i].split("");
            // Se a quantidade de Letras acabar
            if(j >= palavra.length){
                // Ao terminar apaga a frase inteira
                funcs.innerHTML = " ";
                
                if(i < a.length-1){
                    i++;
                }else{
                    i = 0;
                }
                j = 0;
            }else{
            // Funcs recebe cada letra da variavel com a frase
            funcs.innerHTML += palavra[j];
                j++;
            }

        }, intervalo)