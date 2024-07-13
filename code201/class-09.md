# Lectura 09: Formularios y Events en JS

### 1. ¿Por qué los formularios son tan importantes en el desarrollo web?

Los formularios son elementos fundamentales por las siguientes razones:
* Permiten capturar información de los usuarios, como nombres, correos electrónicos, direcciones, etc., que es esencial para muchas aplicaciones web.
* Son la principal herramienta para que los usuarios interactúen con una aplicación web, ya sea para realizar compras, registrarse, enviar mensajes o solicitar información.
* Los datos recolectados a través de formularios pueden ser procesados y almacenados para su posterior análisis, lo que permite tomar decisiones basadas en datos.
* Los formularios permiten personalizar la experiencia del usuario, adaptando el contenido y las funcionalidades a las preferencias individuales.

### 2. Al diseñar un formulario, ¿cuáles son algunas de las cosas más importantes a tener en cuenta sobre la experiencia de usuario?

Algunas de las cosas más importantes a tener en cuenta son: 
* Las preguntas deben ser claras y concisas, evitando términos técnicos o jerga.
* Cada campo debe tener una etiqueta clara y concisa que indique el tipo de información que se solicita.
* Es fundamental implementar mecanismos de validación para asegurar que los datos ingresados por el usuario sean correctos y completos.
* En caso de que el usuario cometa un error, los mensajes de error deben ser claros y concisos, indicando qué es lo que está mal.
* El formulario debe adaptarse a diferentes tamaños de pantalla para garantizar una buena experiencia de usuario en dispositivos móviles y tablets.
* Los datos recopilados a través de formularios deben ser protegidos de forma adecuada para evitar accesos no autorizados.

### 3. Enumera 5 elementos de los formularios y explica su importancia.

1. Etiquetas (labels): Son las descripciones que acompañan a cada campo del formulario. Su función es indicar al usuario qué tipo de información se espera en ese campo. Son importantes porque garantizan que el usuario comprenda claramente qué información se le solicita.
2. Campos de entrada (input): Son los elementos donde el usuario ingresa la información. Existen diferentes tipos de campos de entrada, como texto, contraseña, correo electrónico, fecha, etc., cada uno diseñado para un tipo específico de dato. Gracias a ellos se permite capturar la información del usuario de manera estructurada.
3. Botones: Los botones se utilizan para enviar el formulario, restablecer los campos o realizar otras acciones. Son importantes porque proporcionan una interfaz clara para que el usuario interactúe con el formulario.
4. Mensajes de error: Se muestran cuando el usuario ingresa datos inválidos o incompletos. Estos ayudan al usuario a corregir los errores y completar el formulario correctamente.
5. Elementos de validación: Son elementos invisibles que se utilizan para validar los datos ingresados por el usuario en tiempo real, como expresiones regulares o validaciones de longitud. Asimismo, aseguran la calidad de los datos recopilados y evitan errores en el procesamiento posterior.

## Introducción a los eventos

### 1. ¿Cómo describirías los event a un amigo sin conocimiento técnico?

Un evento es como algo que sucede en una habitación, como presionar un interruptor de la luz. Cuando ocurre un evento, podemos programar que suceda algo, como encender la luz. En programación web, los eventos son acciones que el usuario realiza en una página, como hacer clic en un botón, mover el mouse o presionar una tecla. Al programar estos eventos, podemos hacer que la página web reaccione de forma dinámica y personalizada.

### 2. Al utilizar el método addEventListener(), ¿cuáles son los 2 arguments que debes proporcionar?

1. El tipo de evento: Esto indica qué tipo de evento queremos detectar, como "click", "mouseover", "keydown", etc.
2. La función a ejecutar: Esta es la función que se ejecutará cuando ocurra el evento.

### 3. Describe el objeto event. ¿Por qué el target dentro del objeto event es útil?

Esta propiedad del objeto event nos indica en qué elemento específico ocurrió el evento. 

### 4. ¿Cuál es la diferencia entre event bubbling y event capturing?

El event bubbling es como una burbuja que sube desde el fondo hacia la superficie: el evento se propaga desde el elemento más interno hacia los elementos padres. Es como si la noticia de que se presionó un botón se fuera transmitiendo hacia arriba en la jerarquía de elementos. Este evento es el comportamiento por defecto y se utiliza en la mayoría de los casos.

El event capturing es lo contrario: el evento se propaga desde los elementos padres hacia los elementos más internos. Es como si la noticia de que se va a presionar un botón se transmitiera hacia abajo en la jerarquía de elementos antes de que ocurra el evento. Se utiliza cuando queremos realizar acciones antes de que el evento llegue al elemento objetivo, como por ejemplo para prevenir un comportamiento por defecto.

### **Fuentes Consultadas:**

1. [Formularios en HTML](https://developer.mozilla.org/es/docs/Learn/Forms)
2. [Mi primer formulario HTML](https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form)
3. [Cómo estructurar un formulario HTML](https://developer.mozilla.org/es/docs/Learn/Forms/How_to_structure_a_web_form)
4. [Introducción a los Eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
5. *Este documento fue realizado con el apoyo de Gemini*