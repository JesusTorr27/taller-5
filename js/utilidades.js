function crear_elemento(nombre_tag){

    return document.createElement(nombre_tag);

}




function crear_elemento_con_texto(nombre_tag, texto){

    var elemento = crear_elemento (nombre_tag);
    var texto_elemento = document.createTextNode(texto);
    elemento.appendChild(texto_elemento);
    document.body.appendChild(elemento);

    return elemento;

}

function crear_option(texto,valor){

    var option = crear_elemento_con_texto('option', texto);
    option.setAttribute('value', valor);
    return option;

    /*
    var opciones =document.createElement('opciones');
    opciones.text = item.name.common;
    adicionar_hijo(seleccionar, opciones); */
    
}

function crear_imagen(url_imagen){

    var img = crear_elemento("img");
    img.src =url_imagen;
    return img;

}

function adicionar_hijo(padre, hijo) {

    padre.appendChild(hijo);

}

function adicionar_body(hijo) {

    adicionar_hijo(document.body, hijo);

}
