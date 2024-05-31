class OpcoesNav{

    exibeOpcoes(id){

        var divNav = document.getElementById("navbar");

        divNav.innerHTML += `<li class="nav-item mx-4 hover">
                                    <a class="navbar-brand fs-6 text-light" href="#${id}">${id}</a>
                             </li>`

    }

}