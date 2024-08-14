const notas = [
    {
        fecha: '04/07/2024',
        medio: 'Bariloche Opina',
        tema: 'responsabilidad fiscal',
        titulo: 'Nuevas medidas fiscales: Los tickets de consumo deberán detallar los impuestos',
        enlace: 'https://www.barilocheopina.com/noticias/2024/07/04/74606-nuevas-medidas-fiscales-los-tickets-de-consumo-deberan-detallar-los-impuestos'
    },
    {
        fecha: '03/07/2024',
        medio: 'Vivo Informado',
        tema: 'no más cautivos IPROSS',
        titulo: 'Reacciones de Lacour @lacourmartina: Falta de prestadores en El Bolsón de la obra social Ipross',
        enlace: 'https://www.vivoinformado.com.ar/2024/07/reacciones-de-lacour-lacourmartina.html?m=1'
    },
    {
        fecha: '27/06/2024',
        medio: 'Cadena 3 Rosario',
        tema: 'nuestras banderas',
        titulo: 'Lacour: "Respetemos los símbolos patrios"',
        enlace: 'https://youtu.be/Dgjhed29zMo '
    },
    {
        fecha: '26/06/2024',
        medio: 'Noticias Río Negro',
        tema: 'reiterancia delictiva',
        titulo: 'Presentan proyecto que busca fortalecer el Sistema Judicial para Proteger a la Sociedad y a las Víctimas',
        enlace: 'https://noticiasrionegro.com.ar/contenido/77019/presentan-proyecto-que-busca-fortalecer-el-sistema-judicial-para-proteger-a-la-s'
    },
    {
        fecha: '25/06/2024',
        medio: 'Infobae',
        tema: 'nuestras banderas',
        titulo: 'Otra polémica en Neuquén: izaron la bandera mapuche en la Universidad Nacional del Comahue',
        enlace: 'https://www.infobae.com/politica/2024/06/25/otra-polemica-en-neuquen-izaron-la-bandera-mapuche-en-la-universidad-nacional-del-comahue/'
    },
    {
        fecha: '25/06/2024',
        medio: 'FM Del Lago Esquel',
        tema: 'nuestras banderas',
        titulo: 'Impulsan dos  proyectos de ley para restringir la ceremonia de la promesa de la bandera mapuche y el izamiento de toda bandera que no fuera la celeste y blanca',
        enlace: 'https://fmdellagoesquel.com.ar/impulsan-dos-proyectos-de-ley-para-restringir-la-ceremonia-de-la-promesa-de-la-bandera-mapuche-y-el-izamiento-de-toda-bandera-que-no-fuera-la-celeste-y-blanca/'
    },
    {
        fecha: '25/06/2024',
        medio: 'Bariloche Más',
        tema: 'reiterancia delictiva',
        titulo: 'Un proyecto que busca fortalecer el Sistema Judicial para Proteger a la Sociedad y a las Víctimas',
        enlace: 'https://barilochemas.com.ar/un-proyecto-que-busca-fortalecer-el-sistema-judicial-para-proteger-a-la-sociedad-y-a-las-victimas/'
    },
    {
        fecha: '25/06/2024',
        medio: 'Ahora Comarca',
        tema: 'bloque pro',
        titulo: 'Dura respuesta del PRO a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”',
        enlace: 'https://ahoracomarca.com.ar/contenido/2030/dura-respuesta-del-pro-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-c'
    },
    {
        fecha: '25/06/2024',
        medio: 'ADN Río Negro',
        tema: 'bloque PRO',
        titulo: 'Liberales enmarañados en cruces por «plagio» legislativo',
        enlace: 'https://www.adnrionegro.com.ar/2024/06/liberales-enmaranados-en-cruces-por-plagio-legislativo/'
    },
    {
        fecha: '25/06/2024',
        medio: 'Diario La Palabra',
        tema: 'bloque PRO',
        titulo: 'Lacour responde: "No trabajan en comisiones ni leen los proyectos"',
        enlace: 'https://www.diariolapalabra.com.ar/noticia/143750/lacour-responde-no-trabajan-en-comisiones-ni-leen-los-proyectos'
    },
    {
        fecha: '25/06/2024',
        medio: 'El Cordillerano',
        tema: 'bloque PRO',
        titulo: 'Acusación de plagio: recrudece la interna del PRO en la Legislatura',
        enlace: 'https://www.elcordillerano.com.ar/amp/noticias/2024/06/25/191571-acusacion-de-plagio-recrudece-la-interna-del-pro-en-la-legislatura'
    },
    {
        fecha: '25/06/2024',
        medio: 'LCR Diario Digital',
        tema: 'bloque PRO',
        titulo: 'Dura respuesta de Lacour a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”',
        enlace: 'https://lcr.com.ar/dura-respuesta-de-lacour-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-comisiones-no-leen-los-proyectos/'
    },
    {
        fecha: '25/06/2024',
        medio: 'La Tecla Patagonia',
        tema: 'bloque PRO',
        titulo: 'Interna feroz en el PRO: el oficialismo responde a los rupturistas y los trata de ñoquis',
        enlace: 'https://www.lateclapatagonia.com.ar/85364-interna-feroz-en-el-pro-el-oficialismo-responde-a-los-rupturistas-y-los-trata-de-oquis '
    },
    {
        fecha: '25/06/2024',
        medio: 'Canal 7 Jacobacci',
        tema: 'bloque pro',
        titulo: 'Dura respuesta del PRO a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”',
        enlace: 'https://canal7jacobacci.com.ar/dura-respuesta-del-pro-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-comisiones-no-leen-los-proyectos/ '
    },
    {
        fecha: '25/06/2024',
        medio: 'Radio Rivadavia BRC',
        tema: 'reiterancia delictiva',
        titulo: 'Entrevista sobre el proyecto de ley presentado para incluir al Código Procesal Penal la figura de Reiterancia',
        enlace: 'https://facebook.com/100089872827598/videos/1117414732699723/'
    },
    {
        fecha: '24/06/2024',
        medio: 'Diario La Palabra',
        tema: 'nuestras banderas',
        titulo: 'Polémica en torno a la jura a la bandera mapuche: desde el PRO piden prohibir el acto',
        enlace: 'https://www.lateclapatagonia.com.ar/85342-legisladora-del-pro-en-contra-de-la-jura-a-la-bandera-mapuche '
    },
    {
        fecha: '24/06/2024',
        medio: 'El Cordillerano',
        tema: 'nuestras banderas',
        titulo: '“En ningún lugar del mundo permitirían algo como esto”',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/24/191210-en-ningun-lugar-del-mundo-permitirian-algo-como-esto'
    },
    {
        fecha: '24/06/2024',
        medio: 'Diario Río Negro',
        tema: 'bloque pro',
        titulo: 'Legisladores de Río Negro acusan a colegas de haber copiado “letra por letra” un proyecto sobre seguridad',
        enlace: 'www.rionegro.com.ar/politica/legisladores-de-rio-negro-acusan-a-colegas-de-haber-copiado-letra-por-letra-un-proyecto-sobre-seguridad '
    },
    {
        fecha: '23/06/2024',
        medio: 'Bariloche 2000',
        tema: 'nuestras banderas',
        titulo: 'La legisladora Lacour pidió repudiar la promesa a la bandera mapuche y prohibir esos actos en escuelas',
        enlace: 'https://www.bariloche2000.com/noticias/leer/la-legisladora-lacour-pidio-repudiar-la-promesa-a-la-bandera-mapuche-y-prohibir-esos-actos-en-escuelas/ '
    },
    {
        fecha: '22/06/2024',
        medio: 'Bariloche Más',
        tema: 'reiterancia delictiva',
        titulo: 'Lacour: “Proteger la Identidad Nacional y fortalecer el respeto a la Bandera Argentina”',
        enlace: 'https://barilochemas.com.ar/lacour-proteger-la-identidad-nacional-y-fortalecer-el-respeto-a-la-bandera-argentina/'
    },
    {
        fecha: '21/06/2024',
        medio: 'Noticias Río Negro',
        tema: 'nuestras banderas',
        titulo: 'Lacour: “Proteger la Identidad Nacional y fortalecer el respeto a la Bandera Argentina”',
        enlace: 'https://noticiasrionegro.com.ar/contenido/76925/lacour-proteger-la-identidad-nacional-y-fortalecer-el-respeto-a-la-bandera-argen '
    },
    {
        fecha: '19/06/2024',
        medio: 'El Cordillerano',
        tema: 'nuestras banderas',
        titulo: 'Las autoras del proyecto para sacar los colores mapuches de los edificios públicos donaron una bandera argentina',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/19/191023-las-autoras-del-proyecto-para-sacar-los-colores-mapuches-de-los-edificios-publicos-donaron-una-bandera-argentina/'
    },
    {
        fecha: '15/06/2024',
        medio: 'Boletín de Consenso Patagonia',
        tema: 'nuestras banderas',
        titulo: 'Resumen de la semana en el conflicto territorial en la Patagonia',
        enlace: 'https://v3.esmsv.com/campaign/htmlversion?AdministratorID=182412&CampaignID=58&StatisticID=58&MemberID=402&s=0f9f9531f9d063b5c00b00b8265ba374&isDemo=0 '
    },
    {
        fecha: '13/06/2024',
        medio: 'Limay TV',
        tema: 'nuestras banderas',
        titulo: 'Entrevista sobre proyecto "Sólo Nuestras banderas"',
        enlace: 'https://youtu.be/134sx3PHgUg '
    },
    {
        fecha: '11/06/2024',
        medio: 'Radio Rivadavia BRC',
        tema: 'nuestras banderas',
        titulo: 'Entrevista en "Nada es para siempre"',
        enlace: 'https://facebook.com/100089872827598/videos/1101516237576166/'
    },
    {
        fecha: '11/06/2024',
        medio: 'Radio C Bariloche',
        tema: 'nuestras banderas',
        titulo: 'Entrevista en sobre proyecto "Sólo nuestras banderas"',
        enlace: 'https://www.youtube.com/watch?v=Zw1AxgPbMRE&t=3s'
    },
    {
        fecha: '11/06/2024',
        medio: 'TVeo Río Negro',
        tema: 'nuestras banderas',
        titulo: 'Proyecto de Ley en Río Negro quiere prohibir que la bandera mapuche esté en edificios públicos',
        enlace: 'https://www.youtube.com/watch?v=Qj08lRsm02s '
    },
    {
        fecha: '10/06/2024',
        medio: 'Bariloche2000',
        tema: 'nuestras banderas',
        titulo: 'Podría ir a prisión quien no respete la ley impulsada para que no flamee la bandera mapuche en edificios públicos',
        enlace: 'https://www.bariloche2000.com/noticias/leer/podria-ir-a-prision-quien-no-respete-la-ley-impulsada-para-que-no-flamee-la-bandera-mapuche-en-edificios-publicos/153960 '
    },
    {
        fecha: '10/06/2024',
        medio: 'Ahora Comarca',
        tema: 'nuestras banderas',
        titulo: 'Proyecto de ley en Río Negro busca que en edificios públicos de la provincia solo se exhiban las banderas nacional, provincial y municipal',
        enlace: 'https://ahoracomarca.com.ar/contenido/1840/proyecto-de-ley-en-rio-negro-busca-que-en-edificios-publicos-de-la-provincia-sol'
    },
    {
        fecha: '10/06/2024',
        medio: 'El Cordillerano',
        tema: 'nuestras banderas',
        titulo: 'El proyecto para que la bandera mapuche no figure en edificios públicos menciona un decreto de Roca',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/10/190382-el-proyecto-para-que-la-bandera-mapuche-no-figure-en-edificios-publicos-menciona-un-decreto-de-roca '
    },
    {
        fecha: '10/06/2024',
        medio: 'Bariloche Opina',
        tema: 'nuestras banderas',
        titulo: 'Legisladora Lacour: "No estamos en contra de la bandera mapuche"',
        enlace: 'https://www.barilocheopina.com/noticias/2024/06/10/74164-legisladora-lacour-no-estamos-en-contra-de-la-bandera-mapuche '
    },
    {
        fecha: '10/06/2024',
        medio: 'El Cordillerano',
        tema: 'nuestras banderas',
        titulo: '“Poner la bandera mapuche es excluir a la gran mayoría de la población que no se identifica con ella”',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/10/190384-poner-la-bandera-mapuche-es-excluir-a-la-gran-mayoria-de-la-poblacion-que-no-se-identifica-con-ella '
    },
    {
        fecha: '09/06/2024',
        medio: 'El Cordillerano',
        tema: 'nuestras banderas',
        titulo: 'La bandera mapuche no podría estar en edificios públicos rionegrinos',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/09/190339-la-bandera-mapuche-no-podria-estar-en-edificios-publicos-rionegrinos'
    },
    {
        fecha: '21/05/2024',
        medio: 'Vivo Informado',
        tema: 'bloque pro',
        titulo: 'La Legisladora Martina Lacour critica las malas prácticas políticas y celebra el triunfo en las internas del PRO en Río Negro',
        enlace: 'https://www.vivoinformado.com.ar/2024/05/la-legisladora-martina-lacour-critica.html'
    },
    {
        fecha: '21/05/2024',
        medio: 'Noticias Río Negro ',
        tema: 'bloque pro',
        titulo: '"La falta de principios tarde o temprano se paga"',
        enlace: 'https://noticiasrionegro.com.ar/contenido/75992/la-falta-de-principios-tarde-o-temprano-se-paga '
    },
    {
        fecha: '20/05/2024',
        medio: 'Canal 7 Jacobacci',
        tema: 'bloque pro',
        titulo: 'Legisladora Martina Lacour, sobre las elecciones del PRO en Río Negro',
        enlace: 'https://canal7jacobacci.com.ar/la-legisladora-martina-lacour-manifesto-que-la-falta-de-principios-tarde-o-temprano-se-paga/'
    },
    {
        fecha: '17/05/2024',
        medio: 'LU 17',
        tema: 'peajes río negro',
        titulo: 'ES LEY: COBRARÁN PEAJES EN RUTAS DE RÍO NEGRO',
        enlace: 'https://lu17.com/contenido/57629/es-ley-cobraran-peajes-en-rutas-de-rio-negro '
    },
    {
        fecha: '17/05/2024',
        medio: 'Radio Nacional',
        tema: 'peajes río negro',
        titulo: 'Entrevista sobre la sesión del 16 de mayo en la Legislatura',
        enlace: 'https://www.youtube.com/watch?v=cTvtkdO7vEI '
    },
    {
        fecha: '07/05/2024',
        medio: 'El Cordillerano',
        tema: 'usurpaciones de tierras',
        titulo: 'El camino que desembocó en que dos hectáreas de la zona del lago Mascardi volvieran a Parques Nacionales',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/05/07/188047-el-camino-que-desemboco-en-que-dos-hectareas-de-la-zona-del-lago-mascardi-volvieran-a-parques-nacionales-y-algo-mas'
    },
    {
        fecha: '29/04/2024',
        medio: 'Vivo Informado',
        tema: 'no más cautivos IPROSS',
        titulo: 'Tu salud, tu elección! Propone libre elección de afiliados en IPROSS',
        enlace: 'https://www.vivoinformado.com.ar/2024/04/tu-salud-tu-eleccion-propone-libre.html'
    },
    {
        fecha: '26/04/2024',
        medio: 'Rodrigo Sotomayor',
        tema: 'no más cautivos IPROSS',
        titulo: 'Entrevista: "Libre elección del IPROSS"',
        enlace: 'https://www.youtube.com/watch?v=zZMzrx4eIDo'
    },
    {
        fecha: '24/04/2024',
        medio: 'Radio Rivadavia BRC',
        tema: 'no más cautivos IPROSS',
        titulo: 'Entrevista: proyecto de ley con el que impulsan la libre elección de obra social para estatales de Río Negro.',
        enlace: 'https://facebook.com/100089872827598/videos/437341258987568/'
    },
    {
        fecha: '23/04/2024',
        medio: 'ADN Río Negro',
        tema: 'no más cautivos IPROSS',
        titulo: '«Libertad»: Proponen que el IPROSS deje de ser obligatorio',
        enlace: 'https://www.adnrionegro.com.ar/2024/04/proponen-que-el-ipross-deje-de-ser-obligatorio/ '
    },
    {
        fecha: '23/03/2024',
        medio: 'LetraP',
        tema: 'bloque pro',
        titulo: 'Río Negro: Juan Martín va por el PRO para sacar del juego a Aníbal Tortoriello',
        enlace: 'https://www.letrap.com.ar/politica/rio-negro-juan-martin-va-el-pro-sacar-del-juego-anibal-tortoriello-n5407444 '
    },
    {
        fecha: '29/02/2024',
        medio: 'El Cordillerano',
        tema: 'bloque pro',
        titulo: 'Desde una agrupación barilochense ligada al PRO dijeron que Ignacio Torres asumió un “planteamiento desestabilizador”',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/02/29/182928-desde-una-agrupacion-barilochense-ligada-al-pro-dijeron-que-ignacio-torres-asumio-un-planteamiento-desestabilizador'
    },
    {
        fecha: '21/02/2024',
        medio: 'Radio Rivadavia BS.AS.',
        tema: 'incendios forestales',
        titulo: 'Sobre la actualidad de los incendios en la Patagonia:“Como legisladores vamos a pedir un mayor nivel de prevención”',
        enlace: 'https://x.com/Rivadavia630/status/1756842854767329653'
    },
    {
        fecha: '24/01/2024',
        medio: 'El Cordillerano',
        tema: 'yo no paro',
        titulo: 'Legisladoras del PRO se expresaron en contra del paro general que se va a desarrollar en todo el país',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/01/24/180374-legisladoras-del-pro-se-expresaron-en-contra-del-paro-general-que-se-va-a-desarrollar-en-todo-el-pais'
    },
    {
        fecha: '09/01/2024',
        medio: 'El Cordillerano',
        tema: 'responsabilidad fiscal',
        titulo: 'Una ONG que busca generar conciencia fiscal intenta desembarcar en la Patagonia',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/01/09/179295-una-ong-que-busca-generar-conciencia-fiscal-intenta-desembarcar-en-la-patagonia'
    }
]

document.addEventListener('DOMContentLoaded', ()=>{
    imprimirPrensa(notas)})

let temaPrensa = document.querySelector('#temas');
console.log(temaPrensa.value);
temaPrensa.addEventListener('change', ()=>{
    if(temaProyectos.value===''){
        imprimirPrensa(notas)
    } else {
        const notasFiltradas = notas.filter(note => note.tema === temaPrensa.value)
        imprimirPrensa(notasFiltradas)

    }

})

// FUNCIONES
function imprimirPrensa(listado) {
    const contenedorPrensa = document.querySelector('.prensa')
    contenedorPrensa.innerHTML= '';

    listado.forEach(nota =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML= `
        <div class="card_left">
            <p>${nota.fecha}</p>
            <p>${nota.medio}</p>
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
        contenedorPrensa.appendChild(card)

    })
    const countPrensa = listado.length;
    document.querySelector('#countPrensa').textContent = countPrensa;
}

//<a href="${nota.enlace}" class="btn editar">Ver</a>