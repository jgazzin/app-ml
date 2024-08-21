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
