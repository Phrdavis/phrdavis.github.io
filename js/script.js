const disabledItems = Array.from(document.getElementsByClassName('disabled'));

disabledItems.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do clique
        event.stopPropagation(); // Impede que o evento se propague
        console.log('Este item está desabilitado.');
    });
});