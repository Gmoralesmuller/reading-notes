# **Read 02**

## Introduccion a HTML

### 1. ¿Por qué es importante utilizar elementos semánticos en nuestro HTML?

- Los elementos semánticos proporcionan una estructura clara del contenido que beneficia la navegación a los usuarios que dependen de tecnologías de asistencia.
- Los motores de busqueda utilizan la estructura del HTML para indexar y clasificar las páginas web. los elementos semánticos ayudan a los motores de busqueda a entender el contenido de la página mejorando la visibilidad y el posicionamiento en los resultados de busqueda.
-Hace que el código sea más legible y comprensible para los desarrolladores; ya que, facilida el mantenimiento y la colaboración en proyectos de desarrollo web.
-Los elementos semánticos estan estandarizados y son ampliamente reconocidos y utilizados, lo que asegura que el contenido se renderice de manera consistente en diferentes navegadores y dispositivos.
-Usar etiqueras semñanticas proporciona una estructura lógica y coherente que mejora la experiencia del usuario al hacer la página más intuitiva y fácil de navegar.

### 2. ¿Cuántos niveles de encabezado existen en HTML?

En HTML existen seis niveles de encabezado, que van del ```<h1>``` al ```<h6>```.

### 3. ¿Cuáles son algunos de los usos para los elementos ```<sup>``` y ```<sub>```?

Los elementos ```<sup>``` y ```<sub>``` en HTML se utilizan para representar texto en superíndice y subíndice, respectivamente.
Algunos ejemplos son:

**```<sup>``` (Superíndice)**

    1. Referencias y citas: Para indicar notas al pie de página, referencias bibliográficas o citas en documentos.

            ```html

            La teoría de la relatividad fue propuesta por Einstein<sup>[1]</sup>.

            ```

    2. Exponentes en matemáticas:

            ```html

            La fórmula del área del círculo es A = πr<sup>2</sup>.

            ```

    3. Indicadores de Registro y Marca: Para mostrar símbolos de marcas registradas (®) o marcas comerciales (™).

            ```html

            Coca-Cola<sup>®</sup> es una marca registrada.

            ```

**```<sub>```(Subíndice)**

    1. Fórmulas Químicas: Para representar fórmulas químicas, donde los números indican la cantidad de átomos de cada elemento.

            ```html

            La fórmula del agua es H<sub>2</sub>O.

            ```

    2. Subíndices en Matemáticas y Ciencia: Para representar subíndices en fórmulas matemáticas o científicas.

            ```html

            La serie de Fibonacci se define como F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>.

            ```

    3. Notación Tipográfica y Lingüística: Para ciertos símbolos tipográficos o fonéticos que requieren subíndices.

            ```html

            En fonética, el símbolo para una consonante dental es t<sub>d</sub>.

            ```

### 4. Al utilizar el elemento ```<abbr>```, qué atributo se debe añadir para proporcionar una ampliación del término?

Para proporcionar una ampliación del término al utilizar el elemento ```<abbr>```, se debe añadir el atributo title. Este atributo permite especificar la versión completa o una explicación del término abreviado.

## CSS

### 1. ¿De qué formas podemos añadir CSS a nuestro HTML?

Se puede añadir CSS a un documento HTML de tres formas:

    1. Inline: Los estilos se añaden directamente a los elementos HTML utilizando el atributo ```style```.
    Ejemplo:

            ```html
                        <h2 style="color: black; padding: 5px;">Título</h2>
            ```

    2. Estilos internos en el documento: Los estilos se añaden dentro de la etiqueta ```<style>``` en la sección ```<head>``` del documento HTML.
    Ejemplo:

            ```html
                <head>
                    <style>
                        h2 {
                        color: black;
                        padding: 5px;
                        }
                    </style>
                </head>
            ```

    3. Estilos externos: Los estilos se añaden en un archivo CSS separado y se vinculan al documento HTML utilizando la etiqueta ```<link>``` en la seccion ```<head>```.
    Ejemplo:

            ```html
                <head>
                    <link rel="stylesheet" href="styles.css">
                </head>
            ```

### 2. ¿Por qué deberíamos evitar utilizar estilos inline?

Se debe evitar utilizar estilos inline por las siguientes razones:

- Los estilos inline dificultan la gestión y actualización de los estilos, especialmente en los proyectos grandes.
- No se pueden utilizar estilos inline fácilmente en múltiples elementos o páginas. No se pueden reusar.
- Separar el contenido HTML del diseño CSS mejora la legibilidad y la organización del código.
- Los estilos inline tienen una especificidad muy alta, lo que puede causar problemas al interntar sobrescribir estilos con CSS externo o interno.

