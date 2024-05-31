class Projeto{

    exibeProjeto(imagem, titulo, tecnologias, texto, link, status){

        var divProjetos = document.getElementById("projetos");
        var tecs = '';

        // Use map para criar um array de strings HTML para cada tecnologia
        var tecnologiasHtml = tecnologias.map(element => {
            return `<img class="img" style="height: 1.5em;" src="images/${element}.png" alt="${element}">`;
        });

        // Use join para unir as strings em uma única string
        tecs = tecnologiasHtml.join('');

        divProjetos.innerHTML += `<div class="col-md-4 container-one m-3">
                                    <div class="card-one">
                                        <div class="front card bg-dark">
                                            <!-- Foto Card -->
                                            <img class="card-img-top object-fit-cover" style="height: 10em; width: 100%;" src="images/${imagem}.png" alt="SoftExpert">
                                            <div class="card-body">
                                                <!-- Titulo Card -->
                                                <h5 class="card-title text-light">${titulo}</h5>
                                                <div class="d-flex align-items-center justify-content-center">
                                                    <!-- Tecnologias do Projeto -->
                                                    <div>${tecs}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="back card bg-dark justify-content-center">
                                            <div class="row p-3 h-100 justify-content-center align-items-end">
                                                <!-- Titulo Card -->
                                                <h5 class="col-12 card-title text-light">${titulo}</h5>
                                                <!-- Descrição Card -->
                                                <p class="col-12 text-light">${texto}</p>
                                                <!-- Botão Acessar Projeto -->
                                                <div class="col-12">
                                                    <a class="btn btn-outline-warning ${status}" href="https://github.com/Phrdavis/${link}" target="_blank">Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
        

    }

}