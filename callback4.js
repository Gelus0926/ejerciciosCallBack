//Funcion que reciba un arreglo de 5 números 
//despues de 5 segundos entrega la suma de los 5 números


//Declarar la función principal
function principal(numeros, funcionsecundaria) {
    console.log(numeros)

    setTimeout(function(){
        let suma=0
        numeros.forEach(function (numero) {
            suma=suma+numero
        })
        funcionsecundaria(suma)
    },5000)  
}

//Llamar a la función principal
let arreglo=[1,2,3,4,5]
principal(arreglo, function(suma){
    console.log("La suma fue: "+suma)
})


//