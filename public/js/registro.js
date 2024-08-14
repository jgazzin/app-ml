document.addEventListener('DOMContentLoaded', ()=>{
    imprimirProyectos('todo')
});

let temaProyectos = document.querySelector('#temas');
temaProyectos.addEventListener('change', ()=>{
    if(temaProyectos.value === '') {
        imprimirProyectos('todo')

    } else{
        imprimirProyectos('tema', temaProyectos.value)

    }
})

// boton crear nuevo
const btnNuevo = document.querySelectorAll('.datos .primary')
btnNuevo.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const boton = e.target.parentElement.parentElement.nextElementSibling;
        boton.classList.toggle('hidden')
    })
})

// GUARDAR PROYECTOS - HITOS - PRENSA
const btnGuardar = document.querySelectorAll('fieldset .btn')
btnGuardar.forEach(guardar =>{
    guardar.addEventListener('click', (e)=>{
        e.preventDefault()
        const formGuardar = e.target.parentElement.parentElement.parentElement;

        if(guardar.classList.contains('cancelar')){
            formGuardar.reset()
            formGuardar.parentElement.classList.toggle('hidden')
            alertas(formGuardar, '', 'eliminar')
            return
        }

        switch (formGuardar.className) {
            case 'form_proyectos':
                validarProyecto(formGuardar)
                break;
            case 'form_hitos':
                crearHito(formGuardar)
                break;
        
            default:
                break;
        }
    })
})

// GUARDAR SETTINGS
const btnguardarSettings = document.querySelectorAll('.settings .guardar')
btnguardarSettings.forEach(guardar => {
    guardar.addEventListener('click', (e) => {
        const datoSetting = e.target.previousElementSibling;

        if(datoSetting.value != ''){
            switch (datoSetting.getAttribute('name')) {
                case "crear-area":
                    guardarArea(datoSetting)
                    break;
                case "crear-tema":
                    guardarTema(datoSetting)
                    break;
                case "num-sesiones":
                    guardarSesiones(datoSetting)
                    break;
                case "num-bloque":
                    guardarbloque(datoSetting)
                    break;
            
                default:
                    break;
            }
        }

    })
});

// FUNCIONES ASYNC
async function imprimirProyectos(filtro, value = 'todo'){
    const contenedorProyectos = document.querySelector('.proyectos_propios')
    contenedorProyectos.innerHTML = '';
    let countProyectos = 0;

    const responseProyectos = await fetch('/proyectos')
    const proyectos = await responseProyectos.json()
    
    console.log(proyectos);

    switch (filtro) {
        case 'todo':
            proyectos.forEach(proyecto => {
                contenedorProyectos.appendChild(imprimirProyecto(proyecto))
                countProyectos++
            });
            break;
        case 'tema':
            proyectos.forEach(proyecto => {
                if(proyecto.tema === value)
                    contenedorProyectos.appendChild(imprimirProyecto(proyecto))
                countProyectos++
            });
            break;
    
        default:
            break;
    }

    document.querySelector('#countProyectos').textContent = countProyectos;
}

async function validarProyecto(form){

    let formData = new FormData(form);
    let dataProyecto = {
        numero: formData.get('proy-numero'),
        fecha: formData.get('proy-fecha'),
        detalle: formData.get('proy-detalle'),
        areas: formData.get('proy-areas'),
        tema: formData.get('proy-tema'),
        estado: formData.get('proy-estado'),
        enlace: formData.get('proy-enlace')
    }
    //console.log(dataProyecto);

    if(Object.values(dataProyecto).includes('')){ 
        alertas(form, 'Todos los campos deben estar completos')   
    } else {
        const response = await fetch('/proyectos')
        const proyectos = await response.json()
        let exist = proyectos.find(p => p.numero === dataProyecto.numero)
        console.log(exist);
        if(exist){
            alertas(form, 'El proyecto ya está cargado')
        } else {     
            crearProyecto(dataProyecto)
        }
    }
    
   
}

async function crearProyecto(form){
    // console.log(form);
    console.log('crear proyecto');
    const responseCrearProy = await fetch('/proyectos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })

    const result = await responseCrearProy.json()
    console.log(result.mensaje);
    window.location.reload()
}

async function crearHito(form){
    console.log('crear hito');

}

async function guardarArea(dato) {
    const data = {
        area: dato.value.toLowerCase().trim()
    }
    console.log(data.area);
    

    // validar si existe
    const response = await fetch('/areas')
    const areasExistentes = await response.json()

    let exist = areasExistentes.find(a => a.area === data.area)
    console.log(exist);
    if(exist){
        alertas(dato.parentElement.parentElement, 'El Área ya existe')
        setTimeout(() => {
            const alerta = dato.parentElement.parentElement.querySelector('.alerta')
            alerta.classList.remove('warning')
            alerta.innerHTML= ''
        }, 3000);
        return
    } 

    console.log('guardar area');
    const responseGuardarArea = await fetch ('/areas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseGuardarArea.json()
    console.log(result.mensaje);
    window.location.reload()
}

async function guardarTema(dato) {
    const data = {
        tema: dato.value.toLowerCase().trim()
    }    

    // validar si existe
    const response = await fetch('/temas')
    const temasExistentes = await response.json()
    
    let exist = temasExistentes.find(t => t.tema === data.tema)
    //console.log(exist);
    if(exist){
        alertas(dato.parentElement.parentElement, 'El Tema ya existe')
        setTimeout(() => {
            const alerta = dato.parentElement.parentElement.querySelector('.alerta')
            alerta.classList.remove('warning')
            alerta.innerHTML= ''
        }, 3000);
        return
    } 

    console.log('guardar tema');
    const responseGuardarTema = await fetch ('/temas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseGuardarTema.json()
    console.log(result.mensaje);
    window.location.reload()
    
}

async function guardarSesiones(dato){
    console.log('actualizar numero sesiones');

}
async function guardarSesiones(dato) {
    console.log('actualizar proyectos bloque');
}

// FUNCIONES
function imprimirProyecto(proyecto) {

    const card = document.createElement('div')
    card.classList.add('datos', 'border-btn')
    card.innerHTML= `
    <div class="card">
        <div class="card_left">
            <div class="link-row">
                <p class="numero">${proyecto.numero}</p>
                <a href="${proyecto.enlace}">
                <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
            </div>
            <p class="fecha" data-id="${proyecto.fecha}">${invertirFecha(proyecto.fecha)}</p>
            <p class="estado">${proyecto.estado}</p>
        </div>
        <div class="card_centro">
            <p class="resumen">${proyecto.detalle}</p>
        </div>
        <div class="card_right">
            <p class="area">${proyecto.areas}</p>
            <p class="tag">${proyecto.tema}</p>
        </div>
    </div>
    <div class="botones">
        <button class="btn editar">editar</button>
        <button class="btn eliminar">eliminar</button>
    </div>
    `;
    return card
}

// alertas
function alertas(form, texto, tipo = 'error') {

    const alerta= form.querySelector('.alerta')
    if(tipo === 'error'){
        alerta.classList.add('warning')
        alerta.textContent= texto;
    }else if (tipo == 'eliminar'){
        alerta.classList.remove('warning')
        alerta.textContent= texto;
    } else {
        alerta.classList.add('success')
        alerta.textContent= texto;
    }
    
}

// invertir fecha
function invertirFecha(fecha){
    //console.log(fecha);
    const [anio, mes, dia] = fecha.split('-');
    return `${dia.slice(0,2)}-${mes}-${anio}`;
}

