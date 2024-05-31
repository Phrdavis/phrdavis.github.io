class Tecnologia{

    exibeTecnologia(imagem){

        var divTecnologia = document.getElementById("tecs");

        divTecnologia.innerHTML += `<div class="col-md-2 text-center"><img src="images/${imagem}.png" class="mx-auto" style="height: 5em;" alt="${imagem}"></div>`

    }

}