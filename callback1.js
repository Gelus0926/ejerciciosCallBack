//Declarando a saludar
function saludar(){
    setTimeout(function(){
        console.log("Wuenos dias")
        despedir() //Llamando a despedir   
    },1000)
}

function despedir  () { //Declarando a despedir
    console.log("Byeeeeeeee")
}

saludar();  // Llamando a saludar
