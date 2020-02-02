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

    h2.appendChild(textoTarea);
    article.appendChild(h2);
    article.appendChild(a);
    article.className = '' + pObjeto.prioridad + '';

    //TODAVÍA NO AÑADE LA CLASE AL ARTICLE
    seccionTareas.appendChild(article)
}