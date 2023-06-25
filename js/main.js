const INPUTS_IDS = ["email", "password"];

document.addEventListener("DOMContentLoaded", (event) => {
        
    /**
    * El Observado/Observable es el botón de Login.
    * A los interesados (observadores), en este caso, les interesa el evento "click".
    * Los observadores, en este caso, son dos funciones (recordemos que JavaScript es Multi - Paradigma): 
    *      - Observador 1: Función mostrarEnConsolaInputs
    *      - Observador 2: Función validarInputs
    * Cada vez que un usuario haga "click" en el botón de Login, el objeto observable (o sea el mismo botón) 
    * emitirá notificaciones para todos sus observadores del evento "click".
    * Para el ejemplo, son despreciables las funciones "validar", "mostrarErrores" y "ocultarErrores".
    */
    document.getElementById("btn-login").addEventListener("click", mostrarEnConsolaInputs);
    document.getElementById("btn-login").addEventListener("click", validarInputs);

});

function mostrarEnConsolaInputs(event) {
    INPUTS_IDS.forEach((id) => {
        const input = document.getElementById(id);
        console.log(input.value);
    });
}

function validarInputs(event) {
    INPUTS_IDS.forEach((id) => {
        const input = document.getElementById(id);
        if(validar(input) === false) {
            mostrarErrores(input);
        }
        else {
            ocultarErrores(input);
        }
    });
}

function validar(input) {
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
    else {
        if($(input).val().trim() == ''){
            return false;
        }
    }
}

function mostrarErrores(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
}

function ocultarErrores(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}