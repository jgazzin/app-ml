document.querySelectorAll('.btn.nuevo').forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        const abrirForm = btn.parentElement.parentElement.nextElementSibling;

        const section = abrirForm.parentElement;
        abrirForm.classList.toggle('hidden')
        switch (section.className) {
            case 'medios':
                section.querySelector('.btn.guardar').addEventListener('click', (e)=>{
                    e.preventDefault()
                    createNota()
                })
                break;
            case 'redes':
                section.querySelector('.btn.guardar').addEventListener('click', (e)=>{
                    e.preventDefault()
                    createPubli()
                })
                break;
        
            default:
                break;
        }
  
    })

})


document.querySelectorAll('.btn.mostrar').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const abrirForm = btn.parentElement.parentElement.parentElement;
        abrirForm.querySelector('.contenido').classList.toggle('hidden')

        switch (abrirForm.className) {
            case 'medios':
                obtenerNotas()
                break;
            case 'redes':
                obtenerPubli()
                break;
            
        
            default:
                break;
        }
    })

})


// listar notas
async function obtenerNotas(){
    const response = await fetch('/medios')
    const notas = await response.json()
    const medios = document.querySelector('.medios')
    medios.querySelector('.contenido_items').innerHTML = '';
    notas.forEach(item =>{
        const row = document.createElement('div')
        row.classList.add('row')
        row.innerHTML = `
        <p>${item.fecha}</p>
        <p class="title auto-h">${item.medio}</p>
        <p>${item.tema}</p>
        <a href="${item.enlace}">click para ver</a>
        <button class="btn eliminar" data-id="${item.id}">eliminar</button>
        `;
        medios.querySelector('.contenido_items').appendChild(row)
    })

    // eliminar nota
    medios.querySelectorAll('.eliminar').forEach(button =>{
        
        button.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id')
            const response = await fetch(`/medios/${id}`, {
                method: 'DELETE'
            });
            const result = await response.json()
            alert(result.mensaje);
            obtenerNotas()

        })
    })
}

// listar Publicaciones
async function obtenerPubli(){
    const response = await fetch('/redes')
    const publicaciones = await response.json()
    const redes = document.querySelector('.redes')
    redes.querySelector('.contenido_items').innerHTML = '';
    publicaciones.forEach(item =>{
        const row = document.createElement('div')
        row.classList.add('row')
        row.innerHTML = `
        <p>${item.fecha}</p>
        <p class="title auto-h">${item.medio}</p>
        <p>${item.tema}</p>
        <a href="${item.enlace}">click para ver</a>
        <button class="btn eliminar" data-id="${item.id}">eliminar</button>
        `;
        redes.querySelector('.contenido_items').appendChild(row)
    })

    // eliminar publi
    redes.querySelectorAll('.eliminar').forEach(button =>{
    
        button.addEventListener('click', async (e) => {

            const id = e.target.getAttribute('data-id')
            const response = await fetch(`/redes/${id}`, {
                method: 'DELETE'
            });
            const result = await response.json()
            alert(result.mensaje);
            obtenerPubli()

        })
    })
}

// crear nota
async function createNota (){
    const form = document.querySelector('.medios .nuevo_item')

    if(valid(form)){
        const formData = new FormData(form);
        const data = {
            fecha: formData.get('fecha'),
            medio: formData.get('medio'),
            tema : formData.get('tema'),
            enlace : formData.get('enlace')
        }
        const response = await fetch('/medios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result);
        alert(result.mensaje);
        form.reset()
        form.classList.add('hidden')
        obtenerNotas()
    }
}

// crear nota
async function createPubli (){
    const form = document.querySelector('.redes .nuevo_item')

    if(valid(form)){
        const formData = new FormData(form);
        const data = {
            fecha: formData.get('fecha'),
            medio: formData.get('medio'),
            tema : formData.get('tema'),
            enlace : formData.get('enlace')
        }
        const response = await fetch('/redes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        alert(result.mensaje);
        form.reset()
        form.classList.add('hidden')
        obtenerPubli()
    }
}

// falidar form
function valid(form) {
    const fecha = form.querySelector('.fecha').value;
    const medio = form.querySelector('.medio').value;
    const tema = form.querySelector('.tema').value;
    const enlace = form.querySelector('.enlace').value;

    if(fecha != '' &
    medio != '' &
    tema != '' &
    enlace != ''){
        return true;
    }

    console.log(fecha, medio, tema, enlace);
}

