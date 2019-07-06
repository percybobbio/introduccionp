// JavaScript source code
window.onload = inicio;//arranca la funcion inicio una vez cargada el index
//definicion de arreglos
var centros = ["----","pachacamac", "cieneguilla", "chosica"];
var descripcion  = ["----", "Pachacamac, donde todo empezo:"+ "<br>" + "En nuestro Primer centro recreacional contamos con las siguientes instalaciones:" + "<br>" +
    "PISCINA TEMPERADA" + "<br>"+
"JUEGOS RECREACIONALES" +"<br>"+
"SERVICIO DE VETERINARIA" + "<br>" +
"EVENTOS(FINES DE SEMANA)"+ "<br>"+ 
    "RESTAURANTE",

    "En Cieneguilla contamos con las siguientes instalaciones:" + "<br>" + "PISCINA TEMPERADA" + "<br>" +
    "JUEGOS RECREACIONALES" + "<br>" +
    "SERVICIO DE VETERINARIA",

    "En chosica  contamos con :" +  "<br>" + "JUEGOS RECREACIONALES" +" <br> "+
"SERVICIO DE VETERINARIA" + "<br>" +
    "EVENTOS(FINES DE SEMANA)" + "<br>" +
    "RESTAURANTE"



];

function inicio() {
    var texto ;
    texto = ""
    for (i = 0; i <= centros.length - 1; i++) {
        texto = texto + "<option>" + centros[i] + "</option>";
    }
    //asigna la lista de paises al selector
    document.getElementById("seleccione").innerHTML = texto;    
}

function buscar() {
    var indice;
    //capturo el indice del selector que sera el mismo del arreglo selecciones y precios.
    indice = document.getElementById("seleccione").selectedIndex;
    
    

    //asigno la imagen de la camiseta a la segunda fila de la tabla
    document.getElementById("foto").src = "imagenes/" + centros[indice] + ".jpg";
   
    //asigno el precio de la camiseta a la tercera fila de la tabla
    document.getElementById("destino_descripcion").innerHTML =  descripcion[indice];

    
}