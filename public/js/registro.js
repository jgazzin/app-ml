// lee filtros
let filtros = {
    filtroTema : document.querySelector('#temas').value,
    filtroArea : document.querySelector('#areas').value,
    filtroYear : document.querySelector('#year').value,
    filtroMes : document.querySelector('#mes').value
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('imprimir sin filtros');
    
    imprimirProyectos('todo')
    imprimirPrensa(filtros)
    imprimirHitos(filtros)
});

// selects de filtros
function completarSelectEdit() {
    // ** AGREGAR ACA COMPLETAR SELECT DE AREAS Y TEMAS
    const temasSetting = document.querySelector('#temas');
    const areasSetting = document.querySelector('#areas');

    const select_Tema = document.querySelectorAll('.select-tema')
    
    select_Tema.forEach(selectTema=>{
        while(selectTema.firstChild){
            selectTema.firstChild.remove()
        }
        const elegir = document.createElement('option')
        elegir.setAttribute('disabled', true)
        elegir.textContent= 'Elegir'
        selectTema.appendChild(elegir)
        for (let index = 1; index < temasSetting.length; index++) {
            const op = document.createElement('OPTION')
            op.setAttribute('value',temasSetting.children[index].value )
            op.textContent = temasSetting.children[index].value
            selectTema.appendChild(op)
        }
    })

    const selectArea = document.querySelector('.proy-area')
    while(selectArea.firstChild){
        selectArea.firstChild.remove()
    }
    const elegir = document.createElement('option')
    elegir.setAttribute('disabled', true)
    elegir.textContent= 'Elegir'
    selectArea.appendChild(elegir)
    for (let index = 1; index < areasSetting.length; index++) {
        const op = document.createElement('OPTION')
        op.setAttribute('value',areasSetting.children[index].value )
        op.textContent = areasSetting.children[index].value
        selectArea.appendChild(op)
    }
}

// buscar filtros
document.querySelector('.filtro .btn.primary').addEventListener('click', ()=>{
    filtros = {
        filtroTema : document.querySelector('#temas').value,
        filtroArea : document.querySelector('#areas').value,
        filtroYear : document.querySelector('#year').value,
        filtroMes : document.querySelector('#mes').value
    }
    console.log(filtros);
    
    console.log(('imprimir todo con filtros'));
    
})


// limpiar filtros
document.querySelector('.filtro .btn.guardar').addEventListener('click', ()=>{
    window.location.reload()
})

// boton crear nuevo
const btnNuevo = document.querySelectorAll('.head .primary')
btnNuevo.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const boton = e.target.parentElement.parentElement.nextElementSibling;
        boton.classList.toggle('hidden')
        const formNuevo = boton.querySelector('form')
        formNuevo.reset()
        completarSelectEdit()
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
            case 'form_prensa':
                crearPrensa(formGuardar)
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
                case "sett-info":
                actualizarInfo()
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
    const registros = await responseProyectos.json()
    
    // Ordenar los registros por fecha
    const proyectos = registros.sort((a, b) => convertirFecha(b.fecha) - convertirFecha(a.fecha));
    
    //console.log(proyectos);

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

    document.querySelectorAll('.editar').forEach(btn=>{
        btn.addEventListener('click', (e) =>{
            completEditarProyecto(e.target.parentElement.previousElementSibling)
            completarSelectEdit()
        })
    })
    document.querySelectorAll('.eliminar').forEach(btn=>{
        btn.addEventListener('click', (e) =>{
            eliminarProyecto(e.target.parentElement.previousElementSibling)
        })
    })

    document.querySelector('#countProyectos').textContent = countProyectos;
}

async function validarProyecto(form){

    let formData = new FormData(form);
    let dataProyecto = {
        numero: formData.get('proy-numero'),
        fecha: formData.get('proy-fecha'),
        detalle: formData.get('proy-detalle'),
        areas: formData.get('proy-area'),
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
        //console.log(exist);
        if(exist){
            alertas(form, 'El proyecto ya existe. Para actualizar datos click en ACTUALIZAR')
            form.querySelector('.botones .guardar').textContent = 'actualizar'
            form.querySelector('.botones .guardar').classList.add('actualizar')

            form.querySelector('.botones .actualizar').addEventListener('click', ()=>{
                editarProyecto(form, exist)
            })

        } else {
            crearProyecto(dataProyecto)
        }
    }

}

// crea proyecto nuevo luego de validar form
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

