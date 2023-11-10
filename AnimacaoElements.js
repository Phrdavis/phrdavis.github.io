       // SCRIPT PARA ELEMENTOS DA TELA APARECEREM COM SCROLL DO MOUSE 

            // Procura pelos elementos '[data-anime]'
            const target = document.querySelectorAll('[data-anime]'); 
            // Cria uma classe 'animated'
            const animationClass = 'animated';

            function animeScroll(){
                // Cria variavel para ver localização do Scroll do mouse
                const windowTop = window.pageYOffset + (window.innerHeight * 3)/4;
                // Para cada elemento do target execute:
                target.forEach(function(element){
                    // Se a localização do scroll for maior que a localização do elemento:
                    if(windowTop > element.offsetTop){
                        // Adiciona a classe criada
                        element.classList.add(animationClass);
                    }else{
                        // Remove a classe criada
                        element.classList.remove(animationClass);
                    }
                })
            }

            // Se existir algum elemento execute:
            if(target.length){
                // Adicionando evento listener para scroll do mouse
                window.addEventListener('scroll', function(){
                    // Chama a função
                    animeScroll();
                })
            }
