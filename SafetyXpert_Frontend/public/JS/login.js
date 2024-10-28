document.getElementById('recoverPasswordButton').addEventListener('click', function() {
    window.location.href = '/Dashboard'; // Redirigir a la página de Dashboard
});


document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores de los campos del formulario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Crear un objeto con los datos a enviar
    const loginData = {
        username: usuario,
        password: contrasena
    };

    try {
        // Enviar los datos al backend usando fetch
        const response = await fetch('http://localhost:5000/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData) // Convertir el objeto a JSON
        });

        // Manejar la respuesta del servidor
        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const result = await response.json();
        console.log(result); // Manejar el resultado como desees
        window.location.href = '/Dashboard';
    } catch (error) {
        console.error('Error:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
    }
});

