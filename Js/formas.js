document.getElementById('temas').addEventListener('change',temaSeleccionado);

function temaSeleccionado(){
    document.getElementById('resultado').innerHTML="¡¡Resultado!!";
    capas=document.getElementsByTagName("article");
   
    for(var i=0; i<capas.length;i++){
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById('temas').value;
    document.getElementById(articulo).style.display="block";
}


//creación de funciones anónimas

var tema = function(nomFoto){
    document.getElementById("foto").src = "img/"+nomFoto+".png"
}