// edita proyecto existente luego de validar form
async function editarProyecto(form, existente) {

    let formData = new FormData(form);
    let dataProyecto = {
        numero: formData.get('proy-numero'),
        fecha: formData.get('proy-fecha'),
        detalle: formData.get('proy-detalle'),
        areas: formData.get('proy-area'),
        tema: formData.get('proy-tema'),
        estado: formData.get('proy-estado'),
        enlace: formData.get('proy-enlace')
    }

    const id= parseInt(existente.id)
    const responseEditProy = await fetch (`/proyectos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataProyecto)
    })
    const result = await responseEditProy.json()
    console.log(result.mensaje);
    window.location.reload()
}

// eliminar proyecto
async function eliminarProyecto(elemento) {

    const id = elemento.getAttribute('data-id')
    const response = await fetch(`/proyectos/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json()
    console.log(result.mensaje);
    window.location.reload()
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
            alertas(dato.parentElement.parentElement, '', 'eliminar')
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

async function actualizarInfo(){
    const sesiones = document.querySelector('#num-sesiones')
    const bloque = document.querySelector('#num-bloque')

    console.log('actualizar numero sesiones');
    const data = {
        sesiones: Number(sesiones.value),
        bloque: Number(bloque.value)
    }

    const responseInfo = await fetch (`/info/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await responseInfo.json()
    console.log(result.mensaje);
    window.location.reload()
}

// Prensa
async function imprimirPrensa(filtros) {
    console.log('imprime registros de prensa desde BD');
    console.log(filtros);

    const sectionPrensa = document.querySelector('.prensa')
    sectionPrensa.innerHTML = '';

    const responsePrensa = await fetch('/prensa')
    const notasPrensa = await responsePrensa.json()
    
    notasPrensa.forEach(nota =>{
        const card = document.createElement('div')
        card.classList.add('datos', 'border-btn')
        card.innerHTML= `
        <div class="card" data-id="${nota.id}">
            <div class="card_left">
                <p>${invertirFecha(nota.fecha)}</p>
                <p class="estado">${nota.medio}</p>
            </div>
            <div class="card_centro">
                <p class="title">
                <a href="${nota.enlace}">
                ${nota.titulo}</a></p>
            </div>
            <div class="card_right">
                <p class="tag">${nota.tema}</p>
            </div>
        </div>
        <div class="botones">
            <button class="btn editar">editar</button>
            <button class="btn eliminar">eliminar</button>
        </div>
        `;
        sectionPrensa.appendChild(card) 
    })
    const countPrensa = notasPrensa.length;
    document.querySelector('#countPrensa').textContent = countPrensa;
    
}

async function crearPrensa(data){
    console.log('crear registro de prensa');
    console.log(data);
      
    imprimirPrensa(filtros)
}

async function validarPrensa(form) {
    console.log('valida campos vacíos y registros repetidos, antes de crearPrensa');
    
    let dataPrensa = {

    }
    crearPrensa(dataPrensa)
}

// hitos
async function imprimirHitos(filtros) {
    console.log('imprimir hitos');
    const sectionHitos = document.querySelector('.hitos')
    sectionHitos.innerHTML=''

    const responseHitos = await fetch('/hitos')
    const registros = await responseHitos.json()

    // Ordenar los registros por fecha
    const hitos = registros.sort((a, b) => convertirFecha(b.fecha) - convertirFecha(a.fecha));

    hitos.forEach(hito =>{
        const card = document.createElement('div')
        card.classList.add('datos', 'border-btn')
        card.innerHTML= `
            <div class="card--hito" data-fecha="${hito.fecha}">
                <div class="item">
                    <i class="fa-solid fa-flag fa-lg"></i>
                    <p>${hito.hito}</p>
                </div>
                <div>
                    <p class="tag">${hito.tema}</p>
                </div>
            </div>
            <div class="botones">
                <button class="btn editar">editar</button>
                <button class="btn eliminar">eliminar</button>
            </div>
        `;
        sectionHitos.appendChild(card) 
    })
}

async function crearHito(form){
    console.log('crear hito');

}

// FUNCIONES
function imprimirProyecto(proyecto) {

    const card = document.createElement('div')
    card.classList.add('datos', 'border-btn')
    card.innerHTML= `
    <div class="card" data-id="${proyecto.id}">
        <div class="card_left">
            <div class="link-row">
                <p class="numero">${proyecto.numero}</p>
                <a href="${proyecto.enlace}">
                <i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
            </div>
            <p class="fecha" data-fecha="${proyecto.fecha}">${invertirFecha(proyecto.fecha)}</p>
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

// completa la info del proyecto en el form editar
function completEditarProyecto(section) {
    console.log('completa datos en form');

    const formEditar = section.parentElement.parentElement.previousElementSibling;
    formEditar.classList.remove('hidden')
    formEditar.querySelector('#proy-numero').value = section.querySelector('.numero').textContent;
    formEditar.querySelector('#proy-enlace').value = section.querySelector('.link-row a').getAttribute('href')
    formEditar.querySelector('#proy-fecha').value = section.querySelector('.fecha').getAttribute('data-fecha').slice(0,10);

    formEditar.querySelectorAll('#proy-estado option').forEach(op => {
        if(op.value === section.querySelector('.estado').textContent) {
            op.setAttribute('selected', true)
        }
    })
    formEditar.querySelector('#proy-detalle').value = section.querySelector('.resumen').textContent;
    formEditar.querySelectorAll('#proy-tema option').forEach(op=>{
        if(op.value === section.querySelector('.tag').textContent){ op.setAttribute('selected', true)}
    })

}

// completar la info de prensa en el form editar
function completEditarPrensa(section) {
    console.log('completar form + selects');
    
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
    const [anio, mes, dia] = fecha.split('-');
    return `${dia.slice(0,2)}-${mes}-${anio}`;
}

// convertir la fecha de string a objeto Date (para ordenar)
const convertirFecha = (fechaString) => {
    return new Date(fechaString);
};

