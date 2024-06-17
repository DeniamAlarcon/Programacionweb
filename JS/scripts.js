$(document).ready(function () {
    // Validación del formulario de registro al enviarlo
    $("#registroForm").submit(function (event) {
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var rol = $("#rol").val();

        // Validaciones personalizadas del lado del cliente
        if (nombre === "" || email === "" || password === "" || rol === "") {
            alert("Todos los campos son obligatorios");
            event.preventDefault(); // Prevenir el envío del formulario
        } else if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            event.preventDefault(); // Prevenir el envío del formulario
        }
    });

    document.getElementById('iniciarSesion').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('miCarousel').classList.add('hidden');
        document.getElementById('loginFormContainer').classList.remove('hidden');
        document.getElementById('registerFormContainer').classList.add('hidden');
    });


    document.getElementById('registro').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('miCarousel').classList.add('hidden');
        document.getElementById('registerFormContainer').classList.remove('hidden');
        document.getElementById('loginFormContainer').classList.add('hidden');
    });

    // Maneja el clic en "Home"
    document.getElementById('homeLink').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('miCarousel').classList.remove('hidden');
        document.getElementById('loginFormContainer').classList.add('hidden');
        document.getElementById('registerFormContainer').classList.add('hidden');
    });

    // Mostrar formulario de inicio de sesión si el parámetro URL está presente
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('showLogin')) {

        document.getElementById('miCarousel').classList.add('hidden');

        // Mostrar el mensaje de registro exitoso
        const registroExitosoMensaje = document.getElementById('registroExitosoMensaje');
        registroExitosoMensaje.style.display = 'block';

        // Ocultar el mensaje después de 5 segundos
        setTimeout(function () {
            registroExitosoMensaje.style.display = 'none';

        }, 5000); // 5000 milisegundos = 5 segundos

        document.getElementById('loginFormContainer').classList.remove('hidden');
        document.getElementById('registerFormContainer').classList.add('hidden');

    } else if (urlParams.has('showRegister')) {
        document.getElementById('miCarousel').classList.add('hidden');

        // Mostrar el mensaje de registro exitoso
        const registroExitosoMensaje = document.getElementById('registroFallidoMensaje');
        registroExitosoMensaje.style.display = 'block';

        // Ocultar el mensaje después de 5 segundos
        setTimeout(function () {
            registroExitosoMensaje.style.display = 'none';

        }, 5000); // 5000 milisegundos = 5 segundos

        document.getElementById('registerFormContainer').classList.remove('hidden');
        document.getElementById('loginFormContainer').classList.add('hidden');
    }
});
