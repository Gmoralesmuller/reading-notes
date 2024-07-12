# Read 04: Enlaces en HTML, Funciones en JS, e Introducción al CSS: Layout

## Crear Hipervínculos

### 1. Para crear un enlace básico, ¿en qué elemento colocamos el texto u otro contenido?

Para crear un enlace básico en HTML, utilizamos el elemento ```<a>```. Este elemento es como un contenedor donde colocamos el texto o contenido que queremos que se convierta en un enlace clickable.

### 2. ¿Qué información contiene el atributo href?

El atributo href dentro del elemento ```<a>``` especifica la dirección URL (Uniform Resource Locator) del recurso al que apunta el enlace. Es decir, indica a dónde se dirigirá el usuario cuando haga clic en el enlace.

Tipos de valores que puede aceptar el atributo href:

-URLs de páginas web: Como en el ejemplo anterior, apunta a una página web específica.
-Archivos: Puede enlazar a archivos como PDF, documentos de Word, imágenes, etc.
-Secciones dentro de la misma página: Utilizando un identificador (#), puedes crear enlaces a secciones específicas dentro de la misma página.
-Correos electrónicos: Puedes crear enlaces que abran un cliente de correo electrónico con un mensaje preescrito.
-Llamadas telefónicas: En algunos dispositivos, puedes crear enlaces que inicien una llamada telefónica.

### 3. ¿Cuáles son algunas de las formas en las que podemos asegurarnos de que los enlaces a nuestras páginas sean accesibles a todos los lectores?

*Texto descriptivo y significativo: El texto del enlace debe indicar claramente a dónde lleva. Evita frases genéricas como "clic aquí" y utiliza frases descriptivas que reflejen el contenido de la página de destino.
*Contraste de colores adecuado: Asegúrate de que el color del texto del enlace contraste con el fondo para que sea fácilmente visible.
*Tamaño de fuente suficiente: El tamaño de fuente debe ser lo suficientemente grande para que sea legible para personas con discapacidad visual.
*Orden de lectura lógico: Los enlaces deben seguir un orden lógico dentro del texto para facilitar la navegación.
*Atributo title: Utiliza el atributo title para proporcionar información adicional sobre el enlace, que aparecerá como una pequeña burbuja al pasar el ratón por encima.
*Enlazar a contenido relevante: Asegúrate de que los enlaces dirijan a contenido relevante y útil para el usuario.
*Evitar ventanas emergentes: Las ventanas emergentes pueden ser una barrera para algunos usuarios.
*Considerar a los usuarios con discapacidad: Utiliza tecnologías asistivas y sigue las pautas de accesibilidad como WCAG (Web Content Accessibility Guidelines).

## CSS: Layout

### 1. ¿A qué se refiere con “normal flow”?

El flujo normal (normal flow) es el orden predeterminado en el que los elementos HTML se muestran en una página web. Es como si los elementos fueran bloques de texto que se apilan uno encima del otro, siguiendo la dirección del documento (generalmente de arriba hacia abajo y de izquierda a derecha).

### 2. ¿Cuáles son algunas de las diferencias entre los elementos block-level e inline?

*Elementos Block-level
Son aquellos que ocupan toda una linea disponible. Empiezan en una nueva y tienen un margen superior e inferior por defecto. Ejemplo: ```<div>```, ```<p>```, ```<ol>```.

*Elementos Inline
Son aquellos que no ocupan toda la linea, sino el espacio necesario. Pueden aparecer uno al lado del otro en la misma linea. No tienen margenes superior ni inferior por defecto en comparación con los elementos block-leivel. Ejemplos: ````<span>```, ```<a>```, ```<strong>```.

### 3. El **static** positioning es la posición por defecto de todos los elementos en html

### 4. Nombra algunas ventajas de utilizar absolute positioning en un elemento

-Posicionamiento preciso: Se puede color un elemento exactamente donde quieras en la página independientemente de su posición normal.
-Puedes superponer elementos unos sobre otros para crear efectos visuales interesantes.
-Te permite crear diseños complejos y personalizados.

### 5. ¿Cuál es una diferencia clave entre fixed positioning y absolute positioning?

*Fixed positioning:
-El elemento se fija en una posición especifica en la ventana del navegador.
-No se desplaza con el resto del contenido cuando se desplaza la página.
-Se utiliza crear elementos que siempre permanezcan en la misma posición, como barras de navegación fijas.

*Absolute positioning:
-El elementose posiciona en relación a su contenedor más cercano que tenga un posicionamiento distinto de static.
-Se desplaza con su contenedor si este se desplaza.
-Se utiliza para crear elementos que se superponen a otros o para crear diseños personalizados.

## Javascript: Funciones

### 1. Describe la diferencia entre una declaración de función y una invocación de función

* Declarar una función implica definirla, establecer el nombre, los parámetros y el cuerpo de la función que son como las indicaciones que se seguirán cuando se ejecute.
* Invocar una función implica seguir los pasos establecidos. Aquí es cuando se ejecuta la función, proporcionando los valores reales para los parámetros (argumentos) y obteniendo el resultado.

### 2. ¿Cuál es la diferencia entre un parameter y un argument?

*Parametros: son las variables que se declaran dentro de los paréntesis de una función cuando se define.
*Argumentos: sonlos valores reales que se pasan a una función cuando se invoca. Estos valores se asignan a los parámetros correspondientes dentro de la función.

## Miscelánea: Beneficios del Pair Programming

### 1. Escoge 2 beneficios del pair programming y reflexiona acereca de cómo estos beneficios te pueden ayudar en tu carrera como programador

1. Soluciones mas rápidas: Al trabajar con otro programador se obtiene mas puntos de vista, se puede resolver problemas de manera mas rápida y eficiente. Incluso se pueden dividir tareas y aprovechar las fortalezas de cada uno de los participantes. 

2. Mejora la calidad del código: Al trabajar en pareja se revisa constantemente el código, lo que reduce la posibillidad de errores y aumenta la calidad del resultado. También, se puede obtener mayor diversidad de perspectivas ya que cada programador tiene una forma de abordar los problemas basado en sus experiencias. Al combinar ambas perspectivas se pueden encontrar soluciones más creativas e innovadoras.

Asimismo, el poder tener acceso a otra perspectiva y otras experiencias me permitirá tener una mayor diversidad de puntos de vista lo que me genera un aprendizaje continuo; lo cual es muy beneficioso en esta carrera. Además me permite crear mejores proyectos o llevar a cabo soluciones mas innovadoras y sobre todo poder adquirir mayor experiencia en mi carrera.

## Cosas de las que quiero saber más

-Me interesa poder emplear de mejor manera el fixed y absolute positioning. 

### **Fuentes Consultadas:**

1. [Crear Hipervínculos](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
2. [CSS: Layout: Normal Flow](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Normal_Flow)
3. [Layout: Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)
4. [Funciones](https://imoralescs.gitbooks.io/javascript/content/funciones.html)
5. [Beneficios del Pair Programming](https://apiumacademy.com/es/beneficios-pair-programming/)
6. *Este documento fue realizado con el apoyo de Gemini*