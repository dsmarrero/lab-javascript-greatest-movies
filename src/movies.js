// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
const allDirectors = moviesArray.map((movie)=>{
    return movie.director;
});
return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//tenemos que extraer de moviesArray todas las pelis que contengan Drama en genre y sean Steven Spielberg en director.
function howManyMovies(moviesArray){
const pelis = moviesArray.filter((movie)=>{
return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
});
return pelis.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//tenemos que sumar todos los scores de todos los elementos, luego dividirlo entre el número de elementos (el length del array) y luego redondearlo a 2 decimales.
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) return 0; //si no hay pelis, dame 0
const suma = moviesArray.reduce((acc, movie)=>{
 if (movie.score) return acc+movie.score; //si hay pelis con score, ve sumándolas
     else return acc; //si no hay pelis con score, dame el acc, que es 0 porque se lo pongo ahora
},0);
return Number((suma/moviesArray.length).toFixed(2)); //Number (().toFixed(n)) redondea el resultado hasta n decimales
}

// Iteration 4: Drama movies - Get the average of Drama Movies
//tenemos que filtrar todas las pelis de moviesArray que genre === "Drama" y luego hacer lo mismo que all scores average
function dramaMoviesScore(moviesArray) {
const dramas = moviesArray.filter((movie)=>{
return movie.genre.includes("Drama");}); //todas las pelis de Drama están en el array dramas

if (dramas.length === 0) return 0; //si no hay pelis de drama, dame 0
else {
const suma = dramas.reduce((acc,movie)=>{
if (movie.score) return acc+movie.score; //si hay pelis de drama con score, ve sumándolas
else return acc; //si no hay pelis de drama con score, dame el acc, que es 0 porque se lo pongo ahora
},0);    
return Number((suma/dramas.length).toFixed(2)); //Number (().toFixed(n)) redondea el resultado hasta n decimales
}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//tengo que ordenar todas las pelis por Year, empezando por el menor
function orderByYear(moviesArray) {
//tengo que hacer una copia del moviesArray porque .sort destruye el array original
    const copia = moviesArray.slice();
//tengo que ordenar los años de las pelis
copia.sort((a,b)=>{
    //comparamos si tienen el mismo año para ordenar por título
    if(a.year === b.year) return a.title.localeCompare(b.title); //si tienen el mismo año, usamos localeCompare con los títulos
    return a.year-b.year; //si es negativo, coloca el elemento antes que el resto; si es positivo, lo coloca después

});

return copia;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

const copia = moviesArray.slice(); //copio el array original en el array copia
//tengo que ordenar los títulos por orden alfabético, se hace con localeCompare
copia.sort((a,b)=>{
return a.title.localeCompare(b.title); //me devuelve todas las pelis ordenadas por título y lo almacena en el array copia
});
const titulos = copia.map(movie=>movie.title); //extraigo title de cada objeto movie del array copia y lo meto todo en el array tituls

const seleccion = titulos.slice(0,20); //corto el array titulos, me quedo con los 20 primeros puestos y lo guardo en el array seleccion
return seleccion; //devuelvo el array seleccion
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}