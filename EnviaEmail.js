        // SCRIPT PARA ENVIAR E-MAIL
        function email(){
            const nome = document.getElementById("nome").value;
            const assunto = document.getElementById("assunto").value;
            const mensagem = document.getElementById("mensagem").value;

            const contato = document.getElementById("contato");

            contato.href = `mailto:davipinheiro.dev@gmail.com?subject=${assunto}&body=E-mail from: ${nome}%0D%0DOlá, Davi!%0DMensagem:%0D"${mensagem}".`
            
            document.getElementById("nome").value = "";
            document.getElementById("assunto").value = "";
            document.getElementById("mensagem").value = "";

            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible fixed-bottom" role="alert" style="margin-top: 20px;">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
            }
            appendAlert('E-mail enviado com sucesso!', 'success')

        }