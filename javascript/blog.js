function sumar(){
    let num1=2;
    let num2=4;
    sume=num1+num2;
    return sume;
}
resultado=sumar();
console.log(resultado);
console.log(sumar());

let usuarioNombre = prompt("¿Cual es tu nombre?");

function saludar(){
    document.write('Bienvenidos ' + usuarioNombre);
}
function felicitar() {
    document.write ('¡Felicidades! Has completado el proceso \u2764️');
}

 console.log("Bienvenido " + usuarioNombre);
 document.write("Bienvenido " + usuarioNombre);


 let edad = prompt("¿Cuál es tu edad?");
     edad = parseInt(edad);
    if (edad >= 18) {
        alert("Acceso permitido. ¡Bienvenido!");
    } else {
        alert("Lo siento, no se permite el acceso a menores de 18 años."); 
        edad = prompt("¿Cuál es tu edad?");    
    } 


