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
            cajaSearch.classList.toggle('hidden')
            cajaSettings.classList.add('hidden')
        } 
        if(i.classList.contains('fa-gear')){
            cajaSearch.classList.add('hidden')
            cajaSettings.classList.toggle('hidden')
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
const numSesiones = document.querySelector('.contenido .sesiones')
const numBloque = document.querySelector('.contenido .bloque')

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/info');
    const info = await response.json()
    
    if(info.length != 0) {
        numSesiones.textContent = info[0].sesiones;
        numBloque.textContent = info[0].bloque;
        //console.log(info);
        
    } else {
        numSesiones.textContent = 0;
        numBloque.textContent = 0;
        crearRegistroUno()
    }

    async function crearRegistroUno() {
        const registro = {
            sesiones: 0,
            bloque: 0
        }

        const responseRegistro = await fetch ('/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        const result = await responseRegistro.json()
        console.log(result.mensaje);
        window.location.reload()
    }
})

// completar editar información
function completeEditInfo(caja) {
    caja.querySelector('#num-sesiones').value = numSesiones.textContent;
    caja.querySelector('#num-bloque').value = numBloque.textContent;
    //console.log(bloque);
    
}