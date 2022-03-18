function datosPadawan(nombre,edad,planeta, estructura,callback)
{
    setTimeout(function(){

        let dato =
        {
            nombre : nombre,
            edad : edad,
            planeta : planeta,
            estructura : estructura
        }
        callback(dato);
    },1000);

}
datosPadawan("toby",19,"marte","espadas",function(objeto){
    if(objeto.edad < 15)
    {
        console.log("manejo de la fierza");
    }
    else 
    {
        console.log("manejo de luz");
    }
    
})