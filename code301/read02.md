# Lectura 02: State y Props

## React Lifecycle

### 1.Según el diagrama, ¿qué sucede primero, el ‘render’ o el ‘componentDidMount’?

Primero sucede el render; ya que es el método mas importante y es llamado inicialmente para crear la representación del componente en el DOM. Posterior a ello, sucede el componentDidMount. En el caso de este método se invoca una vez que el componente y sus hijos se han renderizado por primera vez en el DOM. 

### 2.¿Qué es lo primero que sucede en el ciclo de vida de React?

Lo primero que sucede es la creación de la instancia del componente. Esto ocurre cuando el componente se declara y se monta en el DOM. Durante esta fase, se llama al constructor del componente, si está definido.

### 3.Coloca las siguientes cosas en el orden en que suceden: componentDidMount, render, constructor, componentWillUnmount, React Updates

1. constructor: Se inicializan el estado y se enlazan los métodos.
2. render: Se crea la representación inicial del componente.
3. componentDidMount: Se realizan tareas de inicialización después del primer renderizado.
4. React Updates: Se desencadenan cuando cambia el estado o las props del componente, lo que provoca un nuevo renderizado.
5. componentWillUnmount: Se ejecuta justo antes de que el componente sea eliminado del DOM, permitiendo realizar tareas de limpieza.

### 4.¿Qué hace el componentDidMount?

Es un método clave en el ciclo de vida de un componente de React y se utiliza para realizar tareas de inicialización y configuración después de que el componente se haya renderizado por primera vez en el DOM.

## React State vs Props

### 1.¿Qué tipo de cosas puedes enviar mediante props?

Se puede enviar cualqueir tipo de Datos. Por ejemplo: arrays, funciones, objetos, etc.

### 2.¿Cuál es la mayor diferencia entre props y state?

Mientras que los props son inmutables desde la perspectiva del componente hijo. El State es mutable dentro del componente. Este se utiliza para almacenar datos que pueden cambiar a los largo de la vida del componente. Por otro lado, los props sirven para pasar datos de un componente padre a sus hijos y no deben ser modificados directamente por el hijo.
En conclusión, los props son datos de entrada que son pasados de padres a hijos. Mientras que los State son datos internos del componente, que pueden ser cambiados y provocar re-renderizados.

### 3.¿Cuándo volvemos a renderizar nuestra aplicación?

React re-renderiza un componente (y sus hijos) cuando:

- Se cambia un state.
- Se cambia los props.
- Se fuerza un re-renderizado (mediante forceUpdate)

### 4.¿Cuáles son algunos ejemplos de cosas que podríamos almacenar en el state?

El state se utiliza para almacenar datos que pueden cambiar a lo largo de la vida del componente. Como por ejemplo: valor de un input, estado de un formulario, datos cargados de una API, contadores, etc.

#### Cosas de las que quiero saber más

##### Fuentes consultadas

1. [React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)
2. [React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)
3. *Algunas respuestas tienen conceptos generados por inteligencia artificial Gemini*