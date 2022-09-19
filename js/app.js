let unNumero=5;

if (unNumero>10) {
        alert("Numero alto")
    }else{
        alert("Numero menor a 10")
    }


let nombre = prompt("Ingrese su nombre");
    if (nombre == ""){
        alert("Por favor ingresa un nombre");
    } else {
        alert("Hola señor " + nombre);
    }
    

let myAge = parseInt(prompt("Ingrese su edad"))

if (myAge < 18) {
    alert("Eres menor de edad")
} else if(myAge < 30){
    alert("Eres mayor de edad")
} else if(myAge > 60){
    alert("Quedate en casa")
} else {
    alert("listo pasa, tienes " + myAge)
}