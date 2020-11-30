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
        let names = document.querySelector('#names').value
        let corre = document.querySelector('#corre').value
        let celu = document.querySelector('#celu').value
		let mensa = document.querySelector('#mensa').value
		
        let message = 'send?phone=' + phone + '&text=*_ESCRÍBANOS_*%0A*Bontos*%0A%0A*Nombre Completo*%0A' + names + '%0A*Correo*%0A' + corre + '%0A*Teléfono*%0A' + celu + '%0A*Mensaje*%0A' + mensa + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
