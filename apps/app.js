let listaFrutas = [];
let listaLacteos = [];
let listaCongelados = [];
let listaDulces = [];

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
    ocultarElementoHTML('id_btn_fruta', true);
    ocultarElementoHTML('id_btn_lacteos', true);
    ocultarElementoHTML('id_btn_congelados', true);
    ocultarElementoHTML('id_btn_dulces', true);

    ocultarElementoHTML('id_input_ingresado', true);

    listaFrutas = [];
    listaLacteos = [];
    listaCongelados = [];
    listaDulces = [];
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
}

function elementoComprado(listaCompra){
    let elementoIngresado = document.getElementById('id_input_ingresado').value;
    listaCompra.push(elementoIngresado);
    limpiarInput('id_input_ingresado');
    return;
}

function bntFrutas(){
    elementoComprado(listaFrutas);    
}

function bntLacteos(){
    elementoComprado(listaLacteos);    
}

function bntCongelados(){
    elementoComprado(listaCongelados);    
}

function bntDulces(){
    elementoComprado(listaDulces);    
}

function bntNo(){
    setTimeout(() => {
        condicionesIniciales();
    },5000);    
    asignarTextoHTML('id_lista',`Lista de compras:`);
    asignarTextoHTML('id_lista_frutas',`Frutas: ${listaFrutas}`);
    asignarTextoHTML('id_lista_lacteos',`Lácteos: ${listaLacteos}`);
    asignarTextoHTML('id_lista_congelados',`Congelados: ${listaCongelados}`);
    asignarTextoHTML('id_lista_dulces',`Dulces: ${listaDulces}`);
}