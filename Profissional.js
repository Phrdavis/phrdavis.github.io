class Profissional{

    exibirProfissional(funcao, inicio, fim, local, cargosHtml){

        var profissional = document.getElementById("profissional");
        var carg = '';

        cargosHtml.forEach((valor, chave) => {
            carg += `<p class="text-light" style="text-align: justify;"><strong>- ${chave}: </strong>${valor}</p>`
        });


        profissional.innerHTML +=  `<div class="col-lg-4 my-4 bg-dark rounded p-4 tremidinha" data-anime= "up" style="height: auto; min-height: 30em">
                                        <!-- Função -->
                                        <h4 class="text-warning mb-0">${funcao}</h4>
                                        <!-- Inicio - Final -->
                                        <p class="text-light mb-0">${inicio} - ${fim}</p>
                                        <!-- Local -->
                                        <p class="text-light">${local}</p>
                                        <!-- Função Primaria -->
                                        `+ carg +`
                                    </div>`

    }

}