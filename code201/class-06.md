# Lectura 06: Descripción del problema, Objetos y el DOM

## Conceptos básicos de los objetos Javascript

### 1. ¿Cómo le describirías un objeto a un amigo sin conocimiento técnico con el que creciste?

De la siguiente manera: Imagina que quieres describir a mi gata. Dirías cosas como: "Mi gata se llama Cleo, tiene 2 años, es una calicó y tiene muchos bigotes". En programación, un objeto es como una forma de describir algo. Solo que en lugar de ser mi gato puede ser cualquier cosa; por ejemplo: una persona, un perro, una casa, etc. A vcada característica de ese algo (por ejemplo: nombre, edad, color) se le llama "propiedad". Por lo tanto, un objeto es como una caja que guarda todas las propiedades de algo.

### 2. ¿Cuáles son algunas de las ventajas de crear objetos literales?

Algunas de las ventajas son las siguientes:

* Es flexible; es decir, se puede agregar o quitar propiedades a un objeto en cualquier momento.
* La sintaxis es sencilla y fácil de entender.
* Nos permite agrupar información relacionada en un solo lugar.
* Es reutilizable; ya que se puede crear muchos objetos a partir de un mismo modelo.

### 3. ¿En qué se diferencian los objetos de los arrays?

Los objetos y los arrays son formas de almacenar datos; sin embargo tienen diferentes estructuras.

* Objetos: Almacenan datos en pares "clave-valor". Cada propiedad tiene un nombre único(palabra clave) y un valor asociado.
* Arrays: Almacenan una colección ordenada de valores. Cada valor tiene un índice numñetico que indica su posición en el array.

### 4. Da un ejemplo acerca de los momentos en los que necesitarías utilizar bracket notation para acceder a la propiedad de un objeto en vez de dot notation.

Se utiliza la notación de corchetes o bracket notation cuando el nombre de la propiedad es:

* Dinámico: Por ejemplo: si se quiere acceder a una propiedad cuyo nombre está almacenado en una variable.
* Contiene caracteres especiales: Como espacios o guiones.
* Es una oalabra reservada de Js: Por ejemplo for o function.

### 5. Evalúa el siguiente código. ¿A qué se refiere el término this y cuál es la ventaja de utilizarlo?

```javascript
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```

En primer lugar el código usa el método "humanAge"; el cual, calcula la edad del perro en años humanos y la imprime en la consola. Al usar "this.name" y "this.age", accedemos a las propiedades name y age del objeto dog. Por lo tanto, dentro de la función this se refiere al objeto que invocó esa función. En este caso this se refiere al objeto "dog". La ventaja es que nos permite acceder a las propiedades del objeto desde dentro de sus métodos sin tener que pasar el objeto como argumento. Esto hace que el código sea más limpio y conciso.

## Introducción al Dom

### 1. ¿Qué es el DOM?

El DOM es una interfaz de programación que representa la estructura de un documento HTML como una jerarquía de objetos. Cada elemento HTML se convierte en un objeto en el DOM, y estos objetos tienen propiedades y métodos que puedes utilizar para manipularlos. 

### 2. Describe brevemente la relación entre el DOM y JavaScript.

Javascript es el lenguaje de programación que nos permite interactuar con el DOM. Gracias a JS podemos seleecionar cualquier elemento de la página para obtener o modificar su contenido, estilo o comportamiento. Además, permite cambiar el texto dentro de un elemento, agregar nuevos elementos o eliminar los existentes. También, puede camnbiar el estilo de los elementos y agregar eventos (como por ejemplo: Hacer que los elementos respondan a acciones de los usuarios como clics, desplazamientos o cambios de tamaño de la ventana).
En conclusión, el DOM es la estructura que representa la página web como un árbol de objetos; mientras que, JS es la herramienta que permite manipular esa estructura y hacer que la página sea dinámica e interactiva. 

### **Fuentes Consultadas:**

1. [Conceptos Básicos de los objetos de JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics)
2. [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
3. *Este documento fue realizado con el apoyo de Gemini*