/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '51997672553';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let nombres = document.querySelector('#nombres').value
        let correo = document.querySelector('#correo').value
        let numero = document.querySelector('#numero').value
		let modo = document.querySelector('#modo').value
		
        let message = 'send?phone=' + phone + '&text=*_COMO DONAR_*%0A*Bontos*%0A%0A*Nombre Completo*%0A' + nombres + '%0A*Correo*%0A' + correo + '%0A*Teléfono*%0A' + numero + '%0A*Modo*%0A' + modo + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
