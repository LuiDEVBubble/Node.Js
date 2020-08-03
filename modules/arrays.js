let city0 = "atlanta";
let city1 = "baltimore";
let city2 = "chicago";
let city3 = "Denver";
let city4 = "Los Angeles";
let city5 = "Seattle";

//console.log("Welcome to " + city4);

//este es mi array
let cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

//console.log("Welcomg to " + cities[2]);



printArray = (arrayPets) =>
{
    for (let i = 0; i < arrayPets.length; i++)
    {
        process.stdout.write(arrayPets[i] + " ");
        
    }
    console.log("\n");
}

let pets = []; //declare un empty array

pets[0] = "Dog";
pets[1] = "Cat"; 
pets[2] = "Bird"; // Y asi es como le agregas elementos a un array

pets[3] = "Lizard";
pets[4] = "Fish"; //Le puedo seguir agregando values a un array. Es como si fuera un vector.


printArray(pets); // Yo cree esta funcion para que salieran los elementos del array.

pets.pop();// este "pop()" hace que quitemos el ultimo elemento del array
printArray(pets);

pets.push("Turtle" , "Snake", "Elephant"); // "push()" le agrega elementos al fin del array
printArray(pets);

pets.shift(); //este metodo, "shift()" le quita el primer elemento al array.
printArray(pets);

pets.unshift("Moneky", "Rabbit"); // este metodo, "unshift()", le agrega elementos al comienzo del array
printArray(pets);

pets.splice(3,0, "Tiger"); // el primer digito simoliza por donde quieres empezar a meter or eliminar elementos
//el segundo digito en la parentisis simboliza la cantidad de numeros que quieres eliminar.
// Los/El string que sigue ese lo que vas a agregar
printArray(pets);

pets.splice(1, 0, "Ape", "Chimpanze");
printArray(pets);

pets.splice(7,2); // Tampoco le tienes que agregar nada al array. Si quieres, puedes usarlo para eliminar ciertos 
//elementos del array.
printArray(pets);


let humanLikeAnimals = pets.slice(0,3); //El primer digito representa donde comenzaremos a copiar y el segundo elemento 
//representa cuantos numeros copiariamos depues (aunque tambien contamos al numero en donde comenzamos).
// Aqui yo estoy usando el metodo/funcion "slice()" para copiar ciertos
//elementos del array "pets" al array "humanLikeAnimals" sin quitarle ninguno de sus elementos al array "pets"
//
//Si nosotros queremos quitarle elementos al array "pets", entonces usariamos "splice()" 

printArray(pets);
printArray(humanLikeAnimals);





