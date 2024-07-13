# Lectura 07: Programación orientada a objetos, Tablas en HTML

## Domain Modeling

### 1. Explica por qué necesitamos los modelos de dominio

Los modelos de dominio son representaciones abstractas de un área de conocimiento específico; es decir, una forma de visualizar y comprender un problema o un conjunto de conceptos relacionados. Estos modelos son fundamentales por las siguientes razones:

* Sirven como un lenguaje común entre los desarrolladores, los analistas y los clientes. Al tener un modelo compartido, todos entienden los mismos conceptos y términos, lo que reduce la posibilidad de malentendidos y facilita la comunicación.
* Actúan como una guía para el diseño de la aplicación. Al modelar el dominio, se identifican las entidades, sus atributos y las relaciones entre ellas, lo que permite crear una estructura de software que refleja fielmente el problema del negocio.
* Facilitan la evolución del software a lo largo del tiempo. Si los requisitos cambian, el modelo de dominio se puede actualizar y, a partir de él, se pueden realizar los cambios necesarios en el código.
* Permiten identificar componentes reutilizables, ya que conceptos similares en diferentes partes del dominio pueden ser representados por las mismas estructuras de datos y operaciones.
* Ayudan a detectar errores y inconsistencias en el diseño, ya que obligan a analizar a fondo el dominio del problema.

## Conceptos básicos de las tablas HTML

### 1. ¿Por qué no se debe utilizar tablas para los layout de página?

Por las siguientes razones: 

* Las tablas están diseñadas para mostrar datos relacionados en filas y columnas, no para crear estructuras visuales. Utilizarlas para layout confunde a los navegadores y a los usuarios sobre el verdadero propósito del contenido. Esto afecta la semántica. 
* Los lectores de pantalla y otros asistentes tecnológicos tienen dificultades para interpretar las tablas utilizadas para diseño, lo que dificulta la accesibilidad para personas con discapacidades.
* Los diseños basados en tablas son más difíciles de mantener y modificar. Un pequeño cambio en la estructura puede afectar a todo el diseño.
* Los diseños basados en tablas son menos flexibles y adaptables a diferentes tamaños de pantalla y dispositivos.
*En algunos casos, los diseños basados en tablas pueden afectar negativamente al rendimiento de la página, especialmente en dispositivos móviles.

### 2. Enumera y describe 3 diferentes elementos semánticos HTML utilizados en un ```<table>```

1. ```<thead>```: Representa la cabecera de la tabla. Contiene una fila (```<tr>```) con las etiquetas ```<th>``` (table header) para definir los encabezados de cada columna.
2. ```<tbody>```: Representa el cuerpo de la tabla. Contiene una o más filas (```<tr>```) con las etiquetas ```<td>``` (table data) para definir las celdas de datos.
3. ```<tfoot>```: Representa el pie de tabla. Contiene una fila (```<tr>```) con las etiquetas ```<th>``` o ```<td>``` para definir los pies de columna o cualquier información de resumen.

## Introducción a los Constructores

### 1. ¿Qué es un constructor y cuáles son las ventajas de utilizarlo?

Un constructor es una función especial en JavaScript que se utiliza para crear y inicializar objetos. Es como un molde para crear objetos de un tipo específico. Cuando se invoca un constructor con la palabra clave new, se crea un nuevo objeto y se ejecuta el código dentro del constructor para asignar valores iniciales a las propiedades del objeto.

Ventajas de utilizar constructores:

* Puedes crear múltiples objetos con las mismas propiedades y métodos, ahorrando tiempo y esfuerzo.
* Agrupa la lógica de creación y configuración de objetos en un solo lugar, haciendo el código más legible y mantenible.
* Los constructores son fundamentales para implementar la herencia prototípica en JavaScript, lo que permite crear jerarquías de objetos y compartir propiedades y métodos entre ellos.

### 2. ¿Cómo es que el término this se diferencia cuando se utiliza en un objeto literal y cuando se utiliza en un constructor? Herencia prototípica Prototipos nativos

* Objeto literal: Cuando this se usa dentro de un objeto literal, se refiere al objeto literal mismo. Es decir, this apunta al objeto que se está definiendo en ese momento.
* Constructor: Dentro de un constructor, this se refiere al nuevo objeto que se está creando. Al asignar valores a propiedades dentro del constructor, estás modificando las propiedades de este nuevo objeto.

**Herencia prototípica y Prototipos nativos**

La herencia prototípica es un mecanismo en JavaScript que permite crear nuevos objetos basados en otros objetos existentes, llamados prototipos. Los prototipos son como plantillas que contienen propiedades y métodos que pueden ser heredados por otros objetos.

**Prototipos nativos**

JavaScript tiene muchos objetos nativos que actúan como prototipos para los objetos que creamos. Por ejemplo, el objeto Array es el prototipo para todos los arrays en JavaScript, y el objeto Object es el prototipo para todos los objetos. Esto significa que todos los arrays y objetos heredan propiedades y métodos de estos prototipos.

### 3. Explica los prototipos y las herencias por medio de una analogía sobre tu experiencia laboral previa.

Hace unos meses trabajaba en una tienda de productos orgánicos la cual es como un prototipo. Era la base de todo lo que ocurría en la tienda, se establecían reglas, los productos que se vendían, la atención al cliente y la forma de organizar el espacio. En aquel trabajo tenia dos compañeras. Ellas y yo seriamos como objetos creados apartir del prototipo; es decir, la tienda de productos orgánicos. Nosotras heredamos características y conocimientos de ese prototipo.
Por ejemplo:

* Conocimiento sobre los productos: sabiamos sus beneficios, su origen y cómo venderlo.
* Atención al cliente: Teníamos un speech con el cual siempre abordabamos al cliente.
* Conocimiento de las políticas de la tienda: Sabiamos cómo manjear devoluciones, cambios, formas de atender.

En la tienda eventualmente llegaba nuestro jefe el cual es como un prototipo superios, al ser encargado de la tienda. Nosotras heredabamos de el conocimientos sobre algunas características de la tienda, la manera como atender los problemas o los clientes, la forma de hacer inventario y pedidos de productos.

### **Fuentes Consultadas:**

1. [Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)
2. [Conceptos básicos de las tablas HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Tables/Basics)
3. [Introducción a los Constructores](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)
4. *Este documento fue realizado con el apoyo de Gemini*
