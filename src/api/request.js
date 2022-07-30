const API_URL = "https://my-json-server.typicode.com/Lainercaceres11/M3U2TrelloAppLainer";
const createTask = document.getElementById('crearTarea')
const tareaCreada = document.getElementById('todoTask')
const tareaProgress = document.getElementById('progresTask');
const tareaRealizada = document.getElementById('realizadasTask');
const formulario = document.querySelector('#fromNewTask')
const botonGuardar = document.getElementById('botonGuardar')


//Peticion axios
const getData = axios.get(`${API_URL}/task`)
getData.then((res)=>{
   const datos = res.data;
   datos.map((data)=> {
   const respuestaHTML = `
    <div class="card">
      <div class="card-header>
        <h3>${data.title}</h3>
      </div>
      <div class="card-body>
      <p>${data.person}</p>
      <p>${data.details}</p>
      <p>${data.created}</p>    
      </div>
    </div>`
    if(data.state === "created"){
      tareaCreada.innerHTML += respuestaHTML;
    }else if(data.state === "progress"){
      tareaProgress.innerHTML += respuestaHTML;
    }else if(data.state == "done"){
      tareaRealizada.innerHTML += respuestaHTML;
    }
  
   });
})
getData.catch((error)>console.log(error));


// Apuntamos al formulario para crear la nueva tarea del HTML
const form = document.querySelector('#fromNewTask');

form.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formData = ev.target;
  
  // Recopilamos la información a enviar a la API
  const data = {
    title: formData.title.value,
    descripcion: formData.descripcion.value,
    responsable: formData.responsible.value,
    fecha: formData.plazo.value
    // deadline: formData.deadLineTask.value,
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/task`, data)
    .then((res) => {
      //Mandamos la información a la API
      console.log(res.data);
      //Reseteamos el formulario
      formData.reset();
    })
    .catch((err) => console.error(err));
});
