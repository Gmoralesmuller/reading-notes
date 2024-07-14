# Lectura 13

## Local Storage and How To Use It On Websites

### 1. ¿Por qué un desarrollador utilizaría el local storage para una aplicación web?

El almacenamiento local (localStorage) es una API del navegador que permite almacenar datos de forma persistente en el dispositivo del usuario. Los desarrolladores lo utilizan por diversas razones:

Con respecto a la experiencia del usuario:

* Guardar preferencias del usuario, como temas, idioma o diseño, para ofrecer una experiencia más personalizada en futuras visitas.
* Mantener datos de sesión, como el carrito de compras en una tienda online, sin necesidad de enviarlos al servidor en cada solicitud.
* Permitir que la aplicación funcione sin conexión a internet, almacenando datos localmente y sincronizándolos cuando la conexión esté disponible.

Con respecto al rendimiento:

* Al almacenar datos localmente, se reducen las solicitudes al servidor, lo que agiliza la carga de la página y mejora la experiencia del usuario.

Con respecto al almacenamiento de datos temporales:

* Guardar datos de formularios para que el usuario no tenga que volver a ingresarlos en caso de un error o interrupción.
* Almacenar el estado actual de una aplicación para que el usuario pueda volver a donde estaba en una visita posterior.

### 2. ¿Qué información no se puede guardar en el local storage?

El local storage tiene las siguientes limitaciones:

* Tamaño: Existe un límite en la cantidad de datos que se pueden almacenar, aunque este límite varía según el navegador.
* Los datos almacenados en el local storage no están encriptados y pueden ser accedidos por scripts que se ejecutan en la página. Por lo tanto, no es adecuado para almacenar información sensible como contraseñas.
* Los datos almacenados en el local storage persisten hasta que son eliminados manualmente o el usuario borra los datos de navegación de su navegador.

### 3. ¿Qué tipo de datos se pueden guardar en el local storage? ¿Cómo puedes convertirlo a ese tipo de archivo antes de guardarlo?

En el local storage se pueden almacenar datos en formato de cadena de texto (string). Esto significa que cualquier tipo de dato que quieras guardar debe ser convertido a una cadena antes de almacenarlo.

Tipos de datos que se pueden guardar:

1. Cadenas: Textos simples.
2. Números: Convertidos a cadenas usando ```toString()```.
3. Booleanos: Convertidos a cadenas usando ```toString()```.
4. Objetos y arreglos: Convertidos a cadenas usando ```JSON.stringify()```.

### **Fuentes Consultadas:**

1. [Local Storage and How To Use It On Websites](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)
2. [“The Past, Present, and Future of Local Storage for Web Applications”](https://diveinto.html5doctor.com/storage.html)
3. *Este documento fue realizado con el apoyo de Gemini*