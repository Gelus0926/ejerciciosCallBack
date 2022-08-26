//Función principal reciba dos numeros y los sume
//Declarando la función sumar 
function suma(num1,num2,callback){
    let suma  = num1 + num2
    callback(suma)
}

//Llamando la funcion sumar 
suma(8, 4, function(parametro){
    console.log("La suma es: "+parametro)
})