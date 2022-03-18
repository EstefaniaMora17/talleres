function filtarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos)
{
    //un arreglo empieza con una variabke
    let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
    //metodos de array
    //la funcion anonima siempre tiene un auxilia
    let planosFiltrados = planos.filter(function(plano){
        return plano <= 10

    });

    buscarPlanos(planosFiltrados);
}
//llamando la funcion principal
                                        //estanmos declaranos una 
filtarPlanos(100,20,15,16,40,10,5,1,13,22,function(planos){
    if(planos.length > 0){
        console.log("ARRANCAR NAVE")
    
    }
    else{
        console.log("SIGA BUSCANDO")
    }
});