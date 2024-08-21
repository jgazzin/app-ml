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

// buscar filtros
document.querySelector('.filtro .btn.primary').addEventListener('click', ()=>{
    filtros = {
        filtroTema : document.querySelector('#temas').value,
        filtroArea : document.querySelector('#areas').value,
        filtroYear : document.querySelector('#year').value,
        filtroMes : document.querySelector('#mes').value
    }
    console.log(filtros);
    
    imprimirPrensa(filtros)
    
})


// limpiar filtros
document.querySelector('.filtro .btn.guardar').addEventListener('click', ()=>{
    window.location.reload()
})


// FUNCIONES ASYNC
async function imprimirProyectos(filtro, value = 'todo'){
    const contenedorProyectos = document.querySelector('.proyectos_propios')
    contenedorProyectos.innerHTML = '';
    let countProyectos = 0;

    const responseProyectos = await fetch('/proyectos')
    const registros = await responseProyectos.json()
        
    // Ordenar los registros por fecha
    const proyectos = registros.sort((a, b) => convertirFecha(b.fecha) - convertirFecha(a.fecha));

    
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

// Prensa
async function imprimirPrensa(filtros) {
    console.log('imprime registros de prensa desde BD');
    console.log(filtros);

    const sectionPrensa = document.querySelector('.prensa')
    sectionPrensa.innerHTML = '';

    const responsePrensa = await fetch('/prensa')
    const registros = await responsePrensa.json()

    // Ordenar los registros por fecha
    const notasPrensa = registros.sort((a, b) => convertirFecha(b.fecha) - convertirFecha(a.fecha));
    
    notasPrensa.forEach(nota =>{
        const card = document.createElement('div')
        card.classList.add('card', 'border-btn')
        card.innerHTML= `
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
        `;
        sectionPrensa.appendChild(card) 
    })
    const countPrensa = notasPrensa.length;
    document.querySelector('#countPrensa').textContent = countPrensa;
    
}

// Hitos
async function imprimirHitos(filtros) {
    console.log('imprime hitos');
    const sectionHitos = document.querySelector('.hitos')
    sectionHitos.innerHTML=''

    const responseHitos = await fetch('/hitos')
    const registros = await responseHitos.json()

    // Ordenar los registros por fecha
    const hitos = registros.sort((a, b) => convertirFecha(b.fecha) - convertirFecha(a.fecha));

    hitos.forEach(hito =>{
        const card = document.createElement('div')
        card.classList.add('card--hito', 'border-btn')
        card.setAttribute('data-fecha', hito.fecha)
        card.innerHTML= `
        <div class="item">
            <i class="fa-solid fa-flag fa-lg"></i>
            <p>${hito.hito}</p>
        </div>
        <div>
            <p class="tag">${hito.tema}</p>
        </div>
        `;
        sectionHitos.appendChild(card) 
    })
}

// FUNCIONES
function imprimirProyecto(proyecto) {

    const card = document.createElement('div')
    card.classList.add('card', 'border-btn')
    card.innerHTML= `
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
    `;
    return card
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


// FORM CONTACTO
const contactform = document.querySelector('.contactForm .form');
const btnForm = document.querySelector('.contactForm .form .btn')

const fechaMensaje = new Date();

let dataContacto = {
    nombre: '',
    email: '',
    mensaje: '',
    asunto: 'gral',
    fecha: `${fechaMensaje.getDate()}-${fechaMensaje.getMonth()}-${fechaMensaje.getFullYear()}`
}

contactform.addEventListener('focusout', verificarContactForm);
btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    enviar()
} )

// funciones

function verificarContactForm(e) {
    let type = e.target.id;
    console.log(type);
    

    switch (type) {
        case 'name':
            nombre(e.target)
            break;
        case 'email':
            email(e.target)
            break;
        case 'mensaje':
            mensaje(e.target)
            break;
    
        default:

            break;
    }

    if(!Object.values(dataContacto).includes('')){
        btnForm.classList.remove('disabled');
        btnForm.disabled = false;
    } else {
        btnForm.disabled = true;
        btnForm.classList.add('disabled')
    }

}

function nombre(e) {
    const nombre = e.value;
    if (nombre.trim() === '') {
            alert(e, 'error')
            dataContacto.nombre = ''
        } else {
            alert(e, 'ok')
            dataContacto.nombre = e.value.trim()
        }
    }

function email(e) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if(!regex.test(e.value) || e.value.trim() === ''){
    alert(e, 'error')
    dataContacto.email = ''
  } else {
    alert(e, 'ok')
    dataContacto.email = e.value.trim()
  }
}

function mensaje(e) {
    const mensaje = e.value.trim();
    if (mensaje === '') {
            alert(e, 'error')
            dataContacto.mensaje = ''
        } else {
            alert(e, 'ok')
            dataContacto.mensaje = mensaje;
        }
    }

function alert(e, tipo) {
    eliminarAlert(e);
    const padre = e.parentElement;
    const icon = document.createElement('I');
    icon.classList.add('fa-solid', 'fa-circle-check', `${tipo}`);
    padre.appendChild(icon);
}

function eliminarAlert(e) {
    if (e.nextElementSibling) {
        e.nextElementSibling.remove()
    }
}

function enviar() {
    contactform.classList.add('enviando')
    console.log(dataContacto);

    dataContacto = {
        nombre: '',
        email: '',
        mensaje: '',
        asunto: 'gral'
    }

    guardarMensaje(dataContacto)
    setTimeout(() => {
        contactform.classList.remove('enviando')
        contactform.reset()
        const i = contactform.querySelectorAll('.fa-solid');
        i.forEach(element => {
            element.remove()
        });
        btnForm.classList.add('disabled')
        btnForm.disabled = true;
    }, 1800);
    
    
}

async function guardarMensaje(data) {
    console.log('guarda en bd');
    
}

// FAQS
const arrows = document.querySelectorAll('.faqs .pregunta .fa-solid')

arrows.forEach(arrow => {
    arrow.addEventListener('click', mostrar)
});

function mostrar(e) {
    const item = e.target.parentElement.parentElement;
    const respuesta =item.lastElementChild;
    const icon = item.firstElementChild.lastElementChild;

    respuesta.classList.toggle("hidden");
    icon.classList.toggle("fa-angle-down")
    icon.classList.toggle("fa-angle-up")
}