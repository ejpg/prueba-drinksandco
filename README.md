# drinksandco

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

------------------------------------------------------------------------------------------------------------------

Bienvenido a la prueba técnica de Drinks and Co para front-end developers.

Hemos dividido la prueba técnica en dos áreas. Una primera parte más teórica, y una segunda parte práctica donde te
pediremos que programes una pequeña webapp.

Por último, te agradecermos cualquier feedback sobre esta prueba.

¡Buena suerte!

# Parte 1

A continuación te planteamos

- **¿En CSS existen varias unidades de medida (px, em, rem, vh, vw…). ¿Podrías explicarnos en qué casos utilizarias cada una?**
Los que generalmente utilizo son
px: en detalles como paddings o margenes entre contenedores de elementos
em y rem: dependiendo de cual se este utilizando en el proyecto. Personalmente prefiero rem ya que toma siempre el mismo valor como referencia. Estas unidades la utilizaria en caso de trabajar con elementos que incluyan texto, por ejemplo: tamaños de fuente, paddings y margins en botones, inputs, links, etc.
vh y vw: estos dos elementos los utilizo al definir el alto y ancho de los elementos mas generales de la pagina, por ejemplo: sidenav, ancho del contenedor general de la pagina, header, footer, etc. Ya que últimamente todos los dispositivos tienen grandes resoluciones aunque no el mismo tamaño de pantalla, debemos trabajar con unidades de medida como estas. Cabe destacar que solamente las utilizo en situaciones especificas, generalemente este trabajo se lo dejo al grillado del framework de maquetación que se este utilizando en el proyecto.

- **Teniendo en cuenta el siguiente código, ¿de qué color será el texto `I am awesome`? ¿Por qué?:**
```html
<style>
  ul.shopping-list li.favorite span {
    color: blue;
  }

  ul#awesomeProduct li {
    color: red;
  }
</style>
```
```html
<ul id="awesomeProduct" class="shopping-list">
  <li><span>Milk</span></li>
  <li id="buyThis" class="favorite"><span class="highlight">I am awesome</span></li>
</ul>
```

RESPUESTA: El color del texto seria azul, ya que el texto esta mas cercano al span que al li. Mientras mas especifico el elemento al que llama css, mas prioridad le da.

- **En Javascript puedes testear la igualdad mediante doble igual o triple igual (`==` `===`). ¿Sabrías decirnos diferencias y ventajas de cada uno?**
RESPUESTA: Con la triple igualdad tambien verifica que el tipo de dato sea el mismo, no solo el valor.
- La ventaja de la triple igualdad es que al saber que tipo de dato es evitamos errores al llamar funciones. Por ej: si en una condicion utilizaramos doble igualacion y esperabamos un valor string al cual le queriamos aplicarle la funcion split, si el valor llegara a ser numerico el codigo nos dara error ya que esta funcion solo esta disponible para valores string.
- En general no tiene muchas ventajas utilizar la doble igualacion, es una mejor practica de programacion utilizar la triple. En los únicos casos que la utilizaría, sería cuando voy a recibir un dato el cual no se de que tipo será y no tengo utilizar alguna funcion especifica de su tipo.

- **Nos gustaría que el siguiente código mostrara `hey Maria`, pero nos devuelve `hey Raynold`. ¿Cómo lo solucionarias?**
```js
function getName(person) {
if (person == { name: 'Maria' }) {
return 'hey Maria'
} else {
return 'hey Raynold'
}
}
getName({ name: 'Maria' })
```

RESPUESTA: No solo hay una solución para este problema. Algunas de ellas serian:
- Comparar los JSON.parse de los objetos, ya que de la manera planteada en el ejemplo no podemos comparar objetos.
- Que la funcion reciba un string, se compara directamente el valor con 'Maria' y al llamar la funcion solo enviamos ese parametro.

# Parte 2

En Drinks and Co estamos rediseñando nuestro ecommerce y para evaluar tus conocimientos en front-end, queremos que nos
hagas una propuesta de nuestro checkout utilizando *Vue.js*. Te adjuntamos un wireframe que nos ha creado el equipo de
UX/UI, así como el endpoint con los productos seleccionados del checkout.
```
https://demo9415114.mockable.io/drinksandco-checkout-technical-test
```
# Wireframe
![](https://live.staticflickr.com/7402/16376980461_fbbd43ec65_b.jpg)

## Valoraremos positivamente:
- El uso de buenas prácticas y que utilices el potencial de ES6.
- Que incluyas tests de tus componentes.
- Si utilizas librerias, recuerda utilizar algún gestor de paquetes.
- Así mismo, si utilizas librerias, explicanos por qué las has escogido.
- Recuerda, se trata de una prueba técnica de front-end, no de UX/UI Designer. Evaluaremos cómo utilizas CSS, no el look and feel final. 