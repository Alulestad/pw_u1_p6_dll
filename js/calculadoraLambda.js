const sumar =(idNum1,idNum2) => {
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const sumar1 =() => {}

const restar =(idNum1,idNum2) => {
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}


const dividir =(idNum1,idNum2) => {
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const multiplicar =(idNum1,idNum2) => {
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

function agregarElemento(){
    document.getElementById('idDivision').innerHTML=
    "<button> NUEVO </button>";
    /* innerHTML es para elementos que aceptan en su contenido otros elementos */
}

function quitarElemento(){
    document.getElementById('idDivision').innerHTML=
    "";
    /* innerHTML es para elementos que aceptan en su contenido otros elementos */
}

function conceptosJS(){
    /* Tipos de datos JS */
    /* let: es un tipo de datos el cual no es modificable
    var: 
    const: 
    */
    const IVA=15; /* MAYUSCULAS */
    console.log(IVA);
/*     IVA=15;
    console.log(IVA); */ /* ESTO NO SE PUEDE HACER */

    var nombre="Daniel"; /* Está en desuso porque el let es mas eficiente en memoria */
    console.log(nombre);
    nombre ="Barnardo"
    console.log("Nuevo nombre: "+nombre);
    
    let apellido="Llumiquinga";
    console.log(apellido);

    apellido="Molina";
    console.log(apellido);


}