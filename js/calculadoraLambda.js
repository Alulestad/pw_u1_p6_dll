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
    nombre ="Barnardo";
    console.log("Nuevo nombre: "+nombre);
    
    let apellido="Llumiquinga";
    console.log(apellido);

    apellido="Molina";
    console.log(apellido);


    //declaracino de arreglos
    const diasSemana=["Lunes", "Martes","Miercoles","Jueves", "Viernes"]; //para arreglos
    //si quiero declarar un arreglo vacion tengo que poner a=[]
    console.log(diasSemana);
    console.log(diasSemana[0]); //desde la 0 a la n
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]); //undefined 

    diasSemana[6]="sabado";
    console.log(diasSemana[5]);
    console.log(diasSemana[6]);

    diasSemana.push("domingo");
    console.log(diasSemana[7]);

    diasSemana.unshift("días semana: ");
    console.log(diasSemana);

    const numerosPares=[2,4,6];
    console.log(numerosPares);

    const numerosImpares=[1,3,5,undefined,9];

    const numerosCompletos=numerosPares.concat(numerosImpares);
    console.log(numerosCompletos);

    for(const dia of diasSemana){
        console.log(dia);
        if(dia === "Viernes"){
            console.log("Por fin llegó en fín de semana");

        }

    }

    if(diasSemana[7]===undefined){
        console.log('No tiene valor');
    }else{
        console.log('Si tiene valor');
    }

    //Manejo de objetos en JS

    //Manejo de JSON
    const estudiante = {
        nombre:"Daniel",
        apellido:"Llumiquinga",
        edad: 25,
        genero: "M",
        ciudadNacimiento: "Quito"
    }//ESTO ES UN OBJETO

    console.log(estudiante);
    console.log(estudiante.apellido);
    estudiante.nombre="Bernardo";
    console.log(estudiante);
    estudiante.semeste="8";
    console.log(estudiante);

    const profesor = {
        nombre:"Edison",
        apellido:"Cayambe",
        edad: 34,
        genero: "M",
        ciudadNacimiento: "Quito",
        direccion:{
            callePrincipal:"Av. América",
            calleSecundaria:"La Gasca",
            numeracion:"Oe3-59",
            barrio:"La Gasca"
        }
    }

    console.log(profesor);
    console.log(profesor.direccion.barrio);

    //Arreglos de objetos
    const estu1={
        nombre:"Daniel",
        apellido:"Llumiquinga"

    }
    const estu2={
        nombre:"Bernardo",
        apellido:"Molina"
        
    }
    const estu3={
        nombre:"Pedro",
        apellido:"Fuentes"
        
    }
    const estu4={
        nombre:"Luis",
        apellido:"Lechuga"
        
    }

    const estudiantes=[estu1,estu2,estu3,estu4];
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);

    estudiantes[1].apellido="Otro apellido";
    console.log(estudiantes[1].apellido);


    const profesores=[{
        nombre:"Daniel",
        edad:25
    },
    {
        nombre:"Bernardo",
        edad:26
    }];
    console.table(profesores);

    var prof=profesores.pop();
    console.log(prof);
    console.table(profesores);
    


    //desestructuracion Arreglos (desarmado)
    const diasSemana2=["Lunes", "Martes","Miercoles","Jueves", "Viernes"];
    const [d1,d2,d3,d4]=diasSemana2; //se puede poner  const [d1,d2,d3]=diasSemana2

    console.log(d2); 


    const [ds1,ds2,ds3,ds4,ds5]=["Lunes-1", "Martes-2","Miercoles-3","Jueves-4", "Viernes-5"];
    console.log(ds2);
    console.log(ds5);

    //desestructuracion de objetos

    const vehiculo={
        marca:"Toyota",
        modelo:"Prius",
        anio:2018
    }

    const {marca,anio}=vehiculo;
    //se debe poner estricitamente los nombre de los atributos del objeto

    console.log(marca);
    console.log(anio);
   

    const {modelo}={
        marca:"Ford",
        modelo:"Edge",
        anio:2020
    }
    console.log(modelo);

    //desestructuracion de un objeto con atributo completo
    const celular={
        marcaC:"Samsung",
        modeloC:"Galaxy",
        anioC:2019,
        caracteristicas:{
            pantalla:"6.2",
            procesador:"Snapdragon 855",
            almacenamiento:"128GB"
        }
    }

    const {anioC,caracteristicas}=celular;
    console.log(anioC);
    console.log(caracteristicas);

    const {pantalla,procesador}=caracteristicas;
    console.log(pantalla);
    console.log(procesador);

    const {modeloC,marcaC,caracteristicas:{almacenamiento}}=celular;
    console.log(modeloC);
    console.log(marcaC);
    console.log(almacenamiento);


    
}





