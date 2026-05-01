function generarRegistro() {
    let boton = document.getElementById("mi-boton");
    let contenedor = document.getElementById("contenedor-registro");

    // Verificar que los elementos existan
    if(!contenedor) {
        console.log("No encontré el contenedor");
        return;
    }

    contenedor.innerHTML = "";
    
    let tarjetaRegistro = document.createElement("div");
    tarjetaRegistro.classList.add("tarjeta-registro");
    
    tarjetaRegistro.innerHTML = `
        <h2>Registro de Usuario</h2>
        <form id="formulario-registro">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
                <span class="error" id="error-nombre"></span>
            </div>
            <div class="campo">
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required>
                <span class="error" id="error-apellido"></span>
            </div>
            <div class="campo" >
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <span class="error" id="error-email"></span>
            </div>
            <div class="boton-enviar">
            
                <button type="button" class="btn-registrar" onclick="enviarFormulario()">Enviar Datos</button>
            </div>
        </form>
    `;
    
    contenedor.appendChild(tarjetaRegistro);
    boton.style.display = "none";
    document.getElementById("nombre").addEventListener("input", verificarNombre);
    document.getElementById("apellido").addEventListener("input", verificarApellido);
    document.getElementById("email").addEventListener("input", verificarEmail);

}

function verificarNombre() {
    let nombreInput = document.getElementById("nombre");
    let errorNombre = document.getElementById("error-nombre");
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(nombreInput.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
    } else if(!regex.test(nombreInput.value)) {
        errorNombre.textContent = "Ingrese un nombre válido";
    } else {
        errorNombre.textContent = "";
    }
}

function verificarApellido() {
    let apellidoInput = document.getElementById("apellido");
    let errorApellido = document.getElementById("error-apellido");
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(apellidoInput.value.trim() === "") {
        errorApellido.textContent = "El apellido es obligatorio.";
    } else if(!regex.test(apellidoInput.value)) {
        errorApellido.textContent = "Ingrese un apellido válido";
    } else {
        errorApellido.textContent = "";
    }
}

function verificarEmail() {
    let emailInput = document.getElementById("email");
    let errorEmail = document.getElementById("error-email");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value.trim() === "") {
        errorEmail.textContent = "El email es obligatorio.";
    } else if(!regex.test(emailInput.value)) {
        errorEmail.textContent = "Ingrese un email válido";
    } else {
        errorEmail.textContent = "";
    }
}

function enviarFormulario() {
    verificarNombre();
    verificarApellido();
    verificarEmail();
    
    let errores = document.querySelectorAll(".error");
    let hayError = false;
    errores.forEach(e => {
        if(e.textContent !== "") hayError = true;
    });
    
    if(!hayError) {
        alert("¡Datos enviados correctamente!");
    }
}
 //label es el texto que se muestra al usuario, el input es el campo donde el usuario ingresa su información. 
 // El atributo "for" del label debe coincidir con el atributo "id" del input para que estén asociados correctamente.
 //appendChild se utiliza para agregar un nuevo elemento al final de la lista de hijos de un elemento padre. 
 // En este caso, se está agregando la tarjeta de registro al contenedor de registro.