# Lectura 12: Chart.js, Canvas

## Canvas

### 1. ¿Qué es lo que el ```<canvas>``` le permite lograr al desarrollador?

El elemento ```<canvas>``` es como un lienzo digital en blanco sobre el cual los desarrolladores pueden dibujar utilizando JavaScript. Esto significa que puedes crear gráficos 2D personalizados, animaciones, juegos simples y mucho más. Algunas de las cosas que puedes hacer con ```<canvas>``` incluyen:

* Dibujar formas como líneas, rectángulos, círculos, arcos y polígonos.
* Crear imágenes; es decir, cargar imágenes y manipularlas, como cambiar su tamaño, rotarlas o aplicar filtros.
* Crear animaciones suaves y fluidas utilizando las funciones de dibujo y temporizadores de JS.
* Crear juegos interactuvos con gráficos personalizados y controles del usuario.
* Representar datos númericos en gráficos y diagramas.

En resumen, ```<canvas>``` te da un control total sobre los píxeles de una región del documento, lo que te permite crear gráficos personalizados y dinámicos.

### 2. ¿Cuál es la importancia de cerrar la etiqueta ´´´</canvas>```?

Al igual que con cualquier otra etiqueta HTML, es esencial cerrar la etiqueta ```<canvas>``` para indicar al navegador dónde termina el elemento. Si no se cierra correctamente, el navegador puede tener dificultades para interpretar el código y renderizar la página correctamente. Esto puede provocar errores en la visualización del canvas o en otras partes de la página.

### 3. Explica lo que hace el método ```getContext()```

El método getContext() es fundamental para trabajar con el elemento ```<canvas>```. Cuando obtienes un contexto de dibujo, estás obteniendo una interfaz de programación (API) que te permite dibujar en el canvas. Hay diferentes tipos de contextos, pero el más común es el contexto 2D ('2d').

Una vez que tienes un contexto 2D, puedes utilizar sus métodos y propiedades para dibujar formas, aplicar estilos, gestionar transformaciones y mucho más. Algunos ejemplos de métodos comunes en un contexto 2D son:

* fillRect(): Dibuja un rectángulo relleno.
* strokeRect(): Dibuja un rectángulo con un borde.
* beginPath(): Comienza una nueva ruta para dibujar.
* moveTo(): Mueve el lápiz a una nueva posición.
* lineTo(): Dibuja una línea hasta una nueva posición.
* fill(): Rellena la forma actual.
* stroke(): Dibuja el borde de la forma actual.

Ejemplo:

```html

<canvas id="miCanvas" width="300" height="150"></canvas>

<script>
  const canvas = document.getElementById('miCanvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 150, 75); // Dibuja un rectángulo azul

  ctx.fillStyle = 'red';
  ctx.fillRect(150, 0, 150, 75); // Dibuja otro rectángulo rojo
</script>

```

En este ejemplo, primero obtenemos el elemento ```<canvas>``` y luego obtenemos su contexto 2D. A continuación, utilizamos los métodos fillStyle y fillRect para dibujar dos rectángulos de diferentes colores.

## Chart.js Documentation

### 1. ¿Qué es Chart.js y cómo se puede incorporar en nuestro proyecto?

Chart.js es una biblioteca de JavaScript de código abierto, muy popular y fácil de usar, diseñada específicamente para crear visualizaciones de datos en forma de gráficos. Ofrece una amplia variedad de tipos de gráficos y es altamente personalizable. 
En el caso de nuestro proyecto nos ayuda a incluir una librería posteriormentes, así como también podemos crear un elemento ```<canvas>```, donde se dibujará el gráfico para poder mostrar los datos de la cantidad de clics que se dan a las imágenes. Además, podemos utilizar JS para obtener una referencia al elemento ```<canvas>``` y crear una instancia de un tipo de gráfico específico (línea, barra, etc). 

### 2. Enumera 3 tipos diferentes de gráficos que puedes crear utilizando Chart.js

1. Gráficos de línea: Ideales para mostrar tendencias a lo largo del tiempo o comparar múltiples conjuntos de datos.
2. Gráficos de barras: Perfectos para visualizar datos categóricos, como comparaciones entre diferentes grupos o categorías.
3. Gráficos de pastel: Útiles para mostrar la proporción de diferentes partes de un todo.

## Easily Create Stunning Animated Charts with Chart.js

### 1. ¿Cuáles son algunas de las ventajas de mostrar datos por medio de un gráfico en vez de una tabla?

Mostrar datos en forma de gráfico presenta varias ventajas significativas sobre las tablas:

* La información presentada visualmente suele ser más memorable y cautivadora, lo que facilita que el usuario retenga la información.
* Desviaciones significativas o puntos atípicos se destacan fácilmente en un gráfico, lo que permite identificar problemas o oportunidades. Los gráficos hacen evidentes las correlaciones entre diferentes variables, lo que es fundamental para el análisis de datos.
* Los gráficos permiten resaltar los datos más importantes y minimizar la relevancia de los menos significativos.
* Los gráficos hacen que las aplicaciones sean más atractivas y fáciles de usar, lo que aumenta la satisfacción del usuario.
* Los gráficos son una forma más efectiva de comunicar información a una audiencia, especialmente si no están familiarizados con los datos. Las visualizaciones pueden hacer que los datos sean más interesantes y atractivos.

### 2. ¿Cómo puede ayudar Chart.js a tus aplicaciones creadas anteriormente?

De la siguiente manera:

* En el proyecto de Salmon-cookies me permite agregar gráficos personalizados para mostrar los datos de manera más clara y atractiva según la localización de las tiendas. Esto puede ser especialmente útil si se manejan grandes cantidades de datos.
* En el mismo proyecto así como en odd-duck. Los gráficos pueden hacer sea más interactivo y atractivo para los usuarios y asi mejorar la experiencia.

### **Fuentes Consultadas:**

1. [Canvas - una introducción](https://w3.unpocodetodo.info/canvas/introduccion.php)
2. [Uso básico de Canvas](https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
3. [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
4. [Easily Create Stunning Animated Charts with Chart.js](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
5. [Dibujando formas con canvas](https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
6. [Applying Style and Colors - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
7. [Dibujar Texto - Canvas API](https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
8. *Este documento fue realizado con el apoyo de Gemini*
