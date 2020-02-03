var boton = document.getElementById('btn');

var listaTareas = new Array();

var seccionTareas = document.querySelector('.seccionTareas');

var ultimoId = 1;

boton.addEventListener('click', (e) => {
    var tarea = document.getElementById('laTarea').value;
    var prioridad = document.getElementById('prioridades').value;

    if (tarea == '' || prioridad == '') {
        document.getElementById('mensaje').innerText = 'Hay que rellenar ambos campos'
    } else {
        guardarTarea(tarea, prioridad);
        document.getElementById('laTarea').value = '';
        document.getElementById('prioridades').value = '';
        document.getElementById('mensaje').value = '';
    }
})

function guardarTarea(pTarea, pPrioridad) {
    let registro = {
        id: ultimoId,
        tarea: pTarea,
        prioridad: pPrioridad,
    }

    listaTareas.push(registro);
    pintarTareas(registro);
    ultimoId++;
}

function pintarTareas(pObjeto) {
    var article = document.createElement('article');
    var h2 = document.createElement('h2');
    var a = document.createElement('a');
    var textoTarea = document.createTextNode('' + pObjeto.tarea + '')
    var textoEliminar = document.createTextNode('Eliminar')

    a.href = '#';
    a.appendChild(textoEliminar);
    h2.appendChild(textoTarea);
    article.appendChild(h2);
    article.appendChild(a);
    article.classList.add(pObjeto.prioridad);

    //FALTA AÑADIR EL ID Y EL A
    seccionTareas.appendChild(article)
}

// -----------FILTROS DE TAREAS-----------------

var selectorPrioridad = document.querySelector('#filtroPrioridades');

selectorPrioridad.addEventListener('change', recogePrioridad);

function recogePrioridad(e) {
    let prioridad = e.target.value;
    let listaFiltradaTareas = new Array();

    if (prioridad != '') {
        listaFiltradaTareas = filtrarXprioridad(listaTareas, prioridad);
        pintarTareas(listaFiltradaTareas)
    } else {
        pintarTareas(listaTareas)
    }
}

function filtrarXprioridad(pListaTareas, pPrioridad) {
    var listaFiltrada = new Array();

    var contador = 0;
    for (prioridad of pListaTareas) {
        if (prioridad.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {

            listaFiltrada[contador] = prioridad;
            contador++
        }
    }
    console.log(listaFiltrada);
    return listaFiltrada;
}

// TRAS VARIOS INTENTOS REESCRIBIENDO EL CÓDIGO, NO CONSIGO AVERIGUAR POR QUÉ AL FILTRAR ME GENERA UNA NUEVA TAREA CON UNDEFINED. El console.log sí que me devuelve el array filtrado, así que imagino que el problema está en la función de pintarTareas