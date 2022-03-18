//funcion Principal

function temperaturaMedia(tempMaxima,tempMinina)
{
    let temperatura = (tempMaxima + tempMinina) / 2;

    return temperatura;
}
let resultadoDia = temperaturaMedia(30,10)

console.log("el resultado de la tempertaura media de cada dies " + resultadoDia);

//----------------------------------

//funcion flecha

let temperaturaMedia2 = (tempMaxima,tempMinina) => ((tempMinina + tempMaxima)/ 2);
let resultado = temperaturaMedia2(30,10);
 
console.log("el reusltado de la temperatura media es " + resultado)
