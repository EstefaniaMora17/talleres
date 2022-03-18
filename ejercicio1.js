//funcion Principal
function raiz(x1,x2,y1,y2)
{
    let resultado = (Math.pow((x1- x2), 2 ) +Math.pow((y2 - y1), 2));

    return resultado
}
let result = raiz(5,9,10,7)

console.log("la distancia es:  " + result)

//-------------------------------------------------------------//

//funcion flecha
let raizFlecha=(x1,x2,y1,y2) => (Math.pow((x1- x2), 2 ) +Math.pow((y2 - y1), 2));
let  resultado1= raizFlecha(19,4,6,10)
console.log("la distancia es " + resultado1)