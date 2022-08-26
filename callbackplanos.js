function filtarPlanos(planos, arrancarNave) {
    let filtro = planos.filter(function(plano){
        return plano > 0 & plano <=10   
    })

    arrancarNave(filtro)
}

let planos = [1,100,200,300,400,500]
filtarPlanos(planos, function(filtro){
    let cuenta = filtro.length 
    if(cuenta > 0){
        console.log("La nave a despegado")
    }else{
        console.log("Ve a buscar los planos")
    }
})