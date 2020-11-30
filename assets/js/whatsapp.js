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
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#lastname').value
        let email = document.querySelector('#email').value
		let number = document.querySelector('#number').value
		let ciudad = document.querySelector('#ciudad').value
		let distrito = document.querySelector('#distrito').value
		let direcc = document.querySelector('#direcc').value
		let refer = document.querySelector('#refer').value
		let vers = document.querySelector('#vers').value
		let model = document.querySelector('#model').value
		let medid = document.querySelector('#medid').value
        let message = 'send?phone=' + phone + '&text=*_BONTOS Arte Bíblico_*%0A*Pedir*%0A%0A*Nombre*%0A' + name + '%0A*Apellidos*%0A' + lastname + '%0A*Correo*%0A' + email + '%0A*Número*%0A' + number + '%0A*Ciudad*%0A' + ciudad + '%0A*Distrito*%0A' + distrito + '%0A*Dirección*%0A' + direcc + '%0A*Referencia*%0A' + refer + '%0A*Versiculo pedido*%0A' + vers + '%0A*¿Modelo Bastidor o en Marco?*%0A' + model + '%0A*Medida Pedida*%0A' + medid + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
