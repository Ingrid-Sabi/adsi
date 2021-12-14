"use strict"

var nombreEncontrado = false;
var nombreBuscar = "INGRID";
    var lstNombres = [];
    lstNombres.push("DIDIER");
    lstNombres.push("INGRID");
    lstNombres.push("MARYURY");

    for(var i=0;i<lstNombres.length;i++){
        if(lstNombres[i] == nombreBuscar){
            nombreEncontrado = true;
           break;
        }
    }if(nombreEncontrado){
        console.log('NOMBRE ENCONTRADO');
    }else{
        console.log('NOMBRE NO ENCONTRADO');
    }
