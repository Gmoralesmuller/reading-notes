let usuarioNombre = prompt("¿Cual es tu nombre?");
 console.log("Bienvenido " + usuarioNombre);
 document.write("Bienvenido " + usuarioNombre);

let edad = prompt("¿Cuál es tu edad?");
 if (edad >= 18) {
    alert("Acceso permitido. Bienvenido.");
}  else {
    alert("Lo siento, no se permite el acceso a menores de 18 años.");
    document.write("<p>Lo siento, no se permite el acceso a menores de 18 años.</p>");}