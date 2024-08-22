# Lectura 01: Introducción a React y los Componentes

## Component-Based Architecture

### 1.¿Qué es un “componente”?

Un componente es un conjunto modular, portátil, reemplazable y reutilizable de funcionalidades bien definidas que encapsula su implementación y la exporta como una interfaz de nivel superior.

Un componente es un objeto de software, destinado a interactuar con otros componentes, encapsulando cierta funcionalidad o un conjunto de funcionalidades. Tiene una interfaz claramente definida y se ajusta a un comportamiento recomendado común a todos los componentes dentro de una arquitectura.

Un componente de software puede definirse como una unidad de composición con una interfaz especificada contractualmente y dependencias contextuales explícitas únicamente. Es decir, un componente de software puede implementarse de forma independiente y está sujeto a la composición por parte de terceros.

### 2.¿Cuáles son las características de un componente?

- Reutilización : los componentes suelen estar diseñados para reutilizarse en distintas situaciones y aplicaciones. Sin embargo, algunos componentes pueden estar diseñados para una tarea específica.

- Reemplazable : los componentes pueden sustituirse libremente por otros componentes similares.

- No específico del contexto : los componentes están diseñados para funcionar en diferentes entornos y contextos.

- Extensible : un componente se puede ampliar a partir de componentes existentes para proporcionar un nuevo comportamiento.

- Encapsulado : el componente AA representa las interfaces que permiten al llamador utilizar su funcionalidad y no expone detalles de los procesos internos ni de ninguna variable o estado interno.

- Independiente : los componentes están diseñados para tener dependencias mínimas de otros componentes.

### 3.¿Cuáles son las ventajas de utilizar una arquitectura basada en componentes?

- Facilidad de implementación : a medida que aparecen nuevas versiones compatibles, es más fácil reemplazar las versiones existentes sin afectar a los demás componentes ni al sistema en su totalidad.

- Costo reducido : el uso de componentes de terceros le permite distribuir el costo de desarrollo y mantenimiento.

- Facilidad de desarrollo : los componentes implementan interfaces conocidas para proporcionar una funcionalidad definida, lo que permite el desarrollo sin afectar otras partes del sistema.

- Reutilizable : el uso de componentes reutilizables significa que pueden emplearse para distribuir el costo de desarrollo y mantenimiento entre varias aplicaciones o sistemas.

- Modificación de la complejidad técnica : un componente modifica la complejidad mediante el uso de un contenedor de componentes y sus servicios.

- Confiabilidad : la confiabilidad general del sistema aumenta porque la confiabilidad de cada componente individual mejora la confiabilidad de todo el sistema a través de la reutilización.

- Mantenimiento y evolución del sistema : Fácil de cambiar y actualizar la implementación sin afectar al resto del sistema.

- Independiente − Independencia y conectividad flexible de componentes. Desarrollo independiente de componentes por parte de diferentes grupos en paralelo. Productividad para el desarrollo de software y el desarrollo de software futuro.

## What is Props and How to Use it in React

### 1.¿Qué significa “props”?

El término “props” es una abreviatura de “propiedades”, que se refiere a las propiedades de un objeto.  El concepto de props se basa en componentes. Props es una abreviatura de "propiedades" en inglés. En el contexto de React, las props son una forma de pasar datos desde un componente padre a sus componentes hijos. Son como atributos en HTML, pero mucho más flexibles, ya que pueden contener cualquier tipo de dato de JavaScript (strings, números, objetos, arrays, funciones, etc.).

### 2.¿Cómo se utilizan los props en React?

Los props se utilizan para hacer que los componentes sean reutilizables y configurables. Por ejemplo, imagina un componente ```<Button>```. Puedes pasar diferentes props a este componente para personalizar su apariencia y comportamiento:

```JavaScript
function Button(props) {
  return <button>{props.label}</button>;
}

// Usando el componente Button con diferentes props
<Button label="Guardar" />
<Button label="Cancelar" className="danger" />
```

### 3.¿Cuál es el flujo de los props?

El flujo de los props es unidireccional, desde los componentes padres hacia los componentes hijos. Esto significa que un componente padre puede pasar datos a sus hijos, pero los hijos no pueden modificar esos datos y pasarlos de vuelta al padre.

### Cosas de las que quiero saber más

#### Fuentes consultadas

1. [Component-Based Architecture](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)
2. [How to Use Props in ReactJS](https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/)
3. *Algunas respuestas tienen conceptos generados por inteligencia artificial Gemini*