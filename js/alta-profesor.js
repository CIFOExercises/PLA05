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
form.onsubmit = handleRequest;

function handleRequest(e) {
    e.preventDefault();
    
    let isValid = validateForm();
    
    if(!isValid) return;
  
    let data = {
      'nombre': form.firstName.value,
      'usuario': form.user.value,
      'email': form.email.value,
      'password': form.password.value      
    }

    //Enviar Peticion al servidor: https://alcyon-it.com/PQTM/pqtm_alta_profesores.php
    sendRequest(data);
}

function validateForm(){
    //Validar inputs
    let validatedName = validateInput(form.firstName);
    let validatedUser = validateInput(form.user);
    let validatedEmail = validateInput(form.email);
    let validatedPassword = validateInput(form.password);
    
    if (!validatedName || !validatedUser || !validatedEmail || !validatedPassword) return false;
}

function validateInput(input){
	if (!input.value) {
        console.log(input.value)
		input.setCustomValidity('El campo debe estar informado');
        return false;
	} else {
        if(input.type == 'email'){
            let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
            if(!input.value.match(regex)) input.input.setCustomValidity('El email no tiene el formato correcto');
            console.log(regex.test(input.value))
            return false;
        }
        input.setCustomValidity("");
        return true;
	}
}

function sendRequest({name, user, email, password}){
    
}