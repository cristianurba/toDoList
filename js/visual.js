var boton = document.getElementById('btn');

var seccionTareas = document.getElementById('seccionTareas');

ultimoId = 4;

boton.addEventListener('click', (e) => {
    var tarea = document.getElementById('laTarea').value;
    var prioridad = document.getElementById('prioridades').value;

    if (tarea.length == 0 || prioridad == "") {
        document.getElementById('mensaje').innerText = 'Hay que rellenar ambos campos';
        document.getElementById('formulario').reset();
    } else {
        guardarTarea(tarea, prioridad);
        document.getElementById('mensaje').innerText = '';
        document.getElementById('formulario').reset();
    }
});

function pintarTareas(pListaTareas) {
    if (pListaTareas.lenght != 0) {
        pListaTareas.forEach(tarea => {
            seccionTareas.innerHTML += `<article id=${tarea.id} class=${tarea.prioridad}>
			<h2>${tarea.titulo}</h2><a id="borrar" href="#">Eliminar</i></a>
		</article>`
        })
    }
}

pintarTareas(listaTareas);

function guardarTarea(pTarea, pPrioridad) {
    let registro = {
        id: ultimoId,
        titulo: pTarea,
        prioridad: pPrioridad
    }

    listaTareas.push(registro);
    pintarTarea(registro);
    ultimoId++;
}

function pintarTarea(pRegistro) {
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let titulo = document.createTextNode(pRegistro.titulo);

    h2.appendChild(titulo);

    let enlace = document.createElement('a')
    enlace.id = ('borrar');
    enlace.href = ('#');
    let textoEliminar = document.createTextNode('Eliminar');
    enlace.appendChild(textoEliminar);


    article.appendChild(h2);
    article.appendChild(enlace);
    article.className = pRegistro.prioridad;
    article.id = pRegistro.id;

    seccionTareas.appendChild(article);
}
