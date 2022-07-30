const contenedorFormulario = document.getElementById('l-container-form')
const cancelarFormulario = document.getElementById('btnCancelar');


//Boton crear tarea
crearTarea.addEventListener('click', (e)=>{
    contenedorFormulario.style.visibility = "visible";   
})

cancelarFormulario.addEventListener('click', (e)=>{
    contenedorFormulario.style.visibility = "hidden";   
    contenedorFormulario.reset();
})

