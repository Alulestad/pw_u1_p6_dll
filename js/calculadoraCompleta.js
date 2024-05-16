
var num1 = "0";
var num2 = "0";
var operador = "";




function solucionar() {
    resultado = "0"

    num2 = document.getElementById("idpantalla").textContent;
    console.log("num2: " + num2);

    switch (operador) {
        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "x":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            console.log("Operador no soportado");
    }


    document.getElementById("idpantalla").innerText = resultado;

}


function agregarNumeroPantalla(numero) {
    console.log("Numero ingresado: " + numero);
    if (document.getElementById("idpantalla").textContent === '0') {
        document.getElementById("idpantalla").innerText = numero;
    } else {
        stringNuevo = document.getElementById("idpantalla").textContent + numero;
        document.getElementById("idpantalla").innerText = stringNuevo;
    }
    console.log(document.getElementById("idpantalla").textContent);

}

function eliminarNumeroPantalla() {

    stringAnterior = document.getElementById("idpantalla").textContent;
    console.log("stringAnterior: " + stringAnterior);
    console.log("stringAnterior.length: " + stringAnterior.length);
    if (stringAnterior.length == 1) {
        document.getElementById("idpantalla").innerText = "0";
        return;
    } else {
        document.getElementById("idpantalla").innerText = stringAnterior.slice(0, -1);
    }

}

function limpiarPantalla() {
    document.getElementById("idpantalla").innerText = "0";
}

function resetVariables() {
    window.num1 = "0";
    window.num2 = "0";
    window.operador = "";

}

function ponerOperador(operador) {
    num1 = document.getElementById("idpantalla").textContent;
    console.log("num1: " + num1);
    window.operador = operador;
    console.log("operador: " + window.operador);
    limpiarPantalla()

}






