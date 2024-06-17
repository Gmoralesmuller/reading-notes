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

    - Sin filtrar por licencia:

Esta opción significa que Google mostrará todas las imágenes relevantes para tu búsqueda sin considerar las restricciones de derechos de autor. Es importante tener en cuenta que muchas de estas imágenes pueden estar protegidas por derechos de autor y no ser adecuadas para su uso sin permiso.

   **- Licencias Creative Commons:**

Las licencias Creative Commons son un conjunto de licencias legales que los creadores de contenido pueden aplicar a su trabajo. Estas licencias permiten a otros usuarios utilizar, compartir y modificar el contenido de manera legal, bajo ciertas condiciones establecidas por el autor.
Al seleccionar esta opción, Google mostrará imágenes que están etiquetadas con licencias Creative Commons, lo que significa que el autor ha autorizado explícitamente el uso de su obra bajo ciertas condiciones especificadas en la licencia (como atribución requerida o uso no comercial).

    **- Licencias comerciales y otras:**

Esta opción generalmente incluye imágenes que están disponibles para uso comercial, lo que significa que se pueden utilizar en productos o servicios con fines lucrativos.
Además de las licencias comerciales, esta categoría puede incluir otras licencias específicas que los autores han asociado con sus imágenes, permitiendo diferentes usos según lo establecido por el creador.
Al elegir una opción como "Etiquetado para reutilización" dentro de las herramientas de búsqueda de Google Imágenes, estás filtrando las imágenes para mostrar aquellas que el autor ha marcado específicamente como permitidas para ciertos tipos de usos (como la reutilización en otros proyectos). Esto ayuda a reducir el riesgo de violar derechos de autor al utilizar imágenes de manera más segura y legalmente autorizada.

> Para ver las condiciones establecidas por el autor de una imagen, especialmente cuando se trata de licencias Creative Commons u otras formas de permisos específicos, puedes seguir estos pasos:

    1. En Google Imágenes:

Después de realizar una búsqueda y aplicar el filtro de licencias (por ejemplo, seleccionando "Etiquetado para reutilización"), haz clic en la imagen que te interese para verla en tamaño completo.
Debajo de la imagen, deberías encontrar un enlace que dice algo como "Detalles" o "Ver página de origen". Haz clic en este enlace para ir a la página web donde se encuentra alojada la imagen originalmente.

    2. En la página de origen:

Una vez en la página de origen, busca información sobre la licencia o los términos de uso proporcionados por el autor. Esta información suele estar cerca de la imagen o en la sección de pie de página del sitio web.
Algunos sitios web pueden tener una sección dedicada a los términos de uso, mientras que otros pueden indicar directamente junto a la imagen si está bajo una licencia Creative Commons u otra licencia específica.

    3. Leer la licencia Creative Commons:

Si la imagen está bajo una licencia Creative Commons, deberías ver el tipo de licencia específica (por ejemplo, CC BY, CC BY-SA, etc.) junto con un enlace a la descripción completa de la licencia.
Haz clic en el enlace de la licencia para leer los términos detallados. La página de Creative Commons te proporcionará información sobre lo que puedes y no puedes hacer con la imagen según la licencia seleccionada por el autor.
Atribución y cumplimiento de la licencia:

Si decides utilizar la imagen, asegúrate de cumplir con los términos de la licencia, lo cual generalmente incluye atribuir correctamente al autor de la imagen. Esto implica dar crédito de la manera especificada por la licencia (por ejemplo, incluir el nombre del autor, el título de la obra y un enlace a la licencia).
Al seguir estos pasos, podrás encontrar y entender las condiciones establecidas por el autor para el uso de la imagen, ayudándote a utilizarla de manera legal y respetuosa con los derechos de autor.

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
*5. ¿Qué es una Variable y por qué son importantes en JavaScript?

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
