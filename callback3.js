//Función principal slauda a una persona
//CallBack pregunta si la persona ya desayuno

//Declarando a principal
function principal(nombre,funcionsecundaria){
    console.log("Buenos dias "+nombre)

    funcionsecundaria()

    
}

//Llamando a principal
principal("Mateo", function(){
    console.log("¿Ya desayuno?")
});