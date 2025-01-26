let datos = "";

addEventListener("click", e => {//ESTOY PENDIENTE DE UN CLICK
    if (e.target.tagName == 'SPAN') {//FILTRO SI EL CLICK SE DIO EN UN span tag
        const id = e.target.getAttribute("id");//SI ES ASI, AVERIGUO CUAL ES EL ID DE DICHO span
        console.log("Se ha clickeado el id " + id);
        //document.getElementById(id).style.backgroundColor="red";
        //id1 = document.getElementById(id).innerHTML;//EXTRAIGO EL CONTENIDO DE ESE ID/ TAMBIEN SE PUEDE CAMBIAR COLOR, ETC
        procesar(id);
    }
});//referencia https://javascript.info/event-delegation


let flagPuntos = 0;
let ultimaExpresion = "";

function procesar(dato) {
    let a, b, resultado = 0;

    datos += document.getElementById(dato).innerHTML;

    if (isNaN(datos[0])) {
        alert("el primer elemento debe ser un numero")
        datos = "";
    }
    else {

        if (isNaN(datos[(datos.length) - 1]) && isNaN(datos[(datos.length) - 2])) {//SI PONGO 2 OPERACIONES SEGUIDAS
            datos = datos.substring(0, datos.length - 2);//BORRO LA OPERACION ANTERIOR
            datos += document.getElementById(dato).innerHTML;//REEMPLAZO POR LA OPERACION ACTUAL
        }
        else if (isNaN(datos[(datos.length) - 1])) {
            ultimaExpresion += document.getElementById(dato).innerHTML;
            verificarPuntos();
        }


        document.getElementById("preview").value = datos
        document.getElementById("preview").focus();
    }

}

function verificarPuntos() {
    let result = "";
    if (ultimaExpresion[ultimaExpresion.length - 1] == '=') {
        deletefun();
        document.getElementById("result").innerHTML = calcular_resultadoneto(datos);
    }
    else if (ultimaExpresion[ultimaExpresion.length - 1] == '.') {
        flagPuntos++;
    }
    else { flagPuntos = 0; }
    console.log("numero de puntos" + flagPuntos);

    if (flagPuntos > 1) {
        deletefun();
    }
}

function deletefun() {
    console.log("oprimi boton");
    datos = datos.substring(0, datos.length - 1);
    document.getElementById("preview").value = datos;
}

function deleteallfun() {
    datos = "";
    document.getElementById("preview").value = datos;
}
