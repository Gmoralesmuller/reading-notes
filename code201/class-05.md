# Lecturas: Imágenes, Color, Texto

## Medios en HTML

### 1. ¿Cuál es un caso práctico del atributo alt en una página web?

Al no cargarse una imagen o no parecer, aparece un texto que describe la imagen. Ese texto es el atributo alt.

### 2. ¿Cómo puedes mejorar la accesibilidad de las imágenes en un documento HTML?

Además de usar el atributo alt, hay otras formas de mejorar la accesibilidad de las imágenes:

* Usar imágenes descriptivas: Es mejor elegir imágenes que sean claras y faciles de entender y escribir sobre ellas. Evitar las imágenes abstractas y con mucho ruido visual.
* Optimizar el tamaño de las imágenes: Las imagenes grandes pueden tardar mucho en cargar y pueden llegar a afectar la experiencia del usuario. Es mejor comprimir las imágines sin perder calidad.
* Utilizar el elemento figure: Este elemento ayuda a agrupar una imagen con su leyenda o descripción, lo que faciita la comprensión del contenido para personas que tengan una discapacidad visual.
* Considerar el contraste: Asegurarse de que el constraste entre la imagen y el fondo sea suficiente es mejor ya que es más visible para las personas con baja visión.

### 3. Da un ejemplo en el que el elemento figure sería útil en un documento HTML.
Imaginemos que tenemos un blog de viajes y se quiere mostrar una foto de la Torre Eiffel. POdremos usar el elemento figure de la siguiente forma:

```html
<figure>
  <img src="torre_eiffel.jpg" alt="La Torre Eiffel en París">
  <figcaption>La Torre Eiffel es uno de los monumentos más famosos del mundo.</figcaption>
</figure>
```

En este ejemplo, el elemento figure agrupa la imagen de la Torre Eiffel con su descripción. Esto hace que el contenido sea más claro y preciso y sobre todo es de gran ayuda y genera inclusión con las personas con discapacidades visuales.

### 4. Describe la diferencia entre una imágen gif y una imágen svg, imagina que se lo estás explicando a una persona mayor de tu comunidad.

Supongamos que las imagenes son como dibujos. Un GIF es como un dibujo animado que esta formado por muchas imagenes pequeñas una seguida de otra que juntas crean la ilusión de movimiento. Los GIF son buenos para mostrar animaciones cortas y repetitivas, como un emoji que se mueve o una acción en concreto. Por otro lado un SVG es como un dibujo técnico, hecho con líneas y formas matemáticas. Los SVG son escalables; es decir, que pueden hacerlos más grandes o más pequeños sin perder la calidad. Estos a su vez pueden contener texto o interactuar con el usuario.

### 5. ¿Qué tipo de imagen usarías para mostrar una captura de pantalla en tu página web y por qué?

Para mostrar una captura de pantalla, lo ideal sería usar una imagen en formato PNG. El formato PNG permite guardar imágenes con fondos transparentes, lo que es muy útil para mostrar capturas de pantalla sin un fondo blanco alrededor. Además, el PNG ofrece una buena calidad de imagen sin comprimir demasiado la información.

## CSS: Using Color. Styling HTML Text Elements

### 1. Describe la diferencia entre un color de primer plano y un color de fondo de un elemento HTML, imagina que estás hablando con una personas sin conocimientos técnicos

* Color de primer plano: Es el color del texto o cualquier elemento que se coloque encima del fondo.
* Color de fondo: Es el color de la parte detrás del texto o cualquier elemento.

### 2. Tu amigo te pide que le des un retoque a su blog. ¿Cómo utilizarías color para darle carácter a su blog?

Para darle caracter al blog, se puede usar el color de las siguientes formas:

* Colores que reflejen la personalidad: Si se trata de un blog de naturaleza sería conveniente usar tonos verdes o azules o marrones. Ya que, son colores mas comunes en la naturaleza.
* Colores que destaquen los elementos importantes: Se puede emplear colores mas llamativos para los títulos o para las llamadas de acción (botones, enlaces, etc). Esto permite que se resalte el contenido sobre lo demás también mejorando la visibilidad y accesibilidad en la página.
* Combinaciones de colores agradables a la vista: Evistar combinaciones de colores que cansen la vista o sean difíciles de leer. Asimismo, tomar en cuenta el contraste para poder tener una mejor accesibilidad. 

### 3. ¿Qué debes tener en cuenta al escoger tipos de letra para un documento HTML?

Se debe considerar los siguientes aspectos:

* Legibilidad: La letra debe ser fácil de lee, en especial en tamaños pequeños.
* Estilo: La tipografía debe reflejar el estilo del contenido. Por ejemplo: una tipografía como de máquina de escribir puede ser conveniente para un blog sobre narración o literatura.
* Combinación. Evitar usar demasiadas tipografías en una misma página. Con dos o tres tipos son más que suficientes. 

### 4. ¿Cuál es la relación entre font-size, font-weight, y font-style con los elementos de texto en HTML?

* Font-size: Define el tamaño de la letra.
* Font-weight: Define el grosor de la letra.
* Font-style: Define el estilo de la letra. Puede ser cursiva o negrita.

### 5. Describe dos formas de añadir espaciado alrededor de los caracteres mostrados en un elemento h1.

Existen dos formas principales de añafir un espaciado alrededor de los caracteres en un elemento h1:

*Letter-spacing: Esta propiedad puede aumentar o diminuir el espacio entre cada letra.
*Word-spacing: Esta propiedad aumenta o disminuye el espacio entre cada palabra.

### **Fuentes Consultadas:**

1. [Usar imagenes en HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
2. [Common Image Types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
3. [Choosing Image Formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format)
4. [Using Color in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Applying_color)
5. [Styling HTML Text Elements](https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Fundamentals)
6. *Este documento fue realizado con el apoyo de Gemini*