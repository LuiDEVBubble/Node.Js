let cityToCheck = "Tucson"; // Este es la ciudad del usuario.

let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]; // este es mi array de ciudades.

let flagVar = false; // Este es nuestro "flag" variable que tiene el valor de un boolean. Este flag variable nos 
//ayuda saber si nuestro codigo pudo encontrar la ciudad que buscaba. 

let numElements = cleanestCities.length; // Algunas vezes no vamos a saber cuantos elementos tiene el array. Por eso 
//es bien importante tener un variable que guarde la cantidad de elementos de nuestro array.

for (let i = 0; i < numElements; i ++)
{
    if (cityToCheck === cleanestCities[i])
    {
        flagVar = true;
        console.log("It's one of the cleanest cities");
        break; // en este for loop, es importante que le agreguemos el <<break>> porque si encontramos lo que
        //estavamos buscando, no hay necesidad de que el for loop continue. 
    }
}

//en este if statement, yo uso el flag variable para ver si alguna vez en el for loop encontramos que mi ciudad
// era unas de las ciudades limpias de mi array.
if (flagVar === false) 
    console.log("Your city was not one of the clean ones.");