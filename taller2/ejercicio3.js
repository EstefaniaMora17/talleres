function entrenamiento(dietas,callback){
    setTimeout(function(){ 

        let tipos = dietas.filter(function(dieta){

            return (dieta.tipo == "vegetal" && dieta.energia > 200);

        })

        callback(tipos);

    }, 5000)
}

let alimentos = [

    {
        nombre : "pez",
        tipo : "animal",
        energia : 220
    },

    {
        nombre : "vaca",
        tipo : "animal",
        energia : 550
    },

    {
        nombre : "fresa",
        tipo : "vegetal",
        energia : 120
    },

    {
        nombre : "cerdo",
        tipo : "animal",
        energia : 300
    },

    {
        nombre : "manzana",
        tipo : "vegetal",
        energia : 200
    },

    {
        nombre : "moscas",
        tipo : "insecto",
        energia : 200
    },

    {
        nombre : "huevo",
        tipo : "animal",
        energia : 400
    },

    {
        nombre : "grillos",
        tipo : "insecto",
        energia : 250
    },

    {
        nombre : "cangrejo",
        tipo : "animal",
        energia : 350
    },

    {
        nombre : "zanahoria",
        tipo : "vegetal",
        energia : 150
    },

]

entrenamiento(alimentos,function (tipos){

    let resultado = 0;

    tipos.forEach(function(tipo) {
        resultado += tipo.energia; 
       

    });
    console.log(tipos);
});