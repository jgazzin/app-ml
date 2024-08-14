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
    console.log(fecha);
    const [anio, mes, dia] = fecha.split('-');
    return `${dia.slice(0,2)}-${mes}-${anio}`;
}
