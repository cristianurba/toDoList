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

var selectorPrioridad = document.querySelector('#filtroPrioridades')

selectorPrioridad.addEventListener('change', recogePrioridad);

function recogePrioridad(e) {
    let prioridad = e.target.value;
    let listaFiltradaPrioridades = new Array();

    if (prioridad != '') {
        listaFiltradaPrioridades = filtrarXprioridades(listaTareas, prioridad);
        pintarTareas(listaFiltradaPrioridades);
    } else {
        pintarTareas(listaTareas);
    }
}

function filtrarXprioridades(pListaTareas, pPrioridad) {
    var listaFiltrada = new Array();

    var contador = 0;
    for (tarea of pListaTareas) {
        if (tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {
            listaFiltrada[contador] = tarea;
            contador++
        }
    }
    return listaFiltrada;
}