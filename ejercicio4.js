
//funcion tradiconal
function filtrar1() {
    let sables = [
        {
            color: "rojo",
            energia: 20,
            portador: "Juan"
        },

        {
            color: "azul",
            energia: 50,
            portador: "Obi wan"
        },

        {
            color: "nego",
            energia: 22,
            portador: "nia"
        },

        {
            color: "Verde",
            energia: 10,
            portador: "Miguel"
        },

        {
            color: "Azul",
            energia: 50,
            portador: "jona"
        },

        {
            color: "Verde-Limon",
            energia: 35,
            portador: "juan"
        },

        {
            color: "negro",
            energia: 25,
            portador: "luis"
        },

        {
            color: "Blanco",
            energia: 60,
            portador: "margo"
        },

        {
            color: "Negro",
            energia: 21,
            portador: "niño"
        },

        {
            color: "Lila",
            energia: 80,
            portador: "toby"
        },

        {
            color: "Naranja",
            energia: 150,
            portador: "Dulce"
        },

        {
            color: "Jade",
            energia: 120,
            portador: "Ana"
        },

        {
            color: "Gris",
            energia: 8,
            portador: "Isa"
        },

        {
            color: "Morado",
            energia: 75,
            portador: "Jessica"
        },

        {
            color: "Verde-marino",
            energia: 72,
            portador: "Arley"
        },

        {
            color: "Cafe",
            energia: 20,
            portador: "Alejo"
        },

        {
            color: "Fucsia",
            energia: 100,
            portador: "Daniela"
        },

        {
            color: "Lila",
            energia: 45,
            portador: "Mateo"
        },

        {
            color: "Rosa",
            energia: 30,
            portador: "Maria"
        },

        {
            color: "Plateado",
            energia: 50,
            portador: "Mariana"
        }

    ]
    let filtarDatos = sables.filter(sable => (sable.energia < 20));
    let suma = filtarDatos.length;

    console.log(filtarDatos)
    console.log(suma)
}
filtrar1()

//flecha flecha
let filtrarDatos2 = sables.filter(sable => (sable.energia < 20));
    let suma2 = filtrarDatos2.length;
console.log(suma2)
console.log(filtrarDatos2);


