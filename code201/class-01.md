# **Read 01**

En estos primeros pasos en el curso Code201 es importante tener claro los conceptos basicos sobre HTML, CSS y JAVASCRIPT; para poder tener conocimientos solidos y poder desarrollar bien mis clases y proyectos pendientes.

## **Primeros Pasos**

*1. Crea un poema corto describiendo cómo HTTP envía datos entre computadoras.*

En el mundo Red de cables y luz,
HTTP es un viajero veloz,
lleva mensajes de aqui para allá,
de maquina en maquina va,
Clientes y servidores, en conjunta labor,
envian datos con gran vigor.
La conexion a internet ¡carretera esencial!
permite el viaje rapido y servicial,
TCP/IP, un transporte confiable,
guian los datos de forma estable.
DNS, la libreta de direcciones,
encuentra el destino sin equivocaciones.
El navegador pide ansioso y concentrado,
la pagina web de quien esta amparado,
HTTP un lenguaje universal,
permite entenderser ya sea formal o casual.
El servidor responde, "200 ok",
y envia los datos inmediatos.
Los archivos viajeros de paquetes pequeños,
como productos que alimentan sueños.
HTML, CSS y Javascript metidos en su ser,
unidos a recursos listos para ver.
El navegador un gran construtor,
junta cada pedazo de un sector,
forma el sitios web con apuro y sin retraso,
sin faltarle ningun retazo.
Así funciona el baile de datos en la red,
nos conecta a todos y nos da lo que pedimos,
como saciando nuestra sed.

*2. Describe como los archivos HTML, CSS y JS son “analizados” en el navegador.*

El navegador web cuando recibe un documeto HTML junto con archivos CSS y Javascript, realiza un proceso de analisis para interpretar y mostrar correctamente el contenido en la pantalla del usuario.
En los que respecta al HTML se realiza lo siguiente:
    - En primer lugar analiza el HTML del documento web para dividir el HTML en partes estructuradas llamadas TOKENS. Este proceso se le denomina Tokenización.
    - En segundo lugar contruye el DOM que representa la estructura lógica del documento. Este arbol organiza los elementos HTML en una jerarquía donde cada elemento es un nodo.
    - Finalmente, durante el proceso de construccion del DOM se va identificando elementos, atributos y contenido dentro del documento para prepararse al siguiente paso.
Con respecto al CSS se realiza lo siguiente:
    - Una vez contruido el DOM se procesde al analisis de las hojas de estilo CSS asociadas.
    - Se divide el CSS en partes lógicas como selectores, propiedades y valores.
    - Se contruye un CSSOM que representa como se aplicaran los estilos a los elementos del DOM.
    - Este proceso incluye la resolución de la cascada, donde se determinará que reglas CSS tienen prioridad en caso de conflictos (por ejemplo reglas inline, reglas internas o externas, etc.).
Finalmente, en lo que concierne a Javascript se produce lo siguiente:
    - Finalmente, el navegador analiza y ejecuta el código si esta presente en el documento. Utiliza un procesode anallisis similar para dividir en partes reconocibles como declaraciones, expresiones y funciones.
    - Compila el código en un formato ejecutable (bytecode) y lo ejecuta en uhn entorno de ejecución (por ejemplo, motor JS V8 en Chrome).
    - Durante la ejecución, el codigo Js puede modificar dinámicamente el contenido del DOM, aplicar estilos, manjear eventos y reaizar otras acciones interactivas.
En conclusión, el navegador realiza un proceso complejo de analisis y ejecución para interpretar los archivos HTML, CSS Y JS. Con el fin de asegurar un contenido correcto y con interacciones fluidas y responsivas para el usuario final.

*3. ¿Cómo puedes encontrar imágenes para agregar a una página web?*

