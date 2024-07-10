# Read 03: Listas en HTML, Control de flujo en Js, y CSS: Box Model

## Aprende HTML

### 1. ¿Cuándo se puede utilizar una lista no ordenada en tu documento HTML?

Se puede utilizar cuando los elementos de la lista no tienen un orden específico o jerarquía.
Ejemplo:
    -Menús de navegación
    -Listas de características o beneficios
    -Listas de tareas
    -Listas de elementos de igual importancia

### 2. ¿Cómo cambias el estilo bullet de la lista de elementos no ordenados?

Se puede cambiar el estilo bullet de una lista no ordenada utilizando la propiedad `list-style-type` en CSS. Algunos valores comunes para esta propiedad son:
    -`disc` (el valor predeterminado)
    -`circle`
    -`square`
    -`none` (sin bullets)

### 3. ¿Cuándo debes usar una lista ordenada o lista no ordenada en tu documento HTML?

Lista ordenada (```<ol>```): Se debe usar cuando el orden de los elementos es importante.
Por otro lado, la lista no ordenada (```<ul>```) Se puede utilizar cuando los elementos de la lista no tienen un orden específico o jerarquía.

### 4. Describe dos formas en las que puedes cambiar los números en los elementos de la lista proporcionados por una lista ordenada

La primera forma es cambiando el tipo de numeración con CSS:

Se puede cambiar el tipo de numeración de una lista ordenada utilizando la propiedad list-style-type en CSS. Algunos valores comunes son:

- 'decimal' (el valor predeterminado)
- 'lower-alpha' (letras minúsculas)
- 'upper-alpha' (letras mayúsculas)
- 'lower-roman' (números romanos minúsculos)
- 'upper-roman' (números romanos mayúsculos)

La segunda forma es cambiando el número de inicio de la lista.
Se puede cambiar el número de inicio de una lista ordenada utilizando el atributo `start` en el elemento ```<ol>```.
Ejemplo:

```html
    <ol start="5">
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
    </ol>

```

## Aprende CSS

### 1. Describe las propiedades de margin y padding en CSS como si fueran los personajes de una historia. ¿Cuál es su rol en la historia: “El Box Model”?

Había una vez, en el reino de CSS, una caja mágica llamada "El Box Model". Esta caja tenía cuatro guardianes principales que mantenían el equilibrio y la armonía dentro de sus fronteras: margin, border, padding, y content.

Margin era el guardián de los límites exteriores. Su tarea era proteger la caja de sus vecinos, asegurándose de que ninguna otra caja se acercara demasiado. Margin era como el espacio vacío que rodeaba a la caja, creando un espacio de respeto y manteniendo a raya cualquier intrusión.

Padding, por otro lado, era el protector interno. Se encargaba de mantener el contenido de la caja cómodo y seguro, proporcionando un acolchado entre el contenido y el borde de la caja. Padding se aseguraba de que el contenido no se sintiera agobiado por los límites de la caja, dándole un poco de espacio para respirar.

Mientras Margin se ocupaba del exterior y Padding del interior, ambos trabajaban juntos para garantizar que la caja siempre estuviera bien presentada y funcional, permitiendo a los diseñadores crear páginas web armoniosas y bien organizadas.

### 2. Enumera y describe las cuatro partes de un box del elementos HTML según el box model

Content (Contenido): Este es el núcleo de la caja, donde se encuentra el contenido real, como texto, imágenes, videos, etc. Es la parte más interna del box model y la que los usuarios ven y con la que interactúan directamente.

Padding (Relleno): Rodeando el contenido, el padding proporciona un espacio adicional dentro de la caja. Este espacio crea un amortiguador entre el contenido y el borde de la caja, asegurando que el contenido no se sienta apretado contra los límites.

Border (Borde): Justo fuera del padding se encuentra el border. El border es el contorno de la caja y puede tener diferentes grosores, colores y estilos. Define claramente los límites de la caja y le da una apariencia definida.

