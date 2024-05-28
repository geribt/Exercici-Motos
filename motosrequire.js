const motos = require ('./motosarray.json');

function ordenarPreu(a,b){
    if (a.eur>b.eur) {return 1;}
    else if (a.eur<b.eur){return -1;}
    else return 0;
}

// Ordenar motos per preu i mostrar el mes barato i el mes car
let motosPerPreu = [...motos];
motosPerPreu.sort(ordenarPreu);

console.log("La moto mes barata: ",motosPerPreu[0],"La moto mes cara: ",motosPerPreu[motosPerPreu.length-1]);
console.log("-------------------------------------------------------------");

// Ordenar motos per km i mostrar la quantitat de motos amb menys de 30.000 km de la marca HONDA
let motosPerKm = [...motos];
let motoskm = motosPerKm.filter(el => el.km<30000 && el.marca === "HONDA");
console.log("Quantitat de motos amb menys de 30.000km de la marca HONDA: "+motoskm.length);
console.log("-------------------------------------------------------------");

// Motos amb menys de 30.000km i mes de 240cc
let motosKmCC = motosPerKm.filter(el => el.km<30000 && el.cc>240);
console.log("Quantitat de motos amb menys de 30.000km amb mes de 240cc: "+motosKmCC.length);
console.log("-------------------------------------------------------------");

//La moto amb menys de 25.000km, mes de 350cc de cilindrada i que costa entre 1.800 i 2.200 eur
let motosFinal = motosPerKm.filter(el => el.km<25000 && el.cc>350 && el.eur>1800 && el.eur<2200);
console.log("Moto amb menys de 25.000km, mes de 350cc de cilindrada i que costa entre 1.800 i 2.200 eur",motosFinal);
console.log("-------------------------------------------------------------");

// Llista de marques de motos
const marcasSet = new Set(motos.map(moto => moto.marca));

// Inicializar un objeto para contar las marcas
const contadorMarcas = {};

// Contar el número de motos por marca sin repetir en el bucle
motos.forEach(moto => {
    if (!contadorMarcas[moto.marca]) {
        contadorMarcas[moto.marca] = 1;
    } else {
        contadorMarcas[moto.marca]++;
    }
});

// Convertir el Set de marcas a un array con el conteo
const resultado = Array.from(marcasSet).map(marca => ({
    marca: marca,
    cantidad: contadorMarcas[marca]
}));

//console.log( "Llista de marques: ",conjunt);
console.log(resultado);
