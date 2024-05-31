class AnimacaoWaves{

    animaWave(wave){

        var divWaves = document.getElementById("waves");

        divWaves.innerHTML += `<img class="img img-fluid position-absolute ${wave}" style="bottom: 0%; z-index: 0;" src="images/Union.png" alt="${wave}">`;

    }

}