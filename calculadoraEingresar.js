
const genero = prompt("Decime tu genero:");

const anioNaciomiento = prompt("Decime tu año de nacimiento");
const edad = 2023 - anioNaciomiento;

let mayorEdad =false;
if (edad >= 18) {
    mayorEdad = true;
} else {
    mayorEdad = false;
}


if (mayorEdad) {
    // Es mayor edad
    if(genero == "F" || genero == "Femenino" || genero == "femenino" || genero == "f" || genero == "F" || genero == "mujer" || genero == "Mujer") {
      alert("Bienvenida, podes ingresar a la calculadora.");
    } else {
      alert("Bienvenido, podes ingresar a la calculadora.");
    }
  

  } else {
    // Es menor de edad
    alert("Sos menor, no podes ingresar a la calculadora.");
  }
  


  
//Operacion sumar
function sumar (valor1, valor2){
    const resultado= valor1 + valor2;
    return resultado;
}

//Operacion restar
function restar (valor1, valor2){
    const resultado= valor1 - valor2;
    return resultado;
}

//Operacion multiplicar
function multiplicar (valor1, valor2){
    const resultado= valor1 * valor2;
    return resultado;
}

//Operacion dividir
function dividir (valor1, valor2){
    const resultado= valor1 / valor2;
    return resultado;
}

function calculadora () {
    const valor1 = parseInt (prompt ("Ingrese el primer valor: "));
    const valor2 = parseInt (prompt ("Ingrese el segundo valor: "));
    const operacion = prompt ("Que operacion queres hacer? + - * /");
    let resultado;

    switch (operacion) {
        case "+":
        resultado= sumar
        alert ("El resultado de la operacion es " + sumar (valor1, valor2));
        break;

        case "-":
        resultado= restar
        alert ("El resultado de la resta es " + restar (valor1, valor2));
        break;

        case "*":
        resultado= multiplicar
        alert ("El resultado de la multiplicacion es " + multiplicar (valor1, valor2));
        break;
        
        case "/":
        resultado= dividir
        alert ("El resultado de la division es " + dividir (valor1, valor2));
        break;

        default:
        alert ("La operacion es invalida");

    }
}