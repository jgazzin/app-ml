document.querySelectorAll('.verMas').forEach(i =>{
    i.addEventListener('click', (e)=>{
        const seccionVer = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
        seccionVer.classList.toggle('hidden')
        e.target.classList.toggle('fa-circle-down')
        e.target.classList.toggle('fa-circle-up')
    })
})

// cajas search + gear
document.querySelectorAll('.iconos-eventos i').forEach(i =>{
    i.addEventListener('click', () =>{
        const cajaSearch = document.querySelector('.eventos .filtros-buscar')
        const cajaSettings = document.querySelector('.eventos .settings')

        if(i.classList.contains('fa-magnifying-glass')){
            cajaSearch.classList.remove('hidden')
            cajaSettings.classList.add('hidden')
        } 
        if(i.classList.contains('fa-gear')){
            cajaSearch.classList.add('hidden')
            cajaSettings.classList.remove('hidden')
            completeEditInfo(cajaSettings)
        } 


        // cajaSearch.classList.toggle('hidden')
        // cajaSettings.classList.toggle('hidden')
    })
})

//date
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
document.querySelector('.date').textContent = añoActual;

// Settings INFO - rellena datos
const sesiones = document.querySelector('.contenido .sesiones')
const bloque = document.querySelector('.contenido .bloque')

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/info');
    const info = await response.json()
    //console.log(info);
    
    sesiones.textContent = info[0].sesiones;
    bloque.textContent = info[0].bloque;
})

// completar editar información
function completeEditInfo(caja) {
    caja.querySelector('#num-sesiones').value = sesiones.textContent;
    caja.querySelector('#num-bloque').value = bloque.textContent;
    //console.log(bloque);
    
}