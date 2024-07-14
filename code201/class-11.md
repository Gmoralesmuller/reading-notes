# Lectura 11: Audio, video, imágenes

## Contenido de audio y video

### 1. Explica cómo la capacidad de utilizar video y audio en la web ha ido evolucionando desde el comienzo de los 2000.

A principios de los 2000, la reproducción de video y audio en la web era limitada y requería plugins como Flash. Esto significaba que no todos los navegadores podían reproducir contenido multimedia de forma nativa. Con el tiempo, los estándares web como HTML5 introdujeron elementos como ```<video>``` y ```<audio>```, permitiendo una reproducción más universal y sin necesidad de plugins adicionales.

### 2. Describe el uso de los atributos src y controls en el elemento ```<video>```

1. src: Este atributo especifica la URL del archivo de video que se quiere reproducir. Es decir, le indica al navegador dónde encontrar el video.
2. controls: Este atributo muestra los controles de reproducción estándar del navegador (play, pause, volumen, etc.) dentro del elemento de video.

### 3. ¿Por qué es importante tener contenido de respaldo en el elemento ```<video>```?

El contenido de respaldo, generalmente en formato .webm o .ogg, es esencial por varias razones:

* No todos los navegadores soportan los mismos formatos de video. El contenido de respaldo asegura que el video se pueda reproducir en la mayor cantidad de dispositivos posibles.
* Los usuarios con discapacidades visuales pueden utilizar lectores de pantalla para acceder al contenido de respaldo, como una descripción textual del video.

### 4. Escribe una historia corta en donde ```<audio>``` y ```<video>``` son personajes. A Complete Guide To Grid

Audio y Video eran dos elementos HTML que vivían en un mundo llamado página web. Audio era muy tímido y solo quería reproducir sonidos suaves de fondo, mientras que Video era una estrella que quería llamar la atención con sus animaciones y efectos especiales. Un día, el diseñador web los colocó juntos en una misma página. Al principio, no se llevaban bien. Video siempre quería ser el centro de atención, mientras que Audio prefería pasar desapercibido. Sin embargo, con el tiempo, aprendieron a trabajar juntos y crearon una experiencia de usuario increíble.

### 5. ¿En qué se diferencia el layout Grid del Flex?

* Flexbox: Diseñado principalmente para organizar elementos en una sola dimensión (fila o columna). Es ideal para crear layouts simples y responsivos.
* Grid: Diseñado para crear layouts más complejos en dos dimensiones (filas y columnas). Permite un control más preciso sobre el posicionamiento de los elementos y es ideal para crear diseños de cuadrícula.

### 6. Grid container, grid item, y grid line son algunos de los términos importantes que se deben entender al utilizar Grid. Por favor describe estos términos en unas pocas frases

* *Grid container:* El elemento padre que define la cuadrícula.
* *Grid item:* Cada elemento hijo dentro del contenedor de la cuadrícula.
* *Grid line:* Las líneas imaginarias que definen las filas y columnas de la cuadrícula.

## Imágenes Responsivas

### 1. Además de hacer que un sitio se vea atractivo visualmente en diferentes tamaños de pantalla, ¿por qué los desarrolladores deberían hacer imágenes responsivas?

Más allá de la estética, las imágenes responsivas ofrecen múltiples beneficios:

* Las imágenes se cargan más rápido en dispositivos móviles, lo que reduce el tiempo de carga de la página y mejora la experiencia del usuario.
* Al cargar solo la imagen necesaria para cada dispositivo, se reduce el consumo de datos, lo cual es especialmente importante para usuarios con conexiones lentas
* Los motores de búsqueda valoran los sitios web con tiempos de carga rápidos y una buena experiencia de usuario, lo que puede mejorar tu posicionamiento en los resultados de búsqueda.
* Las imágenes responsivas se adaptan a diferentes dispositivos y tamaños de pantalla, lo que las hace más accesibles para personas con discapacidades visuales.

### 2. Define los siguientes atributos de ```<img>```: ```srcset``` y ```sizes```. Escribe un ejemplo de cómo se usan.

1. srcset: Este atributo especifica una lista de diferentes versiones de la misma imagen, cada una con un ancho específico. El navegador seleccionará la imagen más adecuada según el ancho de la pantalla del dispositivo.
2. sizes: Este atributo define cómo se va a mostrar la imagen en diferentes tamaños de viewport. Se utiliza en conjunto con srcset para proporcionar al navegador más información sobre cómo elegir la imagen correcta.

### 3. ¿Cómo es que ```srcset``` es más útil para las imágenes responsivas que CSS o JavaScript?

Por las siguientes razones:

* Es una característica nativa de HTML, lo que significa que los navegadores modernos lo soportan de forma nativa y pueden optimizar la carga de imágenes de manera eficiente.
* Es más semántico que una solución basada en CSS o JavaScript, ya que indica claramente la intención del desarrollador de proporcionar diferentes versiones de una imagen para diferentes tamaños de pantalla.
* Es muy flexible y se puede combinar con otras técnicas de optimización de imágenes, como WebP o AVIF, para obtener resultados aún mejores.
* Al centralizar la gestión de las imágenes responsivas en el atributo ```srcset```, se facilita el mantenimiento y actualización del código.

### **Fuentes Consultadas:**

1. [Contenido de audio y video](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
2. [A complete Guide To Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
3. [Imágenes Responsivas](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
4. *Este documento fue realizado con el apoyo de Gemini*