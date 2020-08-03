let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

printRapNames = (arry) =>
{
    let arryLength = arry.length;

    for (let i = 0; i < arryLength; i++)
    {
        //process.stdout.write(arry[i] + " ");
        console.log(arry[i]);
       

    }
    console.log("\n");
}

let fullNames = [];

for (let i = 0; i < firstNames.length; i++)
{
    for (let j = 0; j < lastNames.length; j++ )
    {
        fullNames.push(firstNames[i] + lastNames[j]);
       
    }

}



printRapNames(fullNames); 

