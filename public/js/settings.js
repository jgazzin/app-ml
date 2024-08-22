document.addEventListener('DOMContentLoaded', ()=>{ 
    completarSelect('temas')
})

async function completarSelect(tabla) {
    const sectionTemas = document.querySelector('.filtros-buscar #temas')
    const sectionAreas = document.querySelector('.filtros-buscar #areas')

    if(tabla === 'temas') {
        const responsTemas = await fetch('/temas')
        const temas = await responsTemas.json()

        temas.forEach(element => {
            sectionTemas.appendChild(imprimirOption(element.tema))
        });
    }
    if(tabla === 'areas') {
        const responseAreas = await fetch('/areas')
        const areas = await responseAreas.json()
        
        areas.forEach(element => {
            sectionAreas.appendChild(imprimirOption(element.area))
        });

    }
    completarSelect('areas')
}

function imprimirOption(element) {
   
    const option = document.createElement('option')
    option.setAttribute('value', element)
    option.textContent = element

    return option
}