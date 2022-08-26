//Declarando la función
function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz) {
    let datosAprendiz={
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
    clasificarAprendiz(datosAprendiz)
}


//Llamando la función
crearAprendiz('Mateo','Tierra',19,1.66, function(aprendiz){
    if(aprendiz.edad <= 15){
        console.log("Usted se va para la clase de Sable de Luz")
    }else{
        console.log("Usted se va para la clase de la fuerza")
    }
})