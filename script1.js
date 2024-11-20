document.getElementById("formulario").addEventListener("submit", function (event) {
    // Prevenir el envío del formulario
    event.preventDefault(); 

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("name").value; 
    const pais = document.getElementById("pais").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

    // Crear el resultado a mostrar
    const resultado = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>País:</strong> ${pais}</p>    
      <p><strong>Género:</strong> ${genero || "No especificado"}</p>
      <p><strong>Intereses:</strong> ${intereses.length > 0 ? intereses.join(", ") : "Ninguno"}</p>
    `;

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById("resultado").innerHTML = resultado; 
});

// Evento para el botón de resetear
document.getElementById("resetea").addEventListener("click", function () { 
    // Reiniciar el formulario
    document.getElementById("formulario").reset();
    // Limpiar el resultado mostrado
    document.getElementById("resultado").innerHTML = ""; 
});

  