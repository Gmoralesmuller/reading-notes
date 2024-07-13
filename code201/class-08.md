# Lectura 08: CSS Layout

## Flexbox

### 1. Flexbox está diseñado para contenido unidensional. Explica lo que significa esto

Flexbox permite organizar elementos a lo largo de una línea, ya sea horizontalmente o verticalmente. Es decir, Flexbox es excelente para distribuir elementos en una sola dirección, ya sea en fila o en columna.

* Unidimensional: Se refiere a que los elementos se distribuyen principalmente en una dimensión, ya sea en el eje principal (main axis) o en el eje cruzado (cross axis).
* Flexibilidad: A diferencia de los diseños basados en tablas, Flexbox ofrece una gran flexibilidad para ajustar el diseño a diferentes tamaños de pantalla y dispositivos.

### 2. Explica la diferencia entre main axis y cross axis

* Main Axis: Es el eje principal a lo largo del cual se distribuyen los elementos flex. Por defecto, el main axis es horizontal (de izquierda a derecha).
* Cross Axis: Es el eje perpendicular al main axis. Por defecto, el cross axis es vertical (de arriba a abajo).

Ejemplo:
Si estableces la dirección del main axis como row, los elementos se distribuirán de izquierda a derecha. El cross axis, en este caso, será de arriba a abajo.

### 3. ¿Cómo es que utilizar ciertas propiedades de flexbox impacta negativamente en la accesibilidad?

Si bien Flexbox es una herramienta poderosa para crear diseños responsivos, un uso inadecuado puede afectar negativamente la accesibilidad:

* Flexbox puede alterar el orden natural de lectura de los elementos en la página. Si un usuario utiliza un lector de pantalla, el contenido podría ser leído en un orden diferente al esperado, dificultando la comprensión.
* Reducir el tamaño de fuente para que los elementos quepan en un espacio determinado puede dificultar la lectura para personas con discapacidad visual. Asimismo, utilizar colores con bajo contraste puede hacer que el contenido sea difícil de leer y no sea muy inclusivo. 
* Asegurarse de que todos los elementos sean accesibles por teclado es fundamental. Flexbox, si no se utiliza correctamente, puede dificultar la navegación con el teclado. Utiliza los atributos tabindex y aria-* para mejorar la accesibilidad por teclado.ç

## Flex-Flow Shorthand

### 1. ¿Cuáles son algunas de las ventajas de utilizar flexbox sobre float?

Algunas de sus principales ventajas son:

* Ofrece un control mucho más preciso sobre el posicionamiento, alineación y distribución de elementos dentro de un contenedor. Permite crear diseños más complejos y adaptables sin necesidad de recurrir a hacks o soluciones engorrosas.
* La sintaxis de Flexbox es más intuitiva y fácil de aprender en comparación con los floats. Esto se traduce en un desarrollo más rápido y menos propenso a errores.
* Flexbox está diseñado para adaptarse a diferentes tamaños de pantalla y dispositivos, lo que facilita la creación de sitios web responsive.
* Resuelve muchos de los problemas que solíamos enfrentar con los floats, como el colapso de contenedores y la necesidad de utilizar clearfix.
* Flexbox tiene un amplio soporte en los navegadores modernos, lo que permite utilizarla sin preocuparse por la compatibilidad.

### 2. ¿Cómo es que este tema se conecta con tus metas a largo plazo?

* Al dominar flexbox me permite construir interfaces de usuario atractivas y adaptables a diferentes dispositivos. Los que me permitirá crear diseños mas profesionales y creativos para los blogs que tengo planeado llevar a cabo.
* Los proyectos que desarrolle utilizando Flexbox me permiten demostrar las habilidades técnicas a potenciales empleadores o clientes. Me ayudaria para crear un portafolio solido y variado para poder conseguir trabajos o establecer mi marca personal.

### **Fuentes Consultadas:**

1. [Learn CSS - Flexbox](https://web.dev/learn/css/flexbox?hl=es)
2. [CSS Layout - Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox)
3. [Learn CSS - Layout](https://web.dev/learn/css/layout?hl=es)
4. *Este documento fue realizado con el apoyo de Gemini*