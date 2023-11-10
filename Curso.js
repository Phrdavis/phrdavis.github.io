class Curso{

    exibeCurso(nome, horas, instituicao){

        var curso = document.getElementById("curso");

        curso.innerHTML += `<div class="row ladin">
                                <div class="col-2" data-anime= "up">
                                    <!-- Ordenando elementos visuais em coluna -->
                                    <div class="mt-4 d-flex flex-column justify-content-center align-items-center">
                                        <!-- Circulo Externo -->
                                        <div class="d-flex justify-content-center align-items-center bg-warning rounded-circle" style="width: 1.5em; height: 1.5em;">
                                            <!-- Ciruclo Interno -->
                                            <div class="rounded-circle" style="width: 1em; height: 1em; background-color: #3b3b3b;"></div>
                                        </div>
                                        <!-- Traço a baixo dos circulos -->
                                        <div class="my-2 bg-warning rounded-pill" style="height: 4em; width: 0.4em;"></div>
                                    </div>
                                </div>
                                <!-- Informações do Curso -->
                                <div class="col-8 my-2 bg-dark rounded p-3">
                                    <h4 class="text-warning">${nome}</h4>
                                    <p class="text-light mb-0">${horas}</p>
                                    <p class="text-light">${instituicao}</p>
                                </div>
                            </div>`

    }

}