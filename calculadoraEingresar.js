//Operacion sumar
function sumar(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}

//Operacion restar
function restar(valor1, valor2) {
  const resultado = valor1 - valor2;
  return resultado;
}

//Operacion multiplicar
function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}

//Operacion dividir
function dividir(valor1, valor2) {
  const resultado = valor1 / valor2;
  return resultado;
}

const genero = prompt("Decime tu genero:");
let mayorEdad = false;

while (mayorEdad != true) {
  const anioNaciomiento = prompt("Decime tu año de nacimiento");
  const edad = 2023 - anioNaciomiento;

  if (edad >= 18) {
    mayorEdad = true;
  } else {
    mayorEdad = false;
    alert("Sos menor de edad");
  }
}

//Es mayor edad
if (
  genero == "F" ||
  genero == "Femenino" ||
  genero == "femenino" ||
  genero == "f" ||
  genero == "F" ||
  genero == "mujer" ||
  genero == "Mujer"
) {
  alert("Bienvenida, podes ingresar a la calculadora.");
} else {
  alert("Bienvenido, podes ingresar a la calculadora.");
}

function calculadora() {
  let operacion;

  while (operacion != "x" && operacion != "Salir") {
    operacion = prompt(
      "¿Qué operación querés hacer?\n+: Sumar\n-: Restar\n*: Multiplicar\n/: División\nx: Salir"
    );

    operacion = operacion.toLowerCase();
    let valor1;
    let valor2;

    switch (operacion) {
      case "+":
        valor1 = parseInt(prompt("Ingrese el primer valor: "));
        valor2 = parseInt(prompt("Ingrese el segundo valor: "));
        alert("El resultado de la operacion es " + sumar(valor1, valor2));
        break;

      case "-":
        valor1 = parseInt(prompt("Ingrese el primer valor: "));
        valor2 = parseInt(prompt("Ingrese el segundo valor: "));
        alert("El resultado de la resta es " + restar(valor1, valor2));
        break;

      case "*":
        valor1 = parseInt(prompt("Ingrese el primer valor: "));
        valor2 = parseInt(prompt("Ingrese el segundo valor: "));
        alert(
          "El resultado de la multiplicacion es " + multiplicar(valor1, valor2)
        );
        break;

      case "/":
        valor1 = parseInt(prompt("Ingrese el primer valor: "));
        valor2 = parseInt(prompt("Ingrese el segundo valor: "));
        alert("El resultado de la division es " + dividir(valor1, valor2));
        break;

      case "x":
        break;
      default:
        alert("La operacion es invalida");
    }
  }
}
