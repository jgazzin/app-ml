const hitos = [
    'Comunicación al Ministerio de Educación para solicitar se prohíba la realización de promesas de lealtad a banderas diferentes de la argentina',
    'Solicitamos establecer a la educación obligatoria como servicio estratégico esencial',
    'Ley "Nuestras Banderas" para que sólo se exhiban las banderas oficiales (nacional, provincial y municipal) en los edificios públicos provinciales',
    'Ley de Reiterancia para restringir la libertad en caso de peligrosidad procesal',
    'Solicitud de Información sobre estadísticas de ludopatía digital en niños y adolescentes',
    'Solicitamos establecer vacantes escolares en secundario por mérito para abanderados y escoltas',
    'Solicitamos arancelar la atención y servicios para extranjeros que no residan de manera permanente',
    'Solicitud de Información sobre Terminal de Ómnibus de San Carlos de Bariloche',
    'Ley de Transparencia  Fiscal para informar a los consumidores los impuestos provinciales y tasas que se pagan en los productos y servicios que adquieren',
    'Ley de Libre elección de Obra Social para los empleados públicos rionegrinos',
    'Solicitud al Ministerio de Seguridad para que concluya con los sumarios policiales que tienen a alrededor de 800 efectivos en situación indefinida',
    'Derogación de la Emergencia Territorial: solicitamos al PEN derogar el decreto 805/2021 que extendió la vigencia de la Ley 26.160',
    'Solicitud de Información por programas preventivos de la SENAF (Secretaría de Niñez, Adolescencia y Familia)',
    'Volvimos a presentar el proyecto de "Ficha Limpia" tanto para cargos electivos como partidarios'

];

document.addEventListener('DOMContentLoaded', imprimirHitos)

function imprimirHitos() {
    const contenedorHitos = document.querySelector('.hitos')
    
    let i = 0;
    hitos.forEach(hit =>{
        const item = document.createElement('DIV')
        item.classList.add('item')
        item.innerHTML =`
            <i class="fa-solid fa-flag fa-lg"></i>
            <p>${hit}</p>
        `;
        // console.log(item);
        // console.log(hit);
        contenedorHitos.appendChild(item)
    })
}