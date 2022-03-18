//Funcion flecha 
let recto = (codigo) => {
    let nombre = codigo.split(":");
    return ("El nombre es: "+ nombre[1]);
}

console.log(recto("ARQ2555: Sara Bel-sun"));
console.log(recto("ARQ2556: Nodin Chavdri"));
console.log(recto("ARQ2557: Finn"));

//funcicon tradicional 
function recto1 (codigo)
{
    let nombre = codigo.split(":");
    return ("El nombre es: "+ nombre[1]);

}
console.log(recto("ARQ2555: Sara Bel-sun"));
console.log(recto("ARQ2556: Nodin Chavdri"));
console.log(recto("ARQ2557: Finn"));