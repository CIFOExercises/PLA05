//Recuperar todos los datos del formulario

// Validar que todos los campos no esten vacios

// Validar el correcto formato del email con un regexp

// Si no hay errores realizar llamada asincrona a https://alcyion-it.com/PQTM/pqtm_alta_profesores.php

// Utilizaremos el metodo POST y pasaremos exactamente los siguientes parametros:
/**
 * nombre
 * usuario
 * email
 * password
 */

// Recoger la respuesta y evaluarla para mostrar una alerta con el resultado de la peticion

let form = document.forms.namedItem('alta-profesor');

form.onsubmit = sendRequest;

function sendRequest(e) {
    e.preventDefault();
    alert('Enviando peticion...')

    let name = form.firstName.value;
    let user = form.user.value;
    let email = form.email.value;
    let password = form.password.value;

    console.log(name, user, email, password)


    //Validar los campos antes de enviar

}