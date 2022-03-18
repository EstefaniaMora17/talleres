//funcion tradicional
function pagoPersonal(navesVendidas)
{
   let pagoxnave = 1500000 * navesVendidas;
   let descuentocomi = pagoxnave * 0.05;
   let pagocomi = pagoxnave - descuentocomi;
   let salarioMensual = 3500000 + pagocomi;
    return salarioMensual;
}
let resultadoMensual = pagoPersonal(10);

console.log( "salario mensual es "+ resultadoMensual);
//-------------------------------------------------------------//

//funcion flecha

let pagoPersonaFlecha = (navesVendidas) => {
    let pagoxnave = 1500000 * navesVendidas;
   let descuentocomi = pagoxnave * 0.05;
   let pagocomi = pagoxnave - descuentocomi;
   let salarioMensual = 3500000 + pagocomi;
    return salarioMensual;
}
// (1500000 * navesVendidas* 0.05 + 3500000 )
// let resultadoMensual2 = pagoPersona(1)
console.log( "salario mensual desde la funcion flecha es "+ resultadoMensual);
