let listaFrutas = [];
let listaLacteos = [];
let listaCongelados = [];
let listaDulces = [];
let cantidadIngresada = 0;
let superLista = [];
let indiceEliminado = -1;
let encontrado = 0;

function asignarTextoHTML(idEtiqueta, texto){
    let textoAsigando = document.getElementById(idEtiqueta);
    if (idEtiqueta.includes('btn')) {
        textoAsigando.value = texto;
    } else {
        textoAsigando.innerHTML = texto;
    }
}

function ocultarElementoHTML(idElemento, opcion){
    return document.getElementById(idElemento).hidden = opcion;
}

function limpiarInput(idInput){
    return document.getElementById(idInput).value = '';
}

function condicionesIniciales(){
    asignarTextoHTML('id_titulo',`Lista de compras`);
    asignarTextoHTML('id_preguntas',`¿Deseas agregar un alimento a tu lista de compras?`);
    asignarTextoHTML('id_preguntas2',``);
    
    ocultarElementoHTML('id_btn_ok', false);

    asignarTextoHTML('id_btn_ok',`OK`);
    asignarTextoHTML('id_btn_no',`NO`);
    asignarTextoHTML('id_btn_eliminar',`Eliminar`);
    asignarTextoHTML('id_btn_fruta',`Frutas`);
    asignarTextoHTML('id_btn_lacteos',`Lacteos`);
    asignarTextoHTML('id_btn_congelados',`Congelados`);
    asignarTextoHTML('id_btn_dulces',`Dulces`);
    asignarTextoHTML('id_lista',``);
    asignarTextoHTML('id_lista_frutas',``);
    asignarTextoHTML('id_lista_lacteos',``);
    asignarTextoHTML('id_lista_congelados',``);
    asignarTextoHTML('id_lista_dulces',``);
    asignarTextoHTML('id_autor',`Creado por J. Valentin`);

    ocultarElementoHTML('id_btn_no', true);
    ocultarElementoHTML('id_btn_eliminar', true);
    ocultarElementoHTML('id_btn_fruta', true);
    ocultarElementoHTML('id_btn_lacteos', true);
    ocultarElementoHTML('id_btn_congelados', true);
    ocultarElementoHTML('id_btn_dulces', true);

    ocultarElementoHTML('id_input_ingresado', true);

    listaFrutas = [];
    listaLacteos = [];
    listaCongelados = [];
    listaDulces = [];
    cantidadIngresada = 0;
    superLista = [];
    indiceEliminado = -1;
    encontrado = 0;
}

condicionesIniciales();

function bntOk(){
    asignarTextoHTML('id_preguntas',`¿Qué alimento deseas agregar?`);

    asignarTextoHTML('id_preguntas2',`¿En qué categoría se encaja ese alimento`);
    ocultarElementoHTML('id_input_ingresado', false);
    ocultarElementoHTML('id_btn_ok', true);
    ocultarElementoHTML('id_btn_fruta', false);
    ocultarElementoHTML('id_btn_lacteos', false);
    ocultarElementoHTML('id_btn_congelados', false);
    ocultarElementoHTML('id_btn_dulces', false);

    asignarTextoHTML('id_btn_no',`Finalizar`);
    ocultarElementoHTML('id_btn_no', false);

    limpiarInput('id_input_ingresado');
}

function elementoComprado(listaCompra){
    let elementoIngresado = document.getElementById('id_input_ingresado').value;
    if (elementoIngresado == '') {
        alert(`Ingresar un Producto por favor`);
    } else {
        listaCompra.push(elementoIngresado);
        limpiarInput('id_input_ingresado');
        cantidadIngresada++;        
    }
    if (cantidadIngresada == 1) {
        ocultarElementoHTML('id_btn_eliminar', false);
    }
    return;
}

function bntFrutas(){
    elementoComprado(listaFrutas);    
    mostrarLista();
}

function bntLacteos(){
    elementoComprado(listaLacteos);    
    mostrarLista();
}

function bntCongelados(){
    elementoComprado(listaCongelados);   
    mostrarLista(); 
}

function bntDulces(){
    elementoComprado(listaDulces);    
    mostrarLista();
}

function mostrarLista(){
    asignarTextoHTML('id_lista',`Lista de compras:`);
    asignarTextoHTML('id_lista_frutas',`Frutas: ${listaFrutas}`);
    asignarTextoHTML('id_lista_lacteos',`Lácteos: ${listaLacteos}`);
    asignarTextoHTML('id_lista_congelados',`Congelados: ${listaCongelados}`);
    asignarTextoHTML('id_lista_dulces',`Dulces: ${listaDulces}`);
}

function bntNo(){
    setTimeout(() => {
        condicionesIniciales();
    },1000);    
    mostrarLista();
    //alert(cantidadIngresada);
}

function bntEliminar(){
    superLista = [listaFrutas, listaLacteos, listaCongelados, listaDulces];
    let elementoEliminado = document.getElementById('id_input_ingresado').value;
    encontrado = 0;
    
    if (elementoEliminado == '') {
        alert(`Ingresar un producto para eliminar`);
    } else {
        superLista.forEach(superLista =>{
            indiceEliminado = superLista.indexOf(elementoEliminado); //buscamos el indice del elemento a eliminar        
            if (indiceEliminado !== -1) {            
                superLista.splice(indiceEliminado, 1); //elimina 1 elemento
                mostrarLista();
                encontrado++;
            }
        });
        if (encontrado == 0) {
            alert(`¡No fue posible encontrar el elemento en la lista!`);
        } 
        limpiarInput('id_input_ingresado');
    }
}