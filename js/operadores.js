let myName = prompt ("Ingrese nombre");
let surname = prompt("Ingrese apellido")

//Operador and para comparar

if((myName!="")&&(surname!="")){
    alert("Hola señor: "+ myName + "" + surname);
}
else {
    alert("Por favor ingresa los datos")
}

let nombreIngresado = prompt("Ingrese nombre solamente")

if( (nombreIngresado!="")&&((nombreIngresado=="ALE")||(nombreIngresado=="ale"))){
    alert("Hola Ale")
}