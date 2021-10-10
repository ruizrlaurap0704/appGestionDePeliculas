const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Laura Paola Ruiz Rodriguez";
const tema = "Tema 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const lectorEscritor = require("./jsonHelper");

let arrayPeliculas = lectorEscritor.leerJson("peliculas");

// A
let gestionDePeliculas = {
    // B
    peliculas:arrayPeliculas,
    // C
    listarPeliculas:
    peliculas => peliculas.forEach(pelicula=>console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración: ${pelicula.duracion} minutos, ${pelicula.genero}, (${pelicula.calificacionIMDB}/10 en IMDB)`)),  
    // D
    buscarPorId: id => 
    {return gestionDePeliculas.peliculas.find(pelicula=>pelicula.id==id)},
    // E
    peliculasPorGenero: 
    genero => {return gestionDePeliculas.peliculas.filter(pelicula => pelicula.genero == genero)},
    // F
    filtrarPorCalificacion: (minima,maxima) => {
            let condiciones = gestionDePeliculas.peliculas.filter(pelicula => {pelicula.calificacionIMDB >= minima && pelicula.calificacionIMDB <= maxima})
            // let condicion2 = condicion1.filter(pelicula => pelicula.calificacionIMDB <= maxima)
            // if (condicion2 = true) {
            return condiciones
            // } else {
            //     let vacio = []
            //     return vacio
            // }
        },
    // G
    ordenarPorDuracion:() => 
    {return gestionDePeliculas.peliculas.sort((peli1,peli2)=> peli2.duracion-peli1.duracion)},
    // H
    duracionPromedio: () => {
        let duracionTotal = gestionDePeliculas.peliculas.reduce((acumulador,pelicula)=> acumulador += pelicula.duracion,0);
        return `El promedio de duración de las películas es de: ${(duracionTotal/gestionDePeliculas.peliculas.length).toFixed(2)}`},
    // I   
    modificarGeneroPorId: (id,genero) => {
        let peliculaUbicada = gestionDePeliculas.buscarPorId(id)
        if (peliculaUbicada) {
            peliculaUbicada.genero = genero
            lectorEscritor.escribirJson('peliculas',gestionDePeliculas.peliculas)
        }
        return peliculaUbicada;}
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(arrayPeliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
let peliEncontradaId = gestionDePeliculas.buscarPorId(1);
gestionDePeliculas.listarPeliculas([peliEncontradaId]);
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
let peliEncontradaGenero = gestionDePeliculas.peliculasPorGenero("Drama");
gestionDePeliculas.listarPeliculas(peliEncontradaGenero);
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
let pelisClasificadas= gestionDePeliculas.filtrarPorCalificacion(6.4,7.1);
gestionDePeliculas.listarPeliculas(pelisClasificadas);
console.log(o);

console.log(v, oo + " .G. Ordenar");
let pelisOrdenadas = gestionDePeliculas.ordenarPorDuracion();
gestionDePeliculas.listarPeliculas(pelisOrdenadas);
console.log(o);

console.log(v, oo + " .H. Duracion");
gestionDePeliculas.duracionPromedio();
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
let modificada = gestionDePeliculas.modificarGeneroPorId (1,"Drama");
if (modificada == ''){
    console.log('No se encontró el ID')
} else {
    gestionDePeliculas.listarPeliculas([modificada]);
}
console.log(o);
