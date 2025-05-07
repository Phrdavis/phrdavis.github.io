class OpcoesNav{

    exibeOpcoes(id){

        var divNav = document.getElementById("navbar");

        divNav.innerHTML += `<li class="nav-item px-4">
                                    <a class="navbar-brand mx-0 fs-6 text-light" href="#${id}">${id}</a>
                             </li>`

    }

}