### 3. Revisa el código a continuación y responde a las siguientes preguntas:

```css

   h2 {
     color: black;
     padding: 5px;
   }

```

- ¿Qué representa el selector?

    El selector ```<h2>``` se refiere a todos los elementos ```<h2>``` en el documento HTML. Selecciona esos elementos para aplicarles los estilos definidos dentro de las llaves "{}".

- ¿Qué componentes son declaraciones CSS?

    Son las siguientes: color y padding. Las declaraciones en CSS estan compuestas por una propiedad y un valor (en este caso el valor seria black y 5px respectivamente), separados por dos puntos y terminador con un punto y coma.

- ¿Qué componentes se consideran propiedades?

    Se consideran como propiedades "color" y "padding". Las propiedades son características que se desea estilizar y se encuentran a la izquierda de los dos puntos en una declaración CSS.

## Javascript

### 1. ¿Qué tipo de dato es una secuencia de texto entre comillas simples?

En JavaScript, una secuencia de texto entre comillas simples (o dobles) es del tipo de dato String. Los Strings son utilizados para representar texto.
Ejemplo:

    ```javascript
        let texto = 'Hola, mundo';
    ```

### 2. Enumera 4 tipos de operadores en JavaScript.

1. Operadores aritméticos: Se utilizan para realizar operaciones matemáticas.
    Ejemplo: `+`, `-`, `*`, `/`, `%`.

    ```javascript
            let suma = 5 + 3; // 8
    ```
2. Operadores de comparación: Se utilizan para comparar dos valores.
    Ejemplo:  `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`.

    ```javascript
            let esIgual = (5 == '5'); // true
            let esEstrictamenteIgual = (5 === '5'); // false
    ```
3. Operadores de asignación: Se utilizan para asignar valores a variables.
    Ejemplo: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.

    ```javascript
            let x = 10;
            x += 5; // x ahora es 15
            x *= 2; // x ahora es 30
    ```
4. Operadores lógicos: Se utilizan para realizar operaciones lógicas.
    Ejemplo: `&&` (AND), `||` (OR), `!` (NOT).
    
    ```javascript
            let esVerdadero = (5 > 3 && 2 < 4); // true
            let esFalso = !(5 > 3); // false
    ```

### 3. Describe un problema práctico que puedes resolver con una función.

Imaginemos que tenemos un array de números y se necesita calcular la suma de todos los elementos. Podemos crear una función que tome el array como argumento y devuelva la suma de sus elementos.
Ejemplo:

    ```Javascript
    function calcularSuma(array) {
        let suma = 0;
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
        }
        return suma;
    }
    let numeros = [1, 2, 3, 4, 5];
    let resultado = calcularSuma(numeros);
    console.log('La suma de los elementos del array es:', resultado);

    ```

## Tomando decisiones en tu código - condicionales

### 1. Si una declaración if comprueba un *condición* y si resulta *verdadera*, entonces el código se ejecutará.

### 2. ¿Cuál es el uso del ```else if```?

El uso de 'else if' permite manejar múltiples condiciones y ejecutar diferentes bloques de código basados en cuál condición sea verdadera. El 'else if' se utiliza para especificar una nueva condición a probar si la condición anterior en un bloque if es falsa.

### 3. Enumera 3 tipos de operadores de comparación.

    - Igualdad: ==
    - Desigualdad: !=
    - Mayor que: >

### 4. ¿Cuál es la diferencia entre los operadores lógicos ```&&``` y ```||```?

    - '&' (AND lógico): Este operador devuelve true solo si ambas expresiones son verdaderas. Si cualquiera de las expresiones es falsa, devuelve false.
    - '||' (OR lógico): Este operador devuelve true si al menos una de las expresiones es verdadera. Si ambas expresiones son falsas, devuelve false.

#### **Fuentes Consultadas:**

1. [Introducción a HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML)
2. [Fundamentos de texto en HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
3. [Formato de texto avanzado](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
4. [Estructura de CSS](https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/How_CSS_is_structured)
5. [Fundamentos de Javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
6. [Tomando decisiones en tu código - Condicionales](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
7. [How to write a Git commit message](https://cbea.ms/git-commit/)
8. *Los ejemplos fueron  realizados con el apoyo de ChatGPT*