Margin (Margen): Finalmente, rodeando el border está el margin. El margin es el espacio exterior que separa la caja de otros elementos en la página. Es un espacio vacío que garantiza que las cajas no se amontonen unas contra otras, manteniendo una disposición ordenada y espaciosa.

## Aprende JS

### 1. ¿Qué tipos de datos puedes almacenar en un Array?

En un array de JavaScript puedes almacenar cualquier tipo de dato, incluyendo:

-Números: enteros, flotantes.
-Cadenas de texto: "Hola", "123".
-Booleanos: true, false.
-Objetos: objetos literales, funciones.
-Arrays: incluso puedes crear arrays dentro de otros arrays (arrays multidimensionales).
-Valores nulos: null.
-Valores indefinidos: undefined.

### 2. ¿El array people es un array de JavaScript válido? De ser así, ¿cómo puedo acceder a los valores almacenados? Y si no, ¿por qué?

```javascript
     const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];
```

Sí, el array people es un array de JavaScript válido. Es un array multidimensional, ya que cada elemento del array principal es a su vez otro array.
Para acceder a los valores, puedes utilizar la notación de corchetes doble.

```javascript
// Acceder al primer nombre (pete)
console.log(people[0][0]);

// Acceder a la edad de Smith
console.log(people[1][1]);

// Acceder al último elemento del tercer array (null)
console.log(people[2][3]);
```

### 3. Enumera cinco opreadores abreviados de asignación en javascript y describe lo que hacen

-"+=": Suma y asigna. Ejemplo: x += 5 es equivalente a x = x + 5.
-"-=": Resta y asigna. Ejemplo: y -= 3 es equivalente a y = y - 3.
-"*=": Multiplica y asigna. Ejemplo: z*= 2 es equivalente a z = z * 2.
-"/=": Divide y asigna. Ejemplo: a /= 4 es equivalente a a = a / 4.
-"%=": Módulo y asigna. Ejemplo: b %= 3 es equivalente a b = b % 3.

### 4. Lee el código a continuación, evalúa la últimaexpresión y explica cuál sería el resultado y por qué

```javascript
    let a = 10;
    let b = 'dog';
    let c = false;

 // evalúa esto
 (a + c) + b;
```

-(a + c): 10 (a) + false (c) es igual a 10.
-(a + c) + b: 10 + "dog" es igual a "10dog".
Resultado: La expresión concatenará el número 10 con la cadena "dog", resultando en la cadena "10dog".

### 5. Describe un ejemplo cotidiano de por qué una declaración condicional se debería usar en un programa en JavaScript

En el siguiente codigo se muestra un ejemplo cotidiano donde se emplea una declaración condicionl. Imaginemos que estamos creando un programa para un semáforo. Se necesitará una declaración condicional para cambiar el color del semáforo según la situación; ya sea, detenerse, precaución y avanzar. Si no es la primera condición entonces pasara a la siguiente.

```javascript
if (luzRoja) {
  console.log("Detenerse");
} else if (luzAmarilla) {
  console.log("Precaución");
} else {
  console.log("Avanzar");
}
```

### 6. Da un ejempo de por qué un Bucle es últil en JavaScript

Un bucle es útil cuando se necesita repetir una tarea varias veces. Por ejemplo, imaginemos que se quiere mostrar los números del 1 al 10 en la consola. En el caso del ejemplo, el bucle 'for' se encargará de repetir el código dentro de él 10 veces, incrementando el valor de i en cada iteración.
Ejemplo:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### **Cosas de las que quiero saber más**

### **Fuentes Consultadas:**

1. [Lista ordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
2. [Lista no ordenada](https://developer.mozilla.org/es/docs/Web/HTML/Element/ul)
3. [The Box Model](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Arrays](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays)
5. [Operadores y expresiones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators)
6. [Condicionales](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
7. [Bucles](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Looping_code)
8. *Este documento fue realizado con el apoyo de ChatGPT*