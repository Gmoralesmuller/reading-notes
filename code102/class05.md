# CSS

## 1. ¿Cuál es el propósito de CSS?

# Propósito de CSS

CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para controlar el aspecto visual y la presentación de páginas web. Su propósito principal es separar el contenido de la presentación, permitiendo a los desarrolladores web definir cómo se verá el contenido HTML en un navegador.

# Formas de insertar CSS en tu proyecto

Hay tres formas principales de insertar CSS en un proyecto web:

1. **CSS Externo**: En esta técnica, el CSS se almacena en archivos separados con extensión `.css` y se enlaza al HTML utilizando la etiqueta `<link>` en el `<head>` del documento HTML.

   ```html
   `<head>
       <link rel="stylesheet" href="estilos.css">
   </head>`

## 2. ¿Cuáles son las tres formas de insertar CSS en tu proyecto?

  * CSS Interno: Con esta técnica, el CSS se coloca dentro de la etiqueta **style** en el **head** del documento HTML. Esto permite que el CSS sea específico para una página individual.
  * CSS Inline: Aplicando estilos directamente a elementos HTML utilizando el atributo style.
  * CSS Estilo en linea.

## 3. Escribe un ejemplo de una regla CSS que daría texto rojo a todos los elementos `<p>`.

`p {
    color: red;
}`