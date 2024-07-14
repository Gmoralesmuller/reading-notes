# Lectura 10: Depuración

## ¿Qué ha salido mal? Corrigiendo JS

### 1. Menciona algunas diferencias clave entre un Syntax Error y un Logic Error

* Syntax Error (Error de Sintaxis):

**Definición:** Ocurre cuando se viola alguna regla gramatical del lenguaje de programación. Es como cometer un error ortográfico en un texto.
**Ejemplo:** Olvidar un punto y coma, usar una palabra clave incorrecta, paréntesis desbalanceados.
**Detección:** El compilador o intérprete suele detectarlo inmediatamente y muestra un mensaje de error específico.
**Solución:** Corregir el error de escritura según las reglas del lenguaje.

* Logic Error (Error Lógico):

**Definición:** El código se ejecuta sin errores de sintaxis, pero el resultado obtenido no es el esperado. Es como hacer una operación matemática correcta pero con los números equivocados.
**Ejemplo:** Una condición en un bucle siempre es verdadera, una fórmula matemática está mal implementada.
**Detección:** Más difícil de identificar, ya que el programa se ejecuta sin generar excepciones. Se requiere un análisis cuidadoso del código y de los resultados.
**Solución:** Depurar el código paso a paso, utilizar herramientas de depuración, revisar la lógica de las operaciones y algoritmos.

### 2. Enumera algunos tipos de errores que has encontrado en las tareas de laboratorio anteriores y explica cómo fuiste capaz de corregirlos

1. Sintaxis: Errores de tipeo, falta de comas, paréntesis mal colocados, etc. Esta clase de error es muy frecuente cuando desarrollo mis laboratorios pero al final de terminar el código siempre doy una revición cada línea para cerciorarme que esta todo correcto.
2. Lógica: Bucles infinitos, condiciones incorrectas, cálculos erróneos, uso inadecuado de variables. En dos ocaciones se han producido esta clase de error, pero aprendí a como depurar paso a paso ejecutando el código línea por línea para obervar el valor de las variables y su flujo de ejecución. También buscaba agregar instrucciones para mostrar el valor de las variables en puntos claves del código.
3. Semántica: El código es sintácticamente correcto pero no realiza la tarea deseada. Pocas veces he tenido este error, sin embargo una forma que hallé para solucionarlo fue revisar el código para ver si realmente resolvía el problema planteado, así como verificar el algoritmo o la lógica si funcionaba de forma correcta hacia el objetivo planteado.

### 3. ¿Cómo este tema influye en tus metas a largo plazo?

Este tema me contribuye en lo siguiente:

1. Desarrollo de mi habilidad para la resolución de problemas; ya que la detección y correción de errores me ayuda a perfeccionar un pensamiento lógico y analítico.
2. Me ayuda a comprender mejor los lenguajes de programación; ya que, al identificar y corregir mis errores me ayuda a profundizar mis conocimientos en programación.
3. Al desarrollar más mi capacidad de resolver problemas cada vez ire resolviendo problemas más complejos lo cual eventualmente me proporcionara participar en proyectos de gran escala.

## El depurador de JS

### 1. ¿Cómo le describirías la herramienta de depuración de JavaScript y su función a una persona que recién comienza en el desarrollo de software?

Imagina que tenemos un juego de tetris y se quiere ver cómo encajan todas las piezas. La herramienta de depuración de JS es como una lupa que nos permite examinar con detenimiento cada pieza individualmente y ver como interactúa entre sí.
La herramienta de depuración sirve para encontrar errores, ver cómo funciona el código paso a paso; es decir, se puede ejecutar el código línea por línea y ver como cambian los valores de las variables. Esto permite entender mejor que esta haciendo el programa en cada parte y en general.

### 2. Define qué es un breakpoint

Un breakpoint es como una señal de alto en el código. Cuando llegas a un breakpoint, la ejecución del programa se detiene y puedes examinar el estado actual de tu aplicación. Es una herramienta muy útil para identificar dónde se producen los errores y entender el flujo de ejecución de tu código.

### 3. ¿Qué es el call stack?

El call stack muestra el orden en que se han llamado a las funciones y qué función esta esperando que otra termine.
Es importante; ya que, si existe un error en una función profunda dentro del código, el call stack muestra cómo llegaste hasta allí. Además, te ayuda a visualizar cómo se ejecutan las funciones y cómo se relacionan estas entre sí.

### **Fuentes Consultadas:**

1. [¿Qué ha salido mal? Corrigiendo JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_went_wrong)
2. [El depurador de JS](https://developer.mozilla.org/es/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_debugger)
3. *Este documento fue realizado con el apoyo de Gemini*