Para elegir una imagen ve a [Imagenes Google](https://www.google.com/imghp?gws_rd=ssl).
    1. Al encontrar una imagen, hacer clic en la imagen para obtener una vista ampliada de la misma.
    2. Haz clic cpn el botón derecho en la imagen, elige *guardar imagen como...* y elige un lugar seguro para guardar tu imagen. De forma alterna, copiar la dirección web de la imagen de la barra de direcciones de tu navegador para su posterior uso.

> Tener en cuenta que la mayoría de imagenes en la web, incluidas las de Imagenes Google, están protegidas por derechos de autor. Para reducir la probabilidad de violar los derechos de autor, puedes utilizar el filtro de licencias de Google.
    - Haz clic en el botón *Herramientas* y luego en la opción *Derechos de uso* y se procede a elegir una opción como *Etiquetado para reutilización*.

> Información extra proporcionada por ChatGPT

>   - Sin filtrar por licencia:
>Esta opción significa que Google mostrará todas las imágenes relevantes para tu búsqueda sin considerar las restricciones de derechos de autor. Es importante tener en cuenta que muchas de estas imágenes pueden estar protegidas por derechos de autor y no ser adecuadas para su uso sin permiso.
>   **- Licencias Creative Commons:**
>Las licencias Creative Commons son un conjunto de licencias legales que los creadores de contenido pueden aplicar a su trabajo. Estas licencias permiten a otros usuarios utilizar, compartir y modificar el contenido de manera legal, bajo ciertas condiciones establecidas por el autor.
Al seleccionar esta opción, Google mostrará imágenes que están etiquetadas con licencias Creative Commons, lo que significa que el autor ha autorizado explícitamente el uso de su obra bajo ciertas condiciones especificadas en la licencia (como atribución requerida o uso no comercial).
>    **- Licencias comerciales y otras:**
>Esta opción generalmente incluye imágenes que están disponibles para uso comercial, lo que significa que se pueden utilizar en productos o servicios con fines lucrativos.
>Además de las licencias comerciales, esta categoría puede incluir otras licencias específicas que los autores han asociado con sus imágenes, permitiendo diferentes usos según lo establecido por el creador.
Al elegir una opción como "Etiquetado para reutilización" dentro de las herramientas de búsqueda de Google Imágenes, estás filtrando las imágenes para mostrar aquellas que el autor ha marcado específicamente como permitidas para ciertos tipos de usos (como la reutilización en otros proyectos). Esto ayuda a reducir el riesgo de violar derechos de autor al utilizar imágenes de manera más segura y legalmente autorizada.
> Para ver las condiciones establecidas por el autor de una imagen, especialmente cuando se trata de licencias Creative Commons u otras formas de permisos específicos, puedes seguir estos pasos:
>    1. En Google Imágenes:
>Después de realizar una búsqueda y aplicar el filtro de licencias (por ejemplo, seleccionando "Etiquetado para reutilización"), haz clic en la imagen que te interese para verla en tamaño completo.
Debajo de la imagen, deberías encontrar un enlace que dice algo como "Detalles" o "Ver página de origen". Haz clic en este enlace para ir a la página web donde se encuentra alojada la imagen originalmente.
>   2. En la página de origen:
Una vez en la página de origen, busca información sobre la licencia o los términos de uso proporcionados por el autor. Esta información suele estar cerca de la imagen o en la sección de pie de página del sitio web.
Algunos sitios web pueden tener una sección dedicada a los términos de uso, mientras que otros pueden indicar directamente junto a la imagen si está bajo una licencia Creative Commons u otra licencia específica.
>    3. Leer la licencia Creative Commons:
>Si la imagen está bajo una licencia Creative Commons, deberías ver el tipo de licencia específica (por ejemplo, CC BY, CC BY-SA, etc.) junto con un enlace a la descripción completa de la licencia.
Haz clic en el enlace de la licencia para leer los términos detallados. La página de Creative Commons te proporcionará información sobre lo que puedes y no puedes hacer con la imagen según la licencia seleccionada por el autor.
Atribución y cumplimiento de la licencia:
>Si decides utilizar la imagen, asegúrate de cumplir con los términos de la licencia, lo cual generalmente incluye atribuir correctamente al autor de la imagen. Esto implica dar crédito de la manera especificada por la licencia (por ejemplo, incluir el nombre del autor, el título de la obra y un enlace a la licencia).
>Al seguir estos pasos, podrás encontrar y entender las condiciones establecidas por el autor para el uso de la imagen, ayudándote a utilizarla de manera legal y respetuosa con los derechos de autor.

*4. ¿Cómo creas una String en comparación con un Number en Javascript?*

En el caso de crear una variable string se debe escribir entre comillas.
    Ejemplo:

    ```javascript
        let nombre = 'Georgina';
    ```
En el caso de crear una variable Number los numeros no tienen comillas.
    Ejemplo:

    ```javascript
        let edad = 26;
    ```

*5. ¿Qué es una Variable y por qué son importantes en JavaScript?*

Las variables son contenedores en los que se puede almacedar valores. En primer lugar, se debe declarar la variable con la palabra clave; ya sea var, let o const.

> Contenido extra generado por ChatGPT:

Las variables son fundamentales en JavaScript por varias razones importantes:

    1. Almacenamiento de datos: Las variables permiten almacenar y manipular datos en un programa. Pueden contener números, cadenas de texto, objetos, funciones y otros tipos de datos.

    2. Flexibilidad y dinamismo: JavaScript es un lenguaje de programación dinámico y de tipado débil, lo que significa que las variables pueden cambiar de tipo y valor durante la ejecución del programa. Esto proporciona flexibilidad para adaptarse a diferentes situaciones y necesidades de programación.

    3. Reutilización de valores: Las variables permiten asignar nombres descriptivos a valores específicos, lo que facilita la reutilización y la comprensión del código. En lugar de repetir valores directamente, puedes referenciar una variable para acceder al valor deseado.

    4. Manipulación de datos: Con variables, puedes realizar operaciones matemáticas, manipular cadenas de texto, modificar estructuras de datos como arrays y objetos, y realizar diversas tareas de procesamiento de datos.

    5. Ámbito y visibilidad: Las variables en JavaScript tienen ámbitos que determinan dónde pueden ser accedidas y modificadas. Esto ayuda a controlar la visibilidad y el alcance de las variables dentro de diferentes partes del programa.

    6. Interacción con el usuario: JavaScript es comúnmente utilizado para crear interacciones dinámicas en páginas web (por ejemplo, formularios interactivos, animaciones, validaciones de entrada). Las variables son esenciales para almacenar y gestionar los datos ingresados por el usuario.

#### **Fuentes Consultadas:**

1. [Como funciona la web](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
2. [¿Cuál será la apariencia de tu sitio web](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
3. [Fundamentos de Javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
4. *Algunos bloques especificados fueron con el apoyo de ChatGPT.*

## **Introducción a HTML**

*1. ¿Qué es un atributo en HTML?*

Los elementos pueden tener atributos, los cuales se encuentra dentro de la etiueta de apertura. Continene información adicional sobre el elemento que no aparecerá en el contenido. Estos deben tener:
    - Un espacio entre él y el nombre del elemento (para un elemento con más de un atributo, estos también deben de estar separados por espacios entre ellos).
    - El nombre del atributo debe ser seguido de un signo igual.
    - Un valos de atributo debe estar envuelto con comillas de apertura y cierre.
Un ejemplo de atributo es: 
    - alt: este atributo especifica una descripción de texto de la imagen (por ejemplo: alt="un salmón mirando a la derecha").

*2. Describe la anatomía de un elemento en HTML.*

La anatomía de un elemento eb HTML es la siguiente:
    1.Etiqueta de apertura: consiste en el nombre del elemento (por ejemplo "p" o "script"), el cual esta envuelto en corchetes angulares "<>" de apertura y cierre. La etiqueta de apertura es la indica donde inicia a surtir efecto el elemento (por ejemplo precede al inicio del texto de un parrafo).
    2.Contenido: Es el contenido del elemento (por ejemplo el texto de un parrafo).
    3.Etiqueta de cierre: Es la misma etiqueta de apertura con la excepcion que incluye una barra diagonal deltante del nombre del elemento. La etiqueta de cierre marca donde termina el elemento. No incluir la etriqueta de cierre es un error común que puede conllevar a producir un resultado peculiar.
*3. ¿Cuál es la diferencia entre las etiquetas ```<article>``` y ```<section>```?*
En el caso de ```<article>``` encuadra un bloque de contenido que tiene sentido por sí mismo aparte del resto de la página, además puede ser distribuido o reutilizado de manera independiente. Es ideal para contenido autónomo como entradas de blog, publicaciones en redes sociales, artículos de noticias, etc. Sumado a ello ayuda a mejorar la semántica del documento, la accesibilidad y el SEO al clarificar qué partes del contenido son autónomas.
Por otro lado, ```<section>``` se usa más para agrupar cada parte de la página que, por su funcionalidad, constituye un sección en sí misma. A diferencia de ```<article>``` no es necesariamente autónomo; ya que ```<section>``` puede ser parte de un documento más grande; es decir, parte de un contenido mayor, su significado completo depende del contexto del documento. Es ideal para dividir un documento en secciones temáticas o lógicas. Cada ```<section>``` debería estar acompañado de un encabezado (```<h1>``` - ```<h6>```) para indicar el tema o proposito de esa sección. Ayuda a estructurar y organizar el contenido de manera coherente y es útil para crear una jerarquía clara dentro del contenido de la página.

*4. ¿Qué elementos se incluyen en una página web “típica”?*

Para tener una página web tipica se necesita incluir los siguientes elementos:
    1.-Encabezado: Normalmente es una franja que cruza la parte superior de la pagina con un gbran título, un logotipo o un lema. Esta parte suele permanecer sin variaciones mientras se navega entre las paginas de un mismo sitio web.
    2.-Barra de Navegación:Son los enlaces a las secciones principales del sitio web. Normalmente está formada por un menú con botones, enlaces o pestañas. Al igual que el encabezado, este contenido suele permanecer invariable en las diferentes páginas del sitio.
    3.-Contenido Principal:Es la gran parte central de la página y contiene la mayor parte del contenido particular de una página web concreta; por ejemplo, el video que quieres ver, la narración que quieres leer, el mapa que quieres consultar, los titulares de las noticias, etc. Esta parte es la que más varia de una página a otra en un sitio web.
    4.-Barra lateral:Suele incluir algún tipo de información adicional, enlaces, citas, publicidad, etc. Normalmente está relacionada con el contenido principal de la página (por ejemplo, en una página de noticias, la barra lateral podría contener la biografía del autor o enlaces a artículos relacionados), pero en otras ocasiones encontraras elementos recurrentes como un menú de navegación secundario.
    5.-Pie de página:Es la parte inferior de la página, que generalmente contiene la letra pequeña, el copyright o la información de contacto. Es el sitio donde se coloca la información común (al igual que en el encabezado), pero esta información no suele ser tan importante o es secundaria con respecto a la página en sí misma. El pie también se suele usar para propósitos SEO, e incluye enlaces de acceso rápido al contenido más popular.

*5. ¿Cómo influyen los metadatos en el Posicionamiento en buscadores (SEO)?*

    - Los metadatos ayudan a los motores de búsqueda a determinar la relevancia y el contexto del contenido, mejorando la indexación y la precisión de los resultados de búsqueda.
    - Metadatos bien optimizados pueden mejorar la experiencia del usuario al proporcionar títulos y descripciones claros y atractivos, lo cual aumenta el CTR.
    - Los atributos como "alt" en las imágenes mejoran la accesibilidad del sitio web, lo cual puede tener un impacto positivo en el SEO.

*6. ¿Cómo se utliza la etiqueta ```<meta>``` en HTML cuando se quiere especificar metadatos?*

```<meta charset="utf-8">```: Este elemento representa metadatos que no pueden ser representados por otros elementos HTML relacionados con metadatos, como ```<base>```, ```<link>```, ```<script>```, ```<style>``` o ```<title>```. El atributo charset especifica la codificación de caracteres para su documento como UTF-8, que incluye la mayoría de los caracteres de la gran mayoría de los lenguajes humanos escritos. Con esta configuración, la página ahora puede manejar cualquier contenido textual que pueda contener. No hay razón para no configurar esto, y puede ayudar a evitar algunos problemas más adelante.

#### **Fuentes Consultadas:**

1. [Primeros pasos con HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
2. [Estructura web y documentación](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
3. [¿Qué hay en la cabecera? Metadatos en HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
4. *Algunos bloques especificados fueron con el apoyo de ChatGPT o copiados directamente de la fuente (links superiores).*

## Miscelánea

### ¿Cómo empiezo a diseñar mi sitio web?

1.-¿Cuál es el primer paso para diseñar una página web?
El primer paso a realizar es ideaización del proyecto y se lleva a cabo al realizar los siguientes cuestionamientos:
*¿Qué es exactamente lo que quiero lograr?
*¿Cómo un sitio web me ayudará a alcanzar mis metas?
*¿Qué es necesario hacer, y en qué orden, para alcanzar mis metas?
2.-¿Cuál es la pregunta más importante que se debe responder al diseñar una página web?
La pregunta más importante a responder es la siguiente:
    - ¿Qué es exactamente lo que quiero lograr?
Esta pregunta impulsa todo lo demás.

### Semántica

1.-¿Por qué se debe utilizar un elemento ```<h1>``` en vez de un ```<span>``` para mostrar un título de primer nivel?

Existen varias razones por las que es conveniente usar un elemento ```<h1>``` en lugar de un ```<span>``` y son las siguientes:
    - ```<h1>``` al ser un elemento semántico indica que es un encabeado de primer nivel lo que ayuda a definir la estructura jerárquica del contenido de una página web. Los motores de busqueda, navegadores y tecnologías asistivas emplean esta jerarquía para entender y navegar el contenido. Por otro lado, ```<span>```es un elemento en linea sin significado semántico propio. Por lo que no transmite ninguna información osbre la importancia o jerarquía del contenido que contiene. En conclusión, un ```<h1>``` correctamente usado  puede mejorar el SEO, ayudando a que la página se posicione mejor en los resultados de busqueda. Mientras que un ```<span>``` no proporciona ninguna información adicional a los motores de busqueda lo que puede resultar en una mala optimización SEO.
    - Los lectores de pantalla y otras tecnologías asistivas dependen de los encabezados para proporcionar una experiencia de navegación coherente a los usuarios con discapacidades visuales. Usar un ```<h1>``` asegura que estos dispositivos puedan identificar y anunciar correctamente el título de primer nivel. Minetras que un ```<span>``` no tienen ningun significado especia para los lectores de pantalla, lo que dificulta la navegación y comprensión del contenido para los usuarios que depende de estas tecnologías. 
    - Los navegadores aplican estilos predeterminados a los encabezados (```<h1>``` a ```<h6>```) para asegurar una presentación visual consistente y apropiada de los títulos. Mientras que usar ```<span>``` requiere estilos CSS adicionales para imitar la apariencia de un encabezado, lo que añade complejidad y puede llevar a inconsistencias.

2.-¿Cuáles son los beneficios de utilizar etiquetas semánticas en nuestro HTML?

Son los siguientes: 
    1. Las etiquetas semánticas ayudan a las tecnologías asistivas a interpretar y anunciar el contenido correctamente.
    2. Los motores de búsqueda utilizan etiquetas semánticas para entender la estructura y el contenido de una página web. Esto mejora la indexación y puede resultar en una mejor clasificación en los resultados de búsqueda.
    3. El uso de etiquetas semánticas hace que el código HTML sea más legible y mantenible. Los desarrolladores pueden entender rápidamente la estructura y propósito del contenido, facilitando la colaboración y el mantenimiento del código a largo plazo.
    4. Los navegadores modernos están diseñados para interpretar y presentar adecuadamente las etiquetas semánticas. Esto asegura una mejor consistencia en la presentación del contenido en diferentes navegadores y dispositivos.
    5. Las etiquetas semánticas a menudo vienen con estilos predeterminados que son apropiados para su propósito (por ejemplo, los encabezados y párrafos). Esto reduce la necesidad de escribir CSS adicional para lograr una presentación básica y coherente.

### ¿Qué es JavaScript?

1.-Describe 2 cosas que requieran de JavaScript en el navegador.

    1. **Interacciones Dinámicas con el DOM**: JavaScript permite manipular el DOM en tiempo real para crear interacciones dinámicas en la página web. Esto incluye actualizar el contenido, modificar el estilo de los elementos, responder a eventos del usuario, etc.
    2. **Validación de Formularios en el Lado del Cliente**: La validación de formularios en el lado del cliente es una práctica común para asegurarse de que los datos ingresados por los usuarios cumplen con los requisitos antes de enviarlos al servidor. Esto proporciona una respuesta inmediata al usuario y reduce la carga del servidor.

2.-¿Cómo se puede añadir JavaScript a un documento en HTML?

Se añade Javascript a un documento HTML empleando el elemento ```<script>```.

#### **Fuentes Consultadas:**

1. [¿Cómo empiezo a diseñar mi sitio web?](https://developer.mozilla.org/es/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding)
2. [Semántica](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
3. [¿Qué es JavaScript?](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
4. *Algunos bloques especificados fueron con el apoyo de ChatGPT*
