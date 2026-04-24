const STORAGE_KEY = "aula010101-state";
const NOTES_KEY = "aula010101-notes";

const curriculum = {
  html: {
    label: "Modulo HTML",
    lessons: [
      {
        title: "Estructura base de una pagina",
        summary:
          "Vas a reconocer las partes minimas de un documento web y a escribir una estructura inicial sin perderte en detalles.",
        goal: "Crear el esqueleto HTML correcto.",
        challenge:
          "Escribi un documento minimo con doctype, html, head, title, body y un h1 con el texto Mi primera pagina.",
        hint:
          "Pensa en cajas grandes: primero el documento, despues la cabeza, despues el cuerpo visible.",
        rescue:
          "Solo escribi estas cinco piezas: doctype, html, head, body y h1. Lo demas puede esperar.",
        explain:
          "HTML define la estructura. No se ocupa de que algo sea lindo ni interactivo: ordena el contenido para que el navegador entienda que es titulo, texto, enlace, lista o formulario.",
        steps: [
          "Declara el tipo de documento.",
          "Abre la etiqueta html.",
          "Pon metadatos en head.",
          "Pon lo visible en body.",
          "Agrega un h1 como titulo principal.",
        ],
        required: ["<!doctype html", "<html", "<head", "<title", "<body", "<h1"],
        example: `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi primera pagina</title>
  </head>
  <body>
    <h1>Mi primera pagina</h1>
  </body>
</html>`,
        lab: {
          html: `<main>
  <h1>Mi primera pagina</h1>
  <p>Estoy aprendiendo HTML paso a paso.</p>
</main>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 32px;
}

h1 {
  color: seagreen;
}`,
          js: `console.log("El documento cargo bien");`,
        },
      },
      {
        title: "Titulos y parrafos",
        summary:
          "Vas a separar importancia y lectura usando h1, h2 y p sin mezclar todos los textos en el mismo nivel.",
        goal: "Ordenar contenido con jerarquia.",
        challenge:
          "Crea un h1, un h2 y dos parrafos. El h1 debe ser el tema general y el h2 una seccion.",
        hint:
          "Usa un solo h1. Despues baja un nivel con h2 para una parte del tema.",
        rescue:
          "Escribi primero el h1. Despues agrega un h2. Despues dos p. Una cosa a la vez.",
        explain:
          "Los titulos arman un mapa. Una pagina con buena jerarquia se lee mejor, se mantiene mejor y tambien es mas clara para lectores de pantalla.",
        steps: [
          "Elige el tema principal.",
          "Escribe un h1 para ese tema.",
          "Agrega un h2 para una seccion.",
          "Escribe parrafos cortos.",
        ],
        required: ["<h1", "</h1>", "<h2", "</h2>", "<p", "</p>"],
        example: `<h1>Guia de estudio web</h1>
<p>Hoy voy a practicar estructura HTML.</p>

<h2>Primer objetivo</h2>
<p>Reconocer titulos, parrafos y secciones.</p>`,
        lab: {
          html: `<article>
  <h1>Guia de estudio web</h1>
  <p>Hoy practico con calma.</p>
  <h2>Primer objetivo</h2>
  <p>Reconocer la jerarquia del contenido.</p>
</article>`,
          css: `article {
  max-width: 620px;
  margin: 32px auto;
  line-height: 1.6;
}`,
          js: `document.querySelector("h1").title = "Titulo principal";`,
        },
      },
      {
        title: "Enlaces e imagenes",
        summary:
          "Vas a conectar una pagina con otra y mostrar una imagen con texto alternativo.",
        goal: "Usar a, img, href, src y alt.",
        challenge:
          "Escribi un enlace a https://developer.mozilla.org y una imagen con src y alt.",
        hint:
          "El enlace necesita href. La imagen necesita src para cargar y alt para describir.",
        rescue:
          "Escribi un a con href. Luego un img con src. Por ultimo agrega alt.",
        explain:
          "Los enlaces crean navegacion. Las imagenes comunican, pero el texto alternativo mantiene el contenido disponible cuando la imagen no se ve.",
        steps: [
          "Abre una etiqueta a.",
          "Agrega href con una URL.",
          "Escribe un texto clickeable.",
          "Crea una etiqueta img con src y alt.",
        ],
        required: ["<a", "href=", "</a>", "<img", "src=", "alt="],
        example: `<a href="https://developer.mozilla.org">Leer MDN</a>

<img
  src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg"
  alt="Escultura vista desde abajo"
>`,
        lab: {
          html: `<a href="https://developer.mozilla.org">Leer MDN</a>

<figure>
  <img
    src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg"
    alt="Escultura vista desde abajo"
  >
  <figcaption>Imagen local del proyecto.</figcaption>
</figure>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

img {
  display: block;
  max-width: 260px;
  border-radius: 8px;
}`,
          js: `document.querySelector("a").target = "_blank";`,
        },
      },
      {
        title: "Listas para ordenar ideas",
        summary:
          "Vas a usar listas cuando tengas pasos, temas, compras, pendientes o ideas repetidas.",
        goal: "Crear una lista ordenada o desordenada.",
        challenge:
          "Crea una lista con tres cosas que quieras practicar esta semana.",
        hint:
          "ul sirve para items sin orden estricto. ol sirve para pasos numerados.",
        rescue:
          "Abri ul. Dentro pone tres li. Cerra ul. Eso alcanza.",
        explain:
          "Una lista evita que las ideas queden pegadas en un parrafo eterno. En desarrollo web, separar datos repetidos ayuda a convertirlos luego en tarjetas, menus o checklists.",
        steps: [
          "Decide si importa el orden.",
          "Usa ul si no importa u ol si son pasos.",
          "Agrega cada elemento con li.",
        ],
        requiredAny: [
          ["<ul", "</ul>"],
          ["<ol", "</ol>"],
        ],
        required: ["<li", "</li>"],
        example: `<ul>
  <li>Practicar etiquetas HTML</li>
  <li>Leer codigo en voz baja</li>
  <li>Construir una mini pagina</li>
</ul>`,
        lab: {
          html: `<section>
  <h1>Plan de practica</h1>
  <ul>
    <li>HTML base</li>
    <li>CSS visual</li>
    <li>JS interactivo</li>
  </ul>
</section>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

li {
  margin: 8px 0;
}`,
          js: `const items = document.querySelectorAll("li");
items.forEach((item) => item.textContent += " listo");`,
        },
      },
      {
        title: "Formularios basicos",
        summary:
          "Vas a crear campos para que una persona escriba datos y envie una accion.",
        goal: "Armar un form con label, input y button.",
        challenge:
          "Crea un formulario con un label, un input de texto y un button para enviar.",
        hint:
          "El label deberia conectar con el input usando for e id.",
        rescue:
          "Escribi form. Adentro label, input y button. Despues revisa for e id.",
        explain:
          "Los formularios son la puerta de entrada de datos: busquedas, login, contacto, comentarios, filtros y herramientas.",
        steps: [
          "Crea form.",
          "Agrega label con for.",
          "Agrega input con id.",
          "Agrega button con type submit.",
        ],
        required: ["<form", "<label", "for=", "<input", "id=", "<button"],
        example: `<form>
  <label for="nombre">Nombre</label>
  <input id="nombre" type="text">
  <button type="submit">Enviar</button>
</form>`,
        lab: {
          html: `<form>
  <label for="nombre">Nombre</label>
  <input id="nombre" type="text" placeholder="Tu nombre">
  <button type="submit">Enviar</button>
</form>
<p id="saludo"></p>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

form {
  display: grid;
  gap: 10px;
  max-width: 320px;
}`,
          js: `const form = document.querySelector("form");
const input = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  saludo.textContent = "Hola, " + input.value;
});`,
        },
      },
    ],
  },
  css: {
    label: "Modulo CSS",
    lessons: [
      {
        title: "Conectar estilos",
        summary:
          "Vas a entender donde vive CSS y como una pagina HTML lo llama.",
        goal: "Conectar un archivo CSS con link.",
        challenge:
          "Escribi la etiqueta link que conecta el archivo ./styles/index.css dentro del head.",
        hint:
          "La etiqueta link suele llevar rel=\"stylesheet\" y href con la ruta del archivo.",
        rescue:
          "No armes toda la pagina. Solo escribi link con rel y href.",
        explain:
          "CSS se puede escribir en distintos lugares, pero un archivo separado mantiene el proyecto mas ordenado cuando la pagina crece.",
        steps: [
          "Ubica el head del HTML.",
          "Agrega una etiqueta link.",
          "Usa rel stylesheet.",
          "Usa href con la ruta al CSS.",
        ],
        required: ["<link", "rel=", "stylesheet", "href=", "styles/index.css"],
        example: `<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./styles/index.css">
</head>`,
        lab: {
          html: `<h1>CSS conectado</h1>
<p>Si el color cambia, el estilo esta funcionando.</p>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 32px;
  background: #f7f4ef;
}

h1 {
  color: #2f7d5c;
}`,
          js: `console.log("CSS listo para practicar");`,
        },
      },
      {
        title: "Selectores",
        summary:
          "Vas a elegir que elementos reciben estilos: por etiqueta, clase o id.",
        goal: "Escribir reglas con selector, propiedad y valor.",
        challenge:
          "Escribi CSS para que h1 tenga color verde y .destacado tenga fondo amarillo.",
        hint:
          "Un selector por etiqueta empieza con h1. Una clase empieza con punto.",
        rescue:
          "Hace dos reglas: una para h1 y otra para .destacado.",
        explain:
          "Un selector es una forma de decir: este grupo de elementos cambia. Despues, dentro de llaves, escribis que propiedad cambia y con que valor.",
        steps: [
          "Elige el elemento o clase.",
          "Abre llaves.",
          "Escribe propiedad y valor.",
          "Cierra la regla.",
        ],
        required: ["h1", "color", ".destacado", "background"],
        example: `h1 {
  color: seagreen;
}

.destacado {
  background: gold;
}`,
        lab: {
          html: `<h1>Selectores</h1>
<p class="destacado">Este parrafo tiene una clase.</p>
<p>Este parrafo no la tiene.</p>`,
          css: `h1 {
  color: seagreen;
}

.destacado {
  background: gold;
  padding: 12px;
}`,
          js: `document.querySelector(".destacado").textContent += " CSS aplicado.";`,
        },
      },
      {
        title: "Box model",
        summary:
          "Vas a controlar espacio interno, borde y espacio externo de un elemento.",
        goal: "Usar padding, border y margin.",
        challenge:
          "Escribi una regla para .caja con padding, border y margin.",
        hint:
          "Padding vive dentro del borde. Margin vive fuera del borde.",
        rescue:
          "Escribi .caja y tres lineas: padding, border, margin.",
        explain:
          "Cada elemento en CSS se comporta como una caja. Entender esa caja evita muchos problemas de espacios raros.",
        steps: [
          "Selecciona .caja.",
          "Agrega padding.",
          "Agrega border.",
          "Agrega margin.",
        ],
        required: [".caja", "padding", "border", "margin"],
        example: `.caja {
  padding: 16px;
  border: 2px solid black;
  margin: 20px;
}`,
        lab: {
          html: `<div class="caja">
  Soy una caja con espacio interno, borde y margen.
</div>`,
          css: `.caja {
  padding: 20px;
  border: 3px solid #182126;
  margin: 24px;
  background: #f5fbf1;
}`,
          js: `document.querySelector(".caja").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Hiciste click en la caja";
});`,
        },
      },
      {
        title: "Flexbox",
        summary:
          "Vas a alinear elementos en fila o columna sin pelearte con margenes invisibles.",
        goal: "Usar display flex, gap y justify-content.",
        challenge:
          "Escribi CSS para .fila con display flex, gap y justify-content center.",
        hint:
          "Flex se activa con display: flex. Gap separa los hijos.",
        rescue:
          "Solo toca .fila. Agrega display, gap y justify-content.",
        explain:
          "Flexbox ayuda a distribuir hijos dentro de un contenedor. Es ideal para barras, botones, tarjetas pequenas y grupos de elementos.",
        steps: [
          "Selecciona el contenedor.",
          "Activa display flex.",
          "Agrega gap.",
          "Alinea con justify-content.",
        ],
        required: [".fila", "display", "flex", "gap", "justify-content"],
        example: `.fila {
  display: flex;
  gap: 12px;
  justify-content: center;
}`,
        lab: {
          html: `<div class="fila">
  <button>HTML</button>
  <button>CSS</button>
  <button>JS</button>
</div>`,
          css: `.fila {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 24px;
}

button {
  padding: 10px 14px;
}`,
          js: `document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Elegido";
  });
});`,
        },
      },
      {
        title: "Responsive basico",
        summary:
          "Vas a cambiar la distribucion cuando la pantalla sea chica.",
        goal: "Usar una media query simple.",
        challenge:
          "Escribi una media query para que .grid pase a una columna cuando la pantalla mida 700px o menos.",
        hint:
          "La forma base es @media (max-width: 700px) { ... }.",
        rescue:
          "Primero escribi @media. Adentro pone .grid y cambia grid-template-columns.",
        explain:
          "Responsive significa que el diseno se adapta al espacio disponible. No es hacer otra web: es permitir que la misma web respire mejor.",
        steps: [
          "Define el estilo para pantallas grandes.",
          "Crea una media query.",
          "Cambia solo lo necesario.",
        ],
        required: ["@media", "max-width", ".grid", "grid-template-columns"],
        example: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
        lab: {
          html: `<div class="grid">
  <article>HTML</article>
  <article>CSS</article>
  <article>JS</article>
</div>`,
          css: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

article {
  padding: 20px;
  border: 1px solid black;
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
          js: `console.log("Achica la vista previa para probar la media query");`,
        },
      },
    ],
  },
  js: {
    label: "Modulo JS",
    lessons: [
      {
        title: "Variables y datos",
        summary:
          "Vas a guardar informacion en nombres simples para usarla despues.",
        goal: "Crear const y let.",
        challenge:
          "Escribi una const llamada nombre y una let llamada puntos. Luego suma 1 a puntos.",
        hint:
          "const se usa para valores que no reasignas. let para valores que pueden cambiar.",
        rescue:
          "Escribi dos lineas: const nombre = ... y let puntos = ... Despues puntos = puntos + 1.",
        explain:
          "Una variable es una etiqueta para recordar un valor. JS usa esos valores para tomar decisiones, cambiar la pantalla o responder a eventos.",
        steps: [
          "Crea una const para un texto.",
          "Crea una let para un numero.",
          "Cambia la let.",
          "Muestra el resultado con console.log.",
        ],
        required: ["const", "nombre", "let", "puntos", "puntos"],
        example: `const nombre = "Aula";
let puntos = 0;

puntos = puntos + 1;
console.log(nombre, puntos);`,
        lab: {
          html: `<h1>Variables</h1>
<p id="resultado"></p>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}`,
          js: `const nombre = "Aula";
let puntos = 0;
puntos = puntos + 1;

document.querySelector("#resultado").textContent =
  nombre + " tiene " + puntos + " punto";`,
        },
      },
      {
        title: "Eventos",
        summary:
          "Vas a hacer que la pagina responda cuando una persona toca un boton.",
        goal: "Usar addEventListener con click.",
        challenge:
          "Escribi JS para escuchar el click de un button y cambiar el texto de un p.",
        hint:
          "Primero selecciona el button y el p. Despues usa addEventListener.",
        rescue:
          "Tres pasos: seleccionar, escuchar click, cambiar textContent.",
        explain:
          "Un evento es algo que pasa: click, tecla, envio de formulario, carga de pagina. JS puede escuchar eso y responder.",
        steps: [
          "Selecciona el boton.",
          "Selecciona el parrafo.",
          "Agrega addEventListener.",
          "Cambia textContent dentro del callback.",
        ],
        required: ["querySelector", "addEventListener", "click", "textContent"],
        example: `const boton = document.querySelector("button");
const mensaje = document.querySelector("p");

boton.addEventListener("click", () => {
  mensaje.textContent = "Click recibido";
});`,
        lab: {
          html: `<button>Activar</button>
<p>Esperando accion...</p>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

button {
  padding: 10px 16px;
}`,
          js: `const boton = document.querySelector("button");
const mensaje = document.querySelector("p");

boton.addEventListener("click", () => {
  mensaje.textContent = "Click recibido";
});`,
        },
      },
      {
        title: "Condicionales",
        summary:
          "Vas a decidir que pasa segun una condicion verdadera o falsa.",
        goal: "Usar if y else.",
        challenge:
          "Escribi un if que revise si puntos es mayor o igual a 3. Si lo es, muestra Ganaste. Si no, muestra Segui practicando.",
        hint:
          "La condicion va entre parentesis: if (puntos >= 3).",
        rescue:
          "Escribi if, condicion, mensaje ganador y else con mensaje de practica.",
        explain:
          "Las condicionales son decisiones. Permiten que el programa no haga siempre lo mismo.",
        steps: [
          "Crea una variable puntos.",
          "Escribe if con la comparacion.",
          "Agrega una respuesta cuando se cumple.",
          "Agrega else para el otro caso.",
        ],
        required: ["if", "else", "puntos", ">=", "ganaste"],
        example: `let puntos = 3;

if (puntos >= 3) {
  console.log("Ganaste");
} else {
  console.log("Segui practicando");
}`,
        lab: {
          html: `<p id="estado"></p>`,
          css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}`,
          js: `let puntos = 3;
const estado = document.querySelector("#estado");

if (puntos >= 3) {
  estado.textContent = "Ganaste";
} else {
  estado.textContent = "Segui practicando";
}`,
        },
      },
      {
        title: "DOM",
        summary:
          "Vas a seleccionar elementos reales de la pagina y modificarlos con JS.",
        goal: "Usar querySelector y classList.",
        challenge:
          "Escribi JS que seleccione .tarjeta y le agregue la clase activa.",
        hint:
          "classList.add agrega una clase sin borrar las que ya existen.",
        rescue:
          "Selecciona .tarjeta. Despues tarjeta.classList.add('activa').",
        explain:
          "El DOM es la representacion de tu HTML dentro del navegador. JS puede leerlo, editarlo y reaccionar a lo que pase ahi.",
        steps: [
          "Selecciona el elemento.",
          "Guarda la seleccion en una constante.",
          "Usa classList.add.",
          "Define el estilo de la clase en CSS.",
        ],
        required: ["querySelector", ".tarjeta", "classList", "add"],
        example: `const tarjeta = document.querySelector(".tarjeta");
tarjeta.classList.add("activa");`,
        lab: {
          html: `<article class="tarjeta">
  <h1>DOM</h1>
  <p>JS puede cambiar esta tarjeta.</p>
</article>`,
          css: `.tarjeta {
  padding: 20px;
  border: 1px solid black;
}

.activa {
  background: #f5fbf1;
  border-color: seagreen;
}`,
          js: `const tarjeta = document.querySelector(".tarjeta");
tarjeta.classList.add("activa");`,
        },
      },
      {
        title: "Mini proyecto",
        summary:
          "Vas a unir estructura, estilo e interaccion en una pieza pequena.",
        goal: "Crear un contador con boton.",
        challenge:
          "Crea el JS de un contador: empieza en 0, al hacer click suma 1 y actualiza el texto en pantalla.",
        hint:
          "Necesitas una let para el numero, un button, un lugar para mostrarlo y un evento click.",
        rescue:
          "Primero mostra 0. Despues escucha click. Dentro del click suma 1. Por ultimo actualiza el texto.",
        explain:
          "Un mini proyecto prueba si podes conectar las partes. No necesita ser grande: tiene que tener una estructura clara, verse legible y responder a una accion.",
        steps: [
          "Crea el HTML del contador.",
          "Dale estilos simples.",
          "Guarda el numero en una variable.",
          "Actualiza la pantalla con cada click.",
        ],
        required: ["let", "addEventListener", "click", "textContent"],
        example: `let contador = 0;
const numero = document.querySelector("#numero");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  contador = contador + 1;
  numero.textContent = contador;
});`,
        lab: {
          html: `<main class="contador">
  <h1>Contador</h1>
  <strong id="numero">0</strong>
  <button>Sumar</button>
</main>`,
          css: `body {
  font-family: system-ui, sans-serif;
  display: grid;
  min-height: 100vh;
  place-items: center;
}

.contador {
  display: grid;
  gap: 14px;
  text-align: center;
}

#numero {
  font-size: 4rem;
}`,
          js: `let contador = 0;
const numero = document.querySelector("#numero");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  contador = contador + 1;
  numero.textContent = contador;
});`,
        },
      },
    ],
  },
};

addExtraLessons();

function makeLesson(config) {
  return {
    title: config.title,
    summary: config.summary,
    goal: config.goal,
    challenge: config.challenge,
    hint: config.hint,
    rescue: config.rescue,
    explain: config.explain,
    steps: config.steps,
    required: config.required || [],
    requiredAny: config.requiredAny,
    example: config.example,
    lab: {
      html: config.lab?.html || config.example,
      css:
        config.lab?.css ||
        `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
  line-height: 1.6;
}`,
      js: config.lab?.js || `console.log("${config.title}");`,
    },
  };
}

function addExtraLessons() {
  curriculum.html.lessons.push(
    makeLesson({
      title: "Comentarios en HTML",
      summary:
        "Vas a dejar notas dentro del codigo sin que aparezcan en la pagina.",
      goal: "Usar comentarios para orientarte.",
      challenge:
        "Escribi un comentario HTML y debajo un parrafo visible que diga Estoy practicando.",
      hint:
        "Los comentarios empiezan con <!-- y terminan con -->. El navegador no los muestra.",
      rescue:
        "Primero escribi el comentario. Despues hace un p normal debajo.",
      explain:
        "Los comentarios sirven para explicar una decision o marcar una parte del codigo mientras aprendes. Usalos poco, pero usalos cuando te ayuden a volver al hilo.",
      steps: [
        "Abre el comentario.",
        "Escribe una nota corta.",
        "Cierra el comentario.",
        "Agrega contenido visible.",
      ],
      required: ["<!--", "-->", "<p", "</p>"],
      example: `<!-- Esta parte es mi primer bloque de practica -->
<p>Estoy practicando.</p>`,
      lab: {
        html: `<!-- Nota: este texto no se ve en la pagina -->
<p>Estoy practicando.</p>`,
      },
    }),
    makeLesson({
      title: "Estructura semantica",
      summary:
        "Vas a usar etiquetas que describen la funcion de cada bloque de la pagina.",
      goal: "Crear header, main, section y footer.",
      challenge:
        "Crea una estructura con header, main, una section con h2 y un footer.",
      hint:
        "Pensa en zonas: arriba, contenido principal, bloque interno y cierre.",
      rescue:
        "Escribi una etiqueta por vez: header, main, section, footer.",
      explain:
        "La semantica ayuda a que el codigo sea mas legible y accesible. No todo tiene que ser div.",
      steps: [
        "Crea el header.",
        "Abre el main.",
        "Agrega una section dentro.",
        "Cierra con footer.",
      ],
      required: ["<header", "<main", "<section", "<h2", "<footer"],
      example: `<header>
  <h1>Mi practica</h1>
</header>

<main>
  <section>
    <h2>Objetivo</h2>
    <p>Aprender estructura semantica.</p>
  </section>
</main>

<footer>Fin de la practica</footer>`,
      lab: {
        html: `<header>
  <h1>Mi aula</h1>
</header>
<main>
  <section>
    <h2>Practica del dia</h2>
    <p>Una estructura clara ayuda a pensar mejor.</p>
  </section>
</main>
<footer>Hecho con calma</footer>`,
      },
    }),
    makeLesson({
      title: "Navegacion principal",
      summary:
        "Vas a crear un menu con enlaces para moverte por secciones.",
      goal: "Usar nav, ul, li y a.",
      challenge:
        "Crea un nav con una lista de tres enlaces: Inicio, Practicas y Contacto.",
      hint:
        "El nav suele contener una lista. Cada li puede tener un enlace.",
      rescue:
        "Primero nav. Dentro ul. Dentro tres li con a.",
      explain:
        "La navegacion es una lista de caminos. Si la armas con etiquetas correctas, despues es mucho mas facil darle estilo.",
      steps: [
        "Abre nav.",
        "Agrega ul.",
        "Crea tres li.",
        "Pon un enlace dentro de cada li.",
      ],
      required: ["<nav", "<ul", "<li", "<a", "href="],
      example: `<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#practicas">Practicas</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>`,
      lab: {
        html: `<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#practicas">Practicas</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
<section id="inicio"><h1>Inicio</h1></section>`,
        css: `body {
  font-family: system-ui, sans-serif;
}

ul {
  display: flex;
  gap: 12px;
  padding: 0;
  list-style: none;
}`,
      },
    }),
    makeLesson({
      title: "Article y aside",
      summary:
        "Vas a separar contenido principal de informacion complementaria.",
      goal: "Usar article y aside con sentido.",
      challenge:
        "Crea un article con h2 y p. Al lado, crea un aside con una nota corta.",
      hint:
        "Article puede vivir por si solo. Aside acompana con informacion secundaria.",
      rescue:
        "Hace primero el article. Cuando termine, agrega aside debajo.",
      explain:
        "Estas etiquetas te ayudan a organizar blogs, fichas, apuntes y paginas con bloques independientes.",
      steps: [
        "Crea article.",
        "Agrega titulo y texto.",
        "Crea aside.",
        "Escribe una nota secundaria.",
      ],
      required: ["<article", "<h2", "<p", "<aside"],
      example: `<article>
  <h2>HTML semantico</h2>
  <p>Un article contiene una pieza independiente.</p>
</article>

<aside>
  <p>Nota: semantica significa significado.</p>
</aside>`,
      lab: {
        html: `<article>
  <h2>Practica corta</h2>
  <p>Hoy aprendo a separar contenido.</p>
</article>
<aside>
  <p>Recordatorio: una etiqueta por idea.</p>
</aside>`,
      },
    }),
    makeLesson({
      title: "Figure y figcaption",
      summary:
        "Vas a mostrar una imagen con una descripcion asociada.",
      goal: "Usar figure, img y figcaption.",
      challenge:
        "Crea un figure con una imagen local y un figcaption explicando que muestra.",
      hint:
        "figure envuelve la imagen y su texto. figcaption describe la imagen.",
      rescue:
        "Abri figure, pega un img, agrega figcaption y cerra figure.",
      explain:
        "Cuando una imagen necesita contexto, figure y figcaption mantienen unidas la imagen y su explicacion.",
      steps: [
        "Abre figure.",
        "Agrega img con src y alt.",
        "Agrega figcaption.",
        "Cierra figure.",
      ],
      required: ["<figure", "<img", "src=", "alt=", "<figcaption"],
      example: `<figure>
  <img src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg" alt="Escultura">
  <figcaption>Imagen usada para practicar HTML.</figcaption>
</figure>`,
      lab: {
        html: `<figure>
  <img src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg" alt="Escultura">
  <figcaption>Practica de imagen con descripcion.</figcaption>
</figure>`,
        css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

img {
  max-width: 260px;
}`,
      },
    }),
    makeLesson({
      title: "Tablas simples",
      summary:
        "Vas a organizar datos en filas y columnas cuando realmente tengan forma de tabla.",
      goal: "Crear table, thead, tbody, tr, th y td.",
      challenge:
        "Crea una tabla con dos columnas: Tema y Estado. Agrega dos filas de datos.",
      hint:
        "th es encabezado. td es dato. tr es fila.",
      rescue:
        "Primero table. Despues una fila de th. Despues dos filas con td.",
      explain:
        "Las tablas son para datos tabulares, no para maquetar toda la pagina. Son perfectas para listas comparables.",
      steps: [
        "Crea table.",
        "Agrega thead con th.",
        "Agrega tbody.",
        "Crea filas con td.",
      ],
      required: ["<table", "<thead", "<tbody", "<tr", "<th", "<td"],
      example: `<table>
  <thead>
    <tr>
      <th>Tema</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>En practica</td>
    </tr>
  </tbody>
</table>`,
      lab: {
        html: `<table>
  <thead>
    <tr><th>Tema</th><th>Estado</th></tr>
  </thead>
  <tbody>
    <tr><td>HTML</td><td>Activo</td></tr>
    <tr><td>CSS</td><td>Siguiente</td></tr>
  </tbody>
</table>`,
        css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

td,
th {
  border: 1px solid black;
  padding: 8px;
}`,
      },
    }),
    makeLesson({
      title: "Input de email",
      summary:
        "Vas a pedir un correo con un campo especifico y una validacion basica del navegador.",
      goal: "Usar input type email y required.",
      challenge:
        "Crea un formulario con label, input type email required y boton enviar.",
      hint:
        "El tipo email ayuda al navegador a validar el formato del correo.",
      rescue:
        "Form, label, input, button. Despues agrega type email y required.",
      explain:
        "Los tipos de input le dan pistas al navegador y mejoran la experiencia en celular.",
      steps: [
        "Crea form.",
        "Conecta label e input.",
        "Usa type email.",
        "Agrega required.",
      ],
      required: ["<form", "<label", "for=", "<input", "type=\"email\"", "required", "<button"],
      example: `<form>
  <label for="correo">Correo</label>
  <input id="correo" type="email" required>
  <button type="submit">Enviar</button>
</form>`,
      lab: {
        html: `<form>
  <label for="correo">Correo</label>
  <input id="correo" type="email" required>
  <button type="submit">Enviar</button>
</form>`,
      },
    }),
    makeLesson({
      title: "Textarea y select",
      summary:
        "Vas a crear campos para escribir texto largo y elegir una opcion.",
      goal: "Usar textarea, select y option.",
      challenge:
        "Crea un formulario con un textarea para dudas y un select con tres temas.",
      hint:
        "Textarea tiene apertura y cierre. Select contiene option.",
      rescue:
        "Escribi textarea. Luego select. Dentro del select, tres option.",
      explain:
        "No todos los datos entran en un input corto. Textarea sirve para mensajes y select para opciones controladas.",
      steps: [
        "Crea textarea con id.",
        "Crea label conectado.",
        "Crea select.",
        "Agrega option.",
      ],
      required: ["<textarea", "</textarea>", "<select", "<option"],
      example: `<label for="duda">Duda</label>
<textarea id="duda"></textarea>

<label for="tema">Tema</label>
<select id="tema">
  <option>HTML</option>
  <option>CSS</option>
  <option>JS</option>
</select>`,
      lab: {
        html: `<label for="duda">Duda</label>
<textarea id="duda"></textarea>
<label for="tema">Tema</label>
<select id="tema">
  <option>HTML</option>
  <option>CSS</option>
  <option>JS</option>
</select>`,
      },
    }),
    makeLesson({
      title: "Tipos de boton",
      summary:
        "Vas a distinguir botones que envian formularios de botones que solo ejecutan acciones.",
      goal: "Usar button con type correcto.",
      challenge:
        "Crea un formulario con un button type submit y otro button type reset.",
      hint:
        "submit envia. reset limpia. button sirve para acciones con JS.",
      rescue:
        "Dentro de form pone dos botones y revisa el atributo type.",
      explain:
        "Definir type evita comportamientos sorpresa cuando un boton vive dentro de un formulario.",
      steps: [
        "Crea form.",
        "Agrega un campo.",
        "Agrega boton submit.",
        "Agrega boton reset.",
      ],
      required: ["<form", "<button", "type=\"submit\"", "type=\"reset\""],
      example: `<form>
  <input type="text" placeholder="Buscar">
  <button type="submit">Enviar</button>
  <button type="reset">Limpiar</button>
</form>`,
      lab: {
        html: `<form>
  <input type="text" placeholder="Buscar">
  <button type="submit">Enviar</button>
  <button type="reset">Limpiar</button>
</form>`,
      },
    }),
    makeLesson({
      title: "Class, id y data",
      summary:
        "Vas a nombrar elementos para poder seleccionarlos con CSS o JS.",
      goal: "Usar class, id y data-*.",
      challenge:
        "Crea una tarjeta con class tarjeta, id practica-1 y data-nivel basico.",
      hint:
        "class puede repetirse. id deberia ser unico. data-* guarda informacion propia.",
      rescue:
        "Crea un article y agrega los tres atributos.",
      explain:
        "Los atributos globales ayudan a identificar elementos y guardar informacion extra sin cambiar el contenido visible.",
      steps: [
        "Elige una etiqueta.",
        "Agrega class.",
        "Agrega id.",
        "Agrega data-nivel.",
      ],
      required: ["class=", "id=", "data-nivel"],
      example: `<article class="tarjeta" id="practica-1" data-nivel="basico">
  <h2>Practica 1</h2>
  <p>Estoy aprendiendo atributos.</p>
</article>`,
      lab: {
        html: `<article class="tarjeta" id="practica-1" data-nivel="basico">
  <h2>Practica 1</h2>
  <p>Estoy aprendiendo atributos.</p>
</article>`,
      },
    }),
    makeLesson({
      title: "Metadatos importantes",
      summary:
        "Vas a preparar el head para que la pagina tenga idioma, caracteres y escala correcta.",
      goal: "Usar charset, viewport y title.",
      challenge:
        "Escribi un head con meta charset UTF-8, meta viewport y title.",
      hint:
        "Viewport es clave para que la pagina se adapte en celulares.",
      rescue:
        "Hace solo el head: meta charset, meta viewport y title.",
      explain:
        "El head no se ve directamente, pero configura como se interpreta y presenta la pagina.",
      steps: [
        "Abre head.",
        "Agrega charset.",
        "Agrega viewport.",
        "Agrega title.",
      ],
      required: ["<head", "charset", "utf-8", "viewport", "<title"],
      example: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi practica</title>
</head>`,
      lab: {
        html: `<h1>Los metadatos viven en head</h1>
<p>En el laboratorio practicamos la idea visible.</p>`,
      },
    }),
    makeLesson({
      title: "Tarjeta de contenido",
      summary:
        "Vas a combinar etiquetas semanticas para crear una pieza reutilizable.",
      goal: "Crear una tarjeta con article, h2, p y a.",
      challenge:
        "Crea un article con clase tarjeta, un h2, un parrafo y un enlace para leer mas.",
      hint:
        "Una tarjeta suele ser un article porque puede entenderse como pieza independiente.",
      rescue:
        "Article, titulo, texto, enlace. Esa es la secuencia.",
      explain:
        "Muchas interfaces se construyen con piezas repetidas: tarjetas, items, filas, avisos. HTML claro vuelve esas piezas faciles de mantener.",
      steps: [
        "Crea article con clase.",
        "Agrega h2.",
        "Agrega p.",
        "Agrega a con href.",
      ],
      required: ["<article", "class=", "<h2", "<p", "<a", "href="],
      example: `<article class="tarjeta">
  <h2>HTML base</h2>
  <p>Practica etiquetas fundamentales.</p>
  <a href="#html">Leer mas</a>
</article>`,
      lab: {
        html: `<article class="tarjeta">
  <h2>HTML base</h2>
  <p>Practica etiquetas fundamentales.</p>
  <a href="#html">Leer mas</a>
</article>`,
        css: `.tarjeta {
  max-width: 320px;
  padding: 16px;
  border: 1px solid black;
}`,
      },
    }),
    makeLesson({
      title: "Enlaces internos",
      summary:
        "Vas a conectar un enlace con una seccion de la misma pagina.",
      goal: "Usar href con #id.",
      challenge:
        "Crea un enlace a #objetivo y una section con id objetivo.",
      hint:
        "El href del enlace debe coincidir con el id de la seccion.",
      rescue:
        "Escribi a href=\"#objetivo\". Despues section id=\"objetivo\".",
      explain:
        "Los enlaces internos son utiles para indices, menus y saltos dentro de paginas largas.",
      steps: [
        "Crea el enlace.",
        "Usa href con #.",
        "Crea una seccion.",
        "Pon el id correspondiente.",
      ],
      required: ["href=\"#", "id=", "<section"],
      example: `<a href="#objetivo">Ir al objetivo</a>

<section id="objetivo">
  <h2>Objetivo</h2>
  <p>Llegaste a la seccion.</p>
</section>`,
      lab: {
        html: `<a href="#objetivo">Ir al objetivo</a>
<div style="height: 180px"></div>
<section id="objetivo">
  <h2>Objetivo</h2>
  <p>Llegaste a la seccion.</p>
</section>`,
      },
    }),
    makeLesson({
      title: "Details y summary",
      summary:
        "Vas a crear contenido desplegable sin escribir JavaScript.",
      goal: "Usar details y summary.",
      challenge:
        "Crea un bloque details con summary Pregunta y un parrafo con la respuesta.",
      hint:
        "summary es lo que se ve antes de desplegar.",
      rescue:
        "Abri details. Dentro pone summary y p. Cierra details.",
      explain:
        "HTML trae elementos interactivos propios. Details es ideal para preguntas frecuentes y pistas.",
      steps: [
        "Crea details.",
        "Agrega summary.",
        "Agrega contenido oculto.",
        "Prueba abrir y cerrar.",
      ],
      required: ["<details", "<summary", "<p", "</details>"],
      example: `<details>
  <summary>Pregunta</summary>
  <p>Esta es la respuesta.</p>
</details>`,
      lab: {
        html: `<details>
  <summary>Pista</summary>
  <p>HTML ya puede hacer algunas interacciones simples.</p>
</details>`,
      },
    }),
    makeLesson({
      title: "Contenido multimedia",
      summary:
        "Vas a reconocer como se preparan audio y video con controles.",
      goal: "Usar audio o video con controls.",
      challenge:
        "Escribi un audio con controls y un source con src y type.",
      hint:
        "Audio no se muestra bien si falta controls.",
      rescue:
        "Crea audio controls. Dentro pone source.",
      explain:
        "Los elementos multimedia necesitan archivos reales, pero la estructura HTML se aprende antes: contenedor, fuente y controles.",
      steps: [
        "Crea audio.",
        "Agrega controls.",
        "Agrega source.",
        "Define src y type.",
      ],
      required: ["<audio", "controls", "<source", "src=", "type="],
      example: `<audio controls>
  <source src="./audio/practica.mp3" type="audio/mpeg">
  Tu navegador no puede reproducir este audio.
</audio>`,
      lab: {
        html: `<audio controls>
  <source src="./audio/practica.mp3" type="audio/mpeg">
  Tu navegador no puede reproducir este audio.
</audio>`,
      },
    }),
    makeLesson({
      title: "Strong y em",
      summary:
        "Vas a marcar importancia y enfasis sin usar etiquetas solo visuales.",
      goal: "Usar strong y em dentro de un parrafo.",
      challenge:
        "Crea un parrafo con una palabra importante en strong y otra enfatizada en em.",
      hint:
        "strong indica importancia. em indica enfasis en la lectura.",
      rescue:
        "Escribi un p. Dentro envuelve una palabra con strong y otra con em.",
      explain:
        "Estas etiquetas aportan significado, no solo apariencia. Despues CSS puede decidir como se ven.",
      steps: [
        "Crea un parrafo.",
        "Elige una palabra importante.",
        "Usa strong.",
        "Usa em para enfasis.",
      ],
      required: ["<p", "<strong", "</strong>", "<em", "</em>"],
      example: `<p>
  Practicar <strong>todos los dias</strong> ayuda, aunque sea por
  <em>pocos minutos</em>.
</p>`,
      lab: {
        html: `<p>
  Practicar <strong>todos los dias</strong> ayuda, aunque sea por
  <em>pocos minutos</em>.
</p>`,
      },
    }),
    makeLesson({
      title: "Codigo en la pagina",
      summary:
        "Vas a mostrar fragmentos de codigo sin que el navegador los interprete como estructura.",
      goal: "Usar pre y code.",
      challenge:
        "Crea un bloque pre con code adentro que muestre una etiqueta h1 como texto.",
      hint:
        "pre conserva saltos y espacios. code marca contenido de codigo.",
      rescue:
        "Abri pre, dentro code, escribe &lt;h1&gt;Titulo&lt;/h1&gt;.",
      explain:
        "Cuando ensenas o documentas codigo, pre y code hacen que el contenido tenga el significado correcto.",
      steps: [
        "Crea pre.",
        "Crea code dentro.",
        "Escapa los signos menor y mayor.",
        "Cierra ambas etiquetas.",
      ],
      required: ["<pre", "<code", "&lt;", "&gt;"],
      example: `<pre><code>&lt;h1&gt;Titulo&lt;/h1&gt;</code></pre>`,
      lab: {
        html: `<pre><code>&lt;h1&gt;Titulo&lt;/h1&gt;</code></pre>`,
        css: `pre {
  padding: 16px;
  background: #172026;
  color: white;
}`,
      },
    }),
    makeLesson({
      title: "Div y span",
      summary:
        "Vas a usar contenedores genericos cuando no haya una etiqueta semantica mejor.",
      goal: "Distinguir div y span.",
      challenge:
        "Crea un div con clase caja y dentro un parrafo con un span de clase marca.",
      hint:
        "div agrupa en bloque. span marca una parte pequena de texto.",
      rescue:
        "Div afuera. Parrafo adentro. Span alrededor de una palabra.",
      explain:
        "Div y span son utiles, pero conviene usarlos cuando etiquetas semanticas no alcanzan.",
      steps: [
        "Crea div.",
        "Agrega una clase.",
        "Crea parrafo.",
        "Marca una palabra con span.",
      ],
      required: ["<div", "class=", "<span", "</span>"],
      example: `<div class="caja">
  <p>Esta palabra esta <span class="marca">marcada</span>.</p>
</div>`,
      lab: {
        html: `<div class="caja">
  <p>Esta palabra esta <span class="marca">marcada</span>.</p>
</div>`,
        css: `.marca {
  background: gold;
}`,
      },
    }),
    makeLesson({
      title: "Accesibilidad en botones",
      summary:
        "Vas a nombrar botones cuando su texto visible no alcanza.",
      goal: "Usar aria-label con un button.",
      challenge:
        "Crea un button con aria-label Reiniciar practica y texto visible X.",
      hint:
        "aria-label le da un nombre accesible al control.",
      rescue:
        "Escribi button, agrega aria-label y deja X como texto visible.",
      explain:
        "La accesibilidad empieza con nombres claros. Si un boton solo tiene un icono o letra, necesita una etiqueta comprensible.",
      steps: [
        "Crea button.",
        "Agrega aria-label.",
        "Escribe texto visible corto.",
      ],
      required: ["<button", "aria-label=", "</button>"],
      example: `<button type="button" aria-label="Reiniciar practica">X</button>`,
      lab: {
        html: `<button type="button" aria-label="Reiniciar practica">X</button>`,
      },
    }),
    makeLesson({
      title: "Campos agrupados",
      summary:
        "Vas a agrupar opciones relacionadas dentro de un formulario.",
      goal: "Usar fieldset y legend.",
      challenge:
        "Crea un fieldset con legend Nivel y dos opciones de radio.",
      hint:
        "legend nombra el grupo. Los radio comparten name.",
      rescue:
        "Fieldset, legend, dos label con input radio.",
      explain:
        "Fieldset mejora formularios largos porque agrupa preguntas relacionadas de forma semantica.",
      steps: [
        "Crea fieldset.",
        "Agrega legend.",
        "Crea dos labels.",
        "Agrega radio con el mismo name.",
      ],
      required: ["<fieldset", "<legend", "type=\"radio\"", "name="],
      example: `<fieldset>
  <legend>Nivel</legend>
  <label><input type="radio" name="nivel"> Basico</label>
  <label><input type="radio" name="nivel"> Intermedio</label>
</fieldset>`,
      lab: {
        html: `<fieldset>
  <legend>Nivel</legend>
  <label><input type="radio" name="nivel"> Basico</label>
  <label><input type="radio" name="nivel"> Intermedio</label>
</fieldset>`,
      },
    }),
    makeLesson({
      title: "Imagen dentro de enlace",
      summary:
        "Vas a convertir una imagen en un enlace clickeable manteniendo alt.",
      goal: "Anidar img dentro de a.",
      challenge:
        "Crea un enlace que contenga una imagen con src y alt.",
      hint:
        "La etiqueta img puede vivir dentro de a.",
      rescue:
        "Abri a con href. Dentro pega img. Cerra a.",
      explain:
        "Las imagenes clickeables se usan en logos, galerias y tarjetas. El alt sigue siendo obligatorio.",
      steps: [
        "Crea a con href.",
        "Pon img dentro.",
        "Agrega src.",
        "Agrega alt.",
      ],
      required: ["<a", "href=", "<img", "src=", "alt=", "</a>"],
      example: `<a href="#inicio">
  <img src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg" alt="Volver al inicio">
</a>`,
      lab: {
        html: `<a href="#inicio">
  <img src="./archivos/imagenes/El_%C3%81ngel_Ca%C3%ADdo.jpg" alt="Volver al inicio">
</a>`,
        css: `img {
  max-width: 180px;
}`,
      },
    }),
    makeLesson({
      title: "Mini pagina completa",
      summary:
        "Vas a unir varias piezas HTML en una pagina pequena y coherente.",
      goal: "Crear header, nav, main, section, article y footer.",
      challenge:
        "Arma una mini pagina con header, nav, main, section, article y footer.",
      hint:
        "No busques perfeccion visual. Solo estructura clara.",
      rescue:
        "Escribi las etiquetas grandes primero. Despues rellena con h1, h2 y p.",
      explain:
        "El objetivo no es memorizar etiquetas sueltas, sino combinarlas para construir paginas reales.",
      steps: [
        "Crea header con h1.",
        "Agrega nav.",
        "Crea main.",
        "Pon section y article.",
        "Cierra con footer.",
      ],
      required: ["<header", "<nav", "<main", "<section", "<article", "<footer"],
      example: `<header>
  <h1>Mi sitio</h1>
  <nav><a href="#practicas">Practicas</a></nav>
</header>
<main>
  <section id="practicas">
    <article>
      <h2>HTML</h2>
      <p>Primera practica completa.</p>
    </article>
  </section>
</main>
<footer>Fin</footer>`,
      lab: {
        html: `<header>
  <h1>Mi sitio</h1>
  <nav><a href="#practicas">Practicas</a></nav>
</header>
<main>
  <section id="practicas">
    <article>
      <h2>HTML</h2>
      <p>Primera practica completa.</p>
    </article>
  </section>
</main>
<footer>Fin</footer>`,
      },
    }),
  );

  curriculum.css.lessons.push(
    makeLesson({
      title: "Color y fondo",
      summary:
        "Vas a controlar color de texto y color de fondo con propiedades basicas.",
      goal: "Usar color y background.",
      challenge:
        "Escribi CSS para que body tenga background claro y color oscuro.",
      hint:
        "color afecta texto. background afecta el fondo.",
      rescue:
        "Selecciona body y escribe dos propiedades: color y background.",
      explain:
        "Color y fondo son las primeras decisiones visuales. Conviene mantener buen contraste para leer sin cansarse.",
      steps: ["Selecciona body.", "Agrega color.", "Agrega background."],
      required: ["body", "color", "background"],
      example: `body {
  color: #182126;
  background: #f7f4ef;
}`,
      lab: {
        html: `<h1>Color y fondo</h1>
<p>El contraste hace que leer sea mas facil.</p>`,
        css: `body {
  color: #182126;
  background: #f7f4ef;
  font-family: system-ui, sans-serif;
}`,
      },
    }),
    makeLesson({
      title: "Tipografia legible",
      summary:
        "Vas a ajustar fuente, tamano y altura de linea para leer mejor.",
      goal: "Usar font-family, font-size y line-height.",
      challenge:
        "Escribi una regla para body con font-family, font-size y line-height.",
      hint:
        "line-height da aire entre lineas.",
      rescue:
        "Selecciona body y agrega las tres propiedades.",
      explain:
        "La tipografia no es decoracion: define si una persona puede estudiar comoda durante varios minutos.",
      steps: [
        "Selecciona body.",
        "Define la fuente.",
        "Define tamano base.",
        "Ajusta line-height.",
      ],
      required: ["body", "font-family", "font-size", "line-height"],
      example: `body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}`,
      lab: {
        html: `<h1>Texto legible</h1>
<p>Una buena altura de linea ayuda a no perderse mientras lees.</p>`,
        css: `body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}`,
      },
    }),
    makeLesson({
      title: "Ancho maximo",
      summary:
        "Vas a evitar que los textos se estiren demasiado en pantallas grandes.",
      goal: "Usar max-width y margin auto.",
      challenge:
        "Escribi CSS para .contenido con max-width de 720px y margin auto.",
      hint:
        "max-width limita. margin: auto centra horizontalmente.",
      rescue:
        "Selecciona .contenido. Agrega max-width y margin.",
      explain:
        "Los parrafos muy largos cansan. Un ancho maximo hace que la lectura tenga ritmo.",
      steps: ["Selecciona clase.", "Limita ancho.", "Centra con margin."],
      required: [".contenido", "max-width", "margin", "auto"],
      example: `.contenido {
  max-width: 720px;
  margin: 0 auto;
}`,
      lab: {
        html: `<main class="contenido">
  <h1>Ancho comodo</h1>
  <p>Este bloque no ocupa toda la pantalla.</p>
</main>`,
        css: `.contenido {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
}`,
      },
    }),
    makeLesson({
      title: "Display block e inline",
      summary:
        "Vas a reconocer como cambia el comportamiento de los elementos.",
      goal: "Usar display block e inline-block.",
      challenge:
        "Escribi CSS para que .etiqueta sea inline-block con padding.",
      hint:
        "inline-block permite que el elemento fluya en linea y acepte padding.",
      rescue:
        "Selecciona .etiqueta. Agrega display inline-block y padding.",
      explain:
        "Display controla como ocupa espacio un elemento. Es una de las llaves para maquetar sin pelearte.",
      steps: ["Selecciona clase.", "Define display.", "Agrega padding."],
      required: [".etiqueta", "display", "inline-block", "padding"],
      example: `.etiqueta {
  display: inline-block;
  padding: 6px 10px;
}`,
      lab: {
        html: `<span class="etiqueta">HTML</span>
<span class="etiqueta">CSS</span>`,
        css: `.etiqueta {
  display: inline-block;
  padding: 6px 10px;
  background: gold;
}`,
      },
    }),
    makeLesson({
      title: "Bordes redondeados",
      summary:
        "Vas a controlar bordes y esquinas sin romper la legibilidad.",
      goal: "Usar border y border-radius.",
      challenge:
        "Escribi CSS para .panel con border y border-radius de 8px.",
      hint:
        "border dibuja el limite. border-radius redondea esquinas.",
      rescue:
        "Selecciona .panel y agrega border y border-radius.",
      explain:
        "Los bordes ayudan a separar zonas. Las esquinas redondeadas pueden suavizar una interfaz si se usan con moderacion.",
      steps: ["Selecciona panel.", "Agrega borde.", "Redondea esquinas."],
      required: [".panel", "border", "border-radius"],
      example: `.panel {
  border: 1px solid #182126;
  border-radius: 8px;
}`,
      lab: {
        html: `<section class="panel">Panel de practica</section>`,
        css: `.panel {
  padding: 20px;
  border: 1px solid #182126;
  border-radius: 8px;
}`,
      },
    }),
    makeLesson({
      title: "Sombras simples",
      summary:
        "Vas a dar profundidad con una sombra controlada.",
      goal: "Usar box-shadow.",
      challenge:
        "Escribi CSS para .tarjeta con box-shadow y padding.",
      hint:
        "Una sombra suave suele tener desplazamiento, desenfoque y color transparente.",
      rescue:
        "Selecciona .tarjeta. Agrega padding y box-shadow.",
      explain:
        "La sombra puede separar una tarjeta del fondo, pero demasiada sombra vuelve la pagina pesada.",
      steps: ["Selecciona tarjeta.", "Agrega espacio interno.", "Agrega sombra."],
      required: [".tarjeta", "padding", "box-shadow"],
      example: `.tarjeta {
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}`,
      lab: {
        html: `<article class="tarjeta">
  <h1>Sombra</h1>
  <p>La tarjeta se separa del fondo.</p>
</article>`,
        css: `.tarjeta {
  padding: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}`,
      },
    }),
    makeLesson({
      title: "Hover en enlaces",
      summary:
        "Vas a cambiar estilos cuando el mouse pasa por encima.",
      goal: "Usar :hover.",
      challenge:
        "Escribi CSS para que a:hover cambie el color y agregue text-decoration underline.",
      hint:
        "Los pseudoestados se escriben con dos puntos.",
      rescue:
        "Escribi a:hover y cambia color y text-decoration.",
      explain:
        "Los estados visuales dan feedback. La persona entiende que un elemento responde.",
      steps: ["Selecciona a:hover.", "Cambia color.", "Agrega subrayado."],
      required: ["a:hover", "color", "text-decoration"],
      example: `a:hover {
  color: seagreen;
  text-decoration: underline;
}`,
      lab: {
        html: `<a href="#practica">Pasar el mouse</a>`,
        css: `a {
  color: #2364aa;
}

a:hover {
  color: seagreen;
  text-decoration: underline;
}`,
      },
    }),
    makeLesson({
      title: "Focus visible",
      summary:
        "Vas a marcar cuando un control esta seleccionado con teclado.",
      goal: "Usar :focus-visible y outline.",
      challenge:
        "Escribi CSS para button:focus-visible con outline de 3px.",
      hint:
        "No quites el outline si no agregas una alternativa clara.",
      rescue:
        "Escribi button:focus-visible y outline.",
      explain:
        "Mucha gente navega con teclado. El foco visible muestra donde esta la accion actual.",
      steps: ["Selecciona focus-visible.", "Agrega outline.", "Prueba tab."],
      required: ["button:focus-visible", "outline"],
      example: `button:focus-visible {
  outline: 3px solid #2364aa;
  outline-offset: 3px;
}`,
      lab: {
        html: `<button>Probar foco</button>`,
        css: `button {
  padding: 10px 16px;
}

button:focus-visible {
  outline: 3px solid #2364aa;
  outline-offset: 3px;
}`,
      },
    }),
    makeLesson({
      title: "Variables CSS",
      summary:
        "Vas a guardar colores y valores repetidos para cambiarlos desde un solo lugar.",
      goal: "Usar :root, variables y var().",
      challenge:
        "Crea una variable --color-principal en :root y usala en h1 con var().",
      hint:
        "Las variables CSS empiezan con dos guiones.",
      rescue:
        "Primero :root con --color-principal. Despues h1 color var(...).",
      explain:
        "Las variables evitan repetir valores. Son muy utiles para paletas, espacios y tamanos.",
      steps: ["Crea :root.", "Define variable.", "Usa var()."],
      required: [":root", "--color-principal", "var("],
      example: `:root {
  --color-principal: seagreen;
}

h1 {
  color: var(--color-principal);
}`,
      lab: {
        html: `<h1>Variables CSS</h1>`,
        css: `:root {
  --color-principal: seagreen;
}

h1 {
  color: var(--color-principal);
}`,
      },
    }),
    makeLesson({
      title: "Grid basico",
      summary:
        "Vas a crear columnas con CSS Grid.",
      goal: "Usar display grid y grid-template-columns.",
      challenge:
        "Escribi CSS para .grid con display grid y dos columnas iguales.",
      hint:
        "repeat(2, 1fr) crea dos columnas iguales.",
      rescue:
        "Selecciona .grid. Agrega display grid y grid-template-columns.",
      explain:
        "Grid es excelente para layouts de dos dimensiones: filas y columnas.",
      steps: ["Selecciona grid.", "Activa display grid.", "Define columnas."],
      required: [".grid", "display", "grid", "grid-template-columns"],
      example: `.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}`,
      lab: {
        html: `<div class="grid">
  <article>Uno</article>
  <article>Dos</article>
</div>`,
        css: `.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

article {
  padding: 16px;
  border: 1px solid black;
}`,
      },
    }),
    makeLesson({
      title: "Gap en layouts",
      summary:
        "Vas a separar elementos sin poner margenes en cada hijo.",
      goal: "Usar gap en flex o grid.",
      challenge:
        "Escribi CSS para .acciones con display flex y gap de 12px.",
      hint:
        "gap vive en el contenedor, no en cada boton.",
      rescue:
        "Selecciona .acciones. Agrega display flex y gap.",
      explain:
        "Gap ordena el espacio entre hijos y simplifica mucho el CSS.",
      steps: ["Selecciona contenedor.", "Activa flex.", "Agrega gap."],
      required: [".acciones", "display", "flex", "gap"],
      example: `.acciones {
  display: flex;
  gap: 12px;
}`,
      lab: {
        html: `<div class="acciones">
  <button>Guardar</button>
  <button>Cancelar</button>
</div>`,
        css: `.acciones {
  display: flex;
  gap: 12px;
}`,
      },
    }),
    makeLesson({
      title: "Alineacion con flex",
      summary:
        "Vas a centrar elementos en el eje horizontal y vertical.",
      goal: "Usar justify-content y align-items.",
      challenge:
        "Escribi CSS para .centro con display flex, justify-content center y align-items center.",
      hint:
        "justify-content alinea en el eje principal. align-items en el eje cruzado.",
      rescue:
        "Tres propiedades: display flex, justify-content center, align-items center.",
      explain:
        "Centrar deja de ser misterioso cuando sabes cual es el contenedor y cuales son sus ejes.",
      steps: ["Activa flex.", "Centra eje principal.", "Centra eje cruzado."],
      required: [".centro", "display", "flex", "justify-content", "align-items"],
      example: `.centro {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      lab: {
        html: `<div class="centro">Centrado</div>`,
        css: `.centro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;
  border: 1px solid black;
}`,
      },
    }),
    makeLesson({
      title: "Position sticky",
      summary:
        "Vas a fijar una barra cuando llega al borde superior.",
      goal: "Usar position sticky y top.",
      challenge:
        "Escribi CSS para header con position sticky, top 0 y background.",
      hint:
        "Sticky necesita una posicion de referencia como top: 0.",
      rescue:
        "Selecciona header. Agrega position sticky y top 0.",
      explain:
        "Sticky es util para navegaciones que deben quedar a mano mientras se baja por una pagina.",
      steps: ["Selecciona header.", "Agrega position sticky.", "Define top."],
      required: ["header", "position", "sticky", "top"],
      example: `header {
  position: sticky;
  top: 0;
  background: white;
}`,
      lab: {
        html: `<header>Menu fijo al llegar arriba</header>
<main>
  <p>Contenido largo</p>
  <p>Mas contenido</p>
</main>`,
        css: `header {
  position: sticky;
  top: 0;
  padding: 12px;
  background: white;
  border-bottom: 1px solid black;
}

main {
  min-height: 500px;
}`,
      },
    }),
    makeLesson({
      title: "Capas con z-index",
      summary:
        "Vas a controlar que elemento queda por encima cuando hay superposicion.",
      goal: "Usar position y z-index.",
      challenge:
        "Escribi CSS para .flotante con position absolute y z-index 2.",
      hint:
        "z-index funciona en elementos posicionados.",
      rescue:
        "Agrega position absolute y z-index.",
      explain:
        "Las capas importan en menus, modales, etiquetas y elementos flotantes.",
      steps: ["Posiciona el elemento.", "Agrega z-index.", "Prueba superposicion."],
      required: [".flotante", "position", "absolute", "z-index"],
      example: `.flotante {
  position: absolute;
  z-index: 2;
}`,
      lab: {
        html: `<div class="escena">
  <div class="base">Base</div>
  <div class="flotante">Arriba</div>
</div>`,
        css: `.escena {
  position: relative;
  min-height: 160px;
}

.base,
.flotante {
  padding: 20px;
  border: 1px solid black;
}

.flotante {
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 2;
  background: gold;
}`,
      },
    }),
    makeLesson({
      title: "Transiciones",
      summary:
        "Vas a suavizar cambios visuales entre estados.",
      goal: "Usar transition.",
      challenge:
        "Escribi CSS para button con transition y un button:hover que cambie background.",
      hint:
        "La transition suele ir en el estado base.",
      rescue:
        "En button agrega transition. En button:hover cambia background.",
      explain:
        "Las transiciones hacen que una interaccion se sienta menos brusca.",
      steps: ["Define estado base.", "Agrega transition.", "Cambia algo en hover."],
      required: ["button", "transition", "button:hover", "background"],
      example: `button {
  transition: background 180ms ease;
}

button:hover {
  background: gold;
}`,
      lab: {
        html: `<button>Pasar mouse</button>`,
        css: `button {
  padding: 10px 16px;
  transition: background 180ms ease;
}

button:hover {
  background: gold;
}`,
      },
    }),
    makeLesson({
      title: "Transformaciones",
      summary:
        "Vas a mover o escalar elementos sin cambiar el layout.",
      goal: "Usar transform.",
      challenge:
        "Escribi CSS para .tarjeta:hover con transform translateY(-4px).",
      hint:
        "transform no empuja a los elementos vecinos.",
      rescue:
        "Selecciona .tarjeta:hover y agrega transform.",
      explain:
        "Transform es ideal para microinteracciones, porque mueve visualmente sin recalcular todo el flujo.",
      steps: ["Crea hover.", "Agrega transform.", "Prueba el movimiento."],
      required: [".tarjeta:hover", "transform", "translateY"],
      example: `.tarjeta:hover {
  transform: translateY(-4px);
}`,
      lab: {
        html: `<article class="tarjeta">Mover con hover</article>`,
        css: `.tarjeta {
  display: inline-block;
  padding: 20px;
  border: 1px solid black;
  transition: transform 180ms ease;
}

.tarjeta:hover {
  transform: translateY(-4px);
}`,
      },
    }),
    makeLesson({
      title: "Imagenes con object-fit",
      summary:
        "Vas a recortar imagenes sin deformarlas.",
      goal: "Usar width, height y object-fit.",
      challenge:
        "Escribi CSS para img con width 100%, height 220px y object-fit cover.",
      hint:
        "object-fit cover mantiene proporcion y recorta lo que sobra.",
      rescue:
        "Selecciona img y escribe width, height, object-fit.",
      explain:
        "Las imagenes se ven profesionales cuando mantienen proporcion y ocupan un marco estable.",
      steps: ["Define ancho.", "Define alto.", "Agrega object-fit."],
      required: ["img", "width", "height", "object-fit", "cover"],
      example: `img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`,
      lab: {
        html: `<img src="./archivos/imagenes/C%C3%A1mara%20sovi%C3%A9tica%20en%20arte%20urbano.png" alt="Camara">`,
        css: `img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`,
      },
    }),
    makeLesson({
      title: "Estilos de formularios",
      summary:
        "Vas a hacer que labels e inputs se lean como un grupo claro.",
      goal: "Usar display grid, gap y estilos de input.",
      challenge:
        "Escribi CSS para form con display grid y gap, y para input con padding.",
      hint:
        "El gap en form separa cada control.",
      rescue:
        "Una regla para form y otra para input.",
      explain:
        "Un formulario claro reduce errores. La separacion y el foco visual ayudan mucho.",
      steps: ["Estiliza form.", "Agrega gap.", "Estiliza input."],
      required: ["form", "display", "grid", "gap", "input", "padding"],
      example: `form {
  display: grid;
  gap: 10px;
}

input {
  padding: 10px;
}`,
      lab: {
        html: `<form>
  <label for="nombre">Nombre</label>
  <input id="nombre">
</form>`,
        css: `form {
  display: grid;
  gap: 10px;
  max-width: 320px;
}

input {
  padding: 10px;
}`,
      },
    }),
    makeLesson({
      title: "Botones consistentes",
      summary:
        "Vas a crear una clase reutilizable para botones.",
      goal: "Usar .boton con padding, border y background.",
      challenge:
        "Escribi CSS para .boton con padding, border, background y font-weight.",
      hint:
        "Una clase reutilizable evita repetir estilos en cada boton.",
      rescue:
        "Selecciona .boton y agrega cuatro propiedades.",
      explain:
        "Los componentes empiezan como clases repetibles: boton, tarjeta, panel, aviso.",
      steps: ["Crea clase.", "Agrega espacio.", "Define borde.", "Define color."],
      required: [".boton", "padding", "border", "background", "font-weight"],
      example: `.boton {
  padding: 10px 16px;
  border: 1px solid #182126;
  background: #e8b44f;
  font-weight: 800;
}`,
      lab: {
        html: `<button class="boton">Guardar</button>`,
        css: `.boton {
  padding: 10px 16px;
  border: 1px solid #182126;
  background: #e8b44f;
  font-weight: 800;
}`,
      },
    }),
    makeLesson({
      title: "Modo oscuro simple",
      summary:
        "Vas a responder a la preferencia de color del sistema.",
      goal: "Usar prefers-color-scheme.",
      challenge:
        "Escribi una media query prefers-color-scheme dark que cambie body background y color.",
      hint:
        "La media query es @media (prefers-color-scheme: dark).",
      rescue:
        "Escribi la media query y dentro una regla body.",
      explain:
        "No todo el mundo estudia con el mismo brillo. Respetar preferencias puede mejorar comodidad.",
      steps: ["Crea media query.", "Selecciona body.", "Cambia fondo y texto."],
      required: ["@media", "prefers-color-scheme", "dark", "body", "background", "color"],
      example: `@media (prefers-color-scheme: dark) {
  body {
    background: #172026;
    color: white;
  }
}`,
      lab: {
        html: `<h1>Modo oscuro</h1>
<p>El sistema decide si aplica.</p>`,
        css: `body {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #172026;
    color: white;
  }
}`,
      },
    }),
    makeLesson({
      title: "Pseudo-elementos",
      summary:
        "Vas a agregar decoracion desde CSS sin tocar el HTML.",
      goal: "Usar ::before y content.",
      challenge:
        "Escribi CSS para .nota::before con content \"!\" y margin-right.",
      hint:
        "Los pseudo-elementos necesitan content.",
      rescue:
        "Selecciona .nota::before y agrega content.",
      explain:
        "Los pseudo-elementos sirven para adornos o senales simples que no merecen HTML extra.",
      steps: ["Crea selector.", "Agrega content.", "Agrega separacion."],
      required: [".nota::before", "content", "margin-right"],
      example: `.nota::before {
  content: "!";
  margin-right: 6px;
}`,
      lab: {
        html: `<p class="nota">Recordatorio importante</p>`,
        css: `.nota::before {
  content: "!";
  margin-right: 6px;
  color: seagreen;
}`,
      },
    }),
    makeLesson({
      title: "Selectores por atributo",
      summary:
        "Vas a seleccionar elementos por atributos especificos.",
      goal: "Usar input[type=\"email\"].",
      challenge:
        "Escribi CSS para input[type=\"email\"] con border-color azul.",
      hint:
        "Los atributos se seleccionan con corchetes.",
      rescue:
        "Escribi input[type=\"email\"] y una propiedad border-color.",
      explain:
        "Los selectores por atributo son utiles cuando una clase no existe o queres apuntar a un tipo de campo.",
      steps: ["Escribe selector con corchetes.", "Agrega border.", "Cambia color."],
      required: ["input[type=\"email\"]", "border-color"],
      example: `input[type="email"] {
  border-color: #2364aa;
}`,
      lab: {
        html: `<input type="email" placeholder="correo">
<input type="text" placeholder="nombre">`,
        css: `input {
  display: block;
  margin: 8px;
  padding: 10px;
}

input[type="email"] {
  border-color: #2364aa;
}`,
      },
    }),
    makeLesson({
      title: "Mini layout de tarjetas",
      summary:
        "Vas a unir grid, gap, padding y bordes en una seccion real.",
      goal: "Crear una grilla de tarjetas responsive.",
      challenge:
        "Escribi CSS para .cards con grid de auto-fit y .card con padding y border.",
      hint:
        "auto-fit con minmax permite que la grilla se adapte.",
      rescue:
        "Primero .cards con display grid. Despues .card con padding y border.",
      explain:
        "Este patron aparece en portfolios, productos, lecciones, dashboards y galerias.",
      steps: [
        "Crea el contenedor grid.",
        "Usa repeat(auto-fit, minmax()).",
        "Estiliza cada tarjeta.",
      ],
      required: [".cards", "display", "grid", "auto-fit", "minmax", ".card", "padding", "border"],
      example: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.card {
  padding: 16px;
  border: 1px solid #182126;
}`,
      lab: {
        html: `<section class="cards">
  <article class="card">HTML</article>
  <article class="card">CSS</article>
  <article class="card">JS</article>
</section>`,
        css: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.card {
  padding: 16px;
  border: 1px solid #182126;
}`,
      },
    }),
  );

  curriculum.js.lessons.push(
    makeLesson({
      title: "Operaciones numericas",
      summary:
        "Vas a calcular valores con suma, resta, multiplicacion y division.",
      goal: "Usar operadores matematicos.",
      challenge:
        "Crea dos variables precio y cantidad. Calcula total multiplicandolas y mostralo con console.log.",
      hint:
        "La multiplicacion se escribe con *.",
      rescue:
        "Declara precio, cantidad y total. Despues console.log(total).",
      explain:
        "JS puede hacer calculos para carritos, contadores, puntajes, presupuestos y estadisticas.",
      steps: ["Crea dos numeros.", "Multiplica.", "Guarda total.", "Muestra total."],
      required: ["const", "precio", "cantidad", "total", "*", "console.log"],
      example: `const precio = 100;
const cantidad = 3;
const total = precio * cantidad;

console.log(total);`,
      lab: {
        html: `<p id="total"></p>`,
        js: `const precio = 100;
const cantidad = 3;
const total = precio * cantidad;

document.querySelector("#total").textContent = "Total: " + total;`,
      },
    }),
    makeLesson({
      title: "Textos y concatenacion",
      summary:
        "Vas a unir textos y variables para formar mensajes.",
      goal: "Crear un mensaje con strings.",
      challenge:
        "Crea una const nombre y una const mensaje que diga Hola, seguido del nombre.",
      hint:
        "Podes unir textos con el operador +.",
      rescue:
        "Primero nombre. Despues mensaje = \"Hola, \" + nombre.",
      explain:
        "Muchas interfaces muestran mensajes que dependen de datos: nombres, estados, cantidades o resultados.",
      steps: ["Crea nombre.", "Crea mensaje.", "Une texto y variable.", "Muestra mensaje."],
      required: ["const", "nombre", "mensaje", "+", "console.log"],
      example: `const nombre = "Dino";
const mensaje = "Hola, " + nombre;

console.log(mensaje);`,
      lab: {
        html: `<p id="mensaje"></p>`,
        js: `const nombre = "Dino";
const mensaje = "Hola, " + nombre;

document.querySelector("#mensaje").textContent = mensaje;`,
      },
    }),
    makeLesson({
      title: "Arrays",
      summary:
        "Vas a guardar varios valores dentro de una sola variable.",
      goal: "Crear un array y leer un item.",
      challenge:
        "Crea un array temas con HTML, CSS y JS. Muestra el primer item con console.log.",
      hint:
        "El primer item esta en la posicion 0.",
      rescue:
        "const temas = [...]. Luego console.log(temas[0]).",
      explain:
        "Los arrays guardan listas: productos, ejercicios, tareas, mensajes, usuarios.",
      steps: ["Crea array.", "Agrega tres textos.", "Lee indice 0.", "Muestra resultado."],
      required: ["const", "temas", "[", "]", "temas[0]", "console.log"],
      example: `const temas = ["HTML", "CSS", "JS"];
console.log(temas[0]);`,
      lab: {
        html: `<p id="tema"></p>`,
        js: `const temas = ["HTML", "CSS", "JS"];
document.querySelector("#tema").textContent = temas[0];`,
      },
    }),
    makeLesson({
      title: "Recorrer con forEach",
      summary:
        "Vas a hacer una accion por cada elemento de una lista.",
      goal: "Usar forEach.",
      challenge:
        "Crea un array temas y usa forEach para mostrar cada tema con console.log.",
      hint:
        "forEach recibe una funcion que se ejecuta por cada item.",
      rescue:
        "temas.forEach((tema) => console.log(tema));",
      explain:
        "Recorrer listas es una de las tareas mas comunes en JavaScript.",
      steps: ["Crea array.", "Llama forEach.", "Recibe cada item.", "Muestra item."],
      required: ["forEach", "console.log", "=>"],
      example: `const temas = ["HTML", "CSS", "JS"];

temas.forEach((tema) => {
  console.log(tema);
});`,
      lab: {
        html: `<ul id="lista"></ul>`,
        js: `const temas = ["HTML", "CSS", "JS"];
const lista = document.querySelector("#lista");

temas.forEach((tema) => {
  lista.innerHTML += "<li>" + tema + "</li>";
});`,
      },
    }),
    makeLesson({
      title: "Transformar con map",
      summary:
        "Vas a crear una nueva lista a partir de otra.",
      goal: "Usar map y return.",
      challenge:
        "Crea un array numeros y usa map para crear dobles.",
      hint:
        "map devuelve un array nuevo.",
      rescue:
        "const dobles = numeros.map((numero) => numero * 2);",
      explain:
        "Map es util cuando queres convertir datos sin modificar la lista original.",
      steps: ["Crea array.", "Llama map.", "Devuelve valor transformado.", "Guarda nuevo array."],
      required: ["map", "dobles", "*", "2"],
      example: `const numeros = [1, 2, 3];
const dobles = numeros.map((numero) => numero * 2);

console.log(dobles);`,
      lab: {
        html: `<p id="dobles"></p>`,
        js: `const numeros = [1, 2, 3];
const dobles = numeros.map((numero) => numero * 2);

document.querySelector("#dobles").textContent = dobles.join(", ");`,
      },
    }),
    makeLesson({
      title: "Filtrar datos",
      summary:
        "Vas a quedarte solo con los elementos que cumplen una condicion.",
      goal: "Usar filter.",
      challenge:
        "Crea un array puntos y usa filter para obtener los mayores o iguales a 5.",
      hint:
        "filter devuelve los items que dan true.",
      rescue:
        "puntos.filter((punto) => punto >= 5).",
      explain:
        "Filtrar sirve para busquedas, categorias, estados y resultados.",
      steps: ["Crea array.", "Llama filter.", "Escribe condicion.", "Guarda resultado."],
      required: ["filter", ">=", "5"],
      example: `const puntos = [3, 8, 5, 1];
const aprobados = puntos.filter((punto) => punto >= 5);

console.log(aprobados);`,
      lab: {
        html: `<p id="aprobados"></p>`,
        js: `const puntos = [3, 8, 5, 1];
const aprobados = puntos.filter((punto) => punto >= 5);

document.querySelector("#aprobados").textContent = aprobados.join(", ");`,
      },
    }),
    makeLesson({
      title: "Objetos",
      summary:
        "Vas a guardar datos relacionados en una misma estructura.",
      goal: "Crear objeto con propiedades.",
      challenge:
        "Crea un objeto usuario con nombre y nivel. Muestra usuario.nombre.",
      hint:
        "Las propiedades se escriben como clave: valor.",
      rescue:
        "const usuario = { nombre: ..., nivel: ... };",
      explain:
        "Los objetos representan cosas: usuario, producto, ejercicio, configuracion.",
      steps: ["Crea objeto.", "Agrega propiedades.", "Lee una propiedad.", "Muestrala."],
      required: ["const", "usuario", "nombre", "nivel", "usuario.nombre"],
      example: `const usuario = {
  nombre: "Dino",
  nivel: "basico",
};

console.log(usuario.nombre);`,
      lab: {
        html: `<p id="usuario"></p>`,
        js: `const usuario = {
  nombre: "Dino",
  nivel: "basico",
};

document.querySelector("#usuario").textContent =
  usuario.nombre + " - " + usuario.nivel;`,
      },
    }),
    makeLesson({
      title: "Funciones",
      summary:
        "Vas a agrupar instrucciones para reutilizarlas.",
      goal: "Crear y llamar una funcion.",
      challenge:
        "Crea una funcion saludar que muestre Hola en console.log y llamala.",
      hint:
        "Una funcion no corre hasta que la llamas.",
      rescue:
        "function saludar() { ... } y despues saludar();",
      explain:
        "Las funciones evitan repetir pasos y le dan nombres a acciones.",
      steps: ["Define funcion.", "Escribe accion.", "Cierra funcion.", "Llamala."],
      required: ["function", "saludar", "console.log", "saludar()"],
      example: `function saludar() {
  console.log("Hola");
}

saludar();`,
      lab: {
        html: `<p id="saludo"></p>`,
        js: `function saludar() {
  document.querySelector("#saludo").textContent = "Hola";
}

saludar();`,
      },
    }),
    makeLesson({
      title: "Parametros y return",
      summary:
        "Vas a crear funciones que reciben datos y devuelven resultados.",
      goal: "Usar parametros y return.",
      challenge:
        "Crea una funcion sumar que reciba a y b, devuelva la suma y guarda el resultado.",
      hint:
        "return entrega el resultado hacia afuera de la funcion.",
      rescue:
        "function sumar(a, b) { return a + b; }",
      explain:
        "Los parametros hacen que una funcion sea flexible. Return permite usar el resultado en otra parte.",
      steps: ["Define parametros.", "Calcula.", "Devuelve con return.", "Guarda resultado."],
      required: ["function", "sumar", "return", "a + b"],
      example: `function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado);`,
      lab: {
        html: `<p id="resultado"></p>`,
        js: `function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
document.querySelector("#resultado").textContent = resultado;`,
      },
    }),
    makeLesson({
      title: "Leer input",
      summary:
        "Vas a tomar lo que una persona escribe en un campo.",
      goal: "Usar value.",
      challenge:
        "Selecciona un input y un button. Al hacer click, muestra input.value en console.log.",
      hint:
        "El texto escrito en un input se lee con .value.",
      rescue:
        "Selecciona input, escucha click, console.log(input.value).",
      explain:
        "Leer valores es la base de buscadores, formularios, calculadoras y herramientas.",
      steps: ["Selecciona input.", "Selecciona boton.", "Escucha click.", "Lee value."],
      required: ["querySelector", "addEventListener", "click", ".value"],
      example: `const input = document.querySelector("input");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  console.log(input.value);
});`,
      lab: {
        html: `<input placeholder="Escribi algo">
<button>Leer</button>
<p id="salida"></p>`,
        js: `const input = document.querySelector("input");
const boton = document.querySelector("button");
const salida = document.querySelector("#salida");

boton.addEventListener("click", () => {
  salida.textContent = input.value;
});`,
      },
    }),
    makeLesson({
      title: "Enviar formulario",
      summary:
        "Vas a controlar el envio para evitar que la pagina se recargue.",
      goal: "Usar submit y preventDefault.",
      challenge:
        "Escucha el submit de un form y usa event.preventDefault().",
      hint:
        "preventDefault cancela el comportamiento automatico del navegador.",
      rescue:
        "form.addEventListener('submit', (event) => event.preventDefault()).",
      explain:
        "En aplicaciones web, muchas veces queres procesar el formulario con JS antes de enviar o recargar.",
      steps: ["Selecciona form.", "Escucha submit.", "Recibe event.", "Cancela default."],
      required: ["addEventListener", "submit", "event", "preventDefault"],
      example: `const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});`,
      lab: {
        html: `<form>
  <input placeholder="Nombre">
  <button>Enviar</button>
</form>
<p id="estado"></p>`,
        js: `const form = document.querySelector("form");
const estado = document.querySelector("#estado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  estado.textContent = "Formulario controlado con JS";
});`,
      },
    }),
    makeLesson({
      title: "Crear elementos",
      summary:
        "Vas a generar HTML desde JavaScript.",
      goal: "Usar createElement y append.",
      challenge:
        "Crea un li con document.createElement, asigna textContent y agregalo a un ul con append.",
      hint:
        "createElement crea el nodo, append lo inserta.",
      rescue:
        "li = document.createElement('li'); li.textContent = ...; ul.append(li).",
      explain:
        "Crear elementos desde JS permite renderizar listas de datos dinamicas.",
      steps: ["Selecciona ul.", "Crea li.", "Agrega texto.", "Inserta con append."],
      required: ["createElement", "textContent", "append"],
      example: `const lista = document.querySelector("ul");
const item = document.createElement("li");

item.textContent = "Nueva practica";
lista.append(item);`,
      lab: {
        html: `<ul></ul>`,
        js: `const lista = document.querySelector("ul");
const item = document.createElement("li");

item.textContent = "Nueva practica";
lista.append(item);`,
      },
    }),
    makeLesson({
      title: "Alternar clases",
      summary:
        "Vas a prender y apagar un estilo con un click.",
      goal: "Usar classList.toggle.",
      challenge:
        "Selecciona una tarjeta y un boton. Al hacer click, alterna la clase activa.",
      hint:
        "toggle agrega la clase si no esta y la quita si ya esta.",
      rescue:
        "boton click -> tarjeta.classList.toggle('activa').",
      explain:
        "Toggle es perfecto para menus, favoritos, filtros, acordeones y estados visuales.",
      steps: ["Selecciona elementos.", "Escucha click.", "Usa classList.toggle."],
      required: ["classList", "toggle", "addEventListener", "click"],
      example: `const tarjeta = document.querySelector(".tarjeta");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  tarjeta.classList.toggle("activa");
});`,
      lab: {
        html: `<article class="tarjeta">Tarjeta</article>
<button>Alternar</button>`,
        css: `.tarjeta {
  padding: 20px;
  border: 1px solid black;
}

.activa {
  background: gold;
}`,
        js: `const tarjeta = document.querySelector(".tarjeta");
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  tarjeta.classList.toggle("activa");
});`,
      },
    }),
    makeLesson({
      title: "Guardar en localStorage",
      summary:
        "Vas a guardar un dato en el navegador para recuperarlo despues.",
      goal: "Usar localStorage.setItem.",
      challenge:
        "Guarda el texto Practica activa con localStorage.setItem usando la clave estado.",
      hint:
        "localStorage guarda strings.",
      rescue:
        "localStorage.setItem('estado', 'Practica activa');",
      explain:
        "localStorage sirve para preferencias, notas, progreso y datos pequenos del navegador.",
      steps: ["Elige clave.", "Elige valor.", "Usa setItem.", "Prueba recargar."],
      required: ["localStorage", "setItem", "estado"],
      example: `localStorage.setItem("estado", "Practica activa");`,
      lab: {
        html: `<button>Guardar</button>
<p id="estado"></p>`,
        js: `const boton = document.querySelector("button");
const estado = document.querySelector("#estado");

boton.addEventListener("click", () => {
  localStorage.setItem("estado", "Practica activa");
  estado.textContent = "Guardado";
});`,
      },
    }),
    makeLesson({
      title: "Leer de localStorage",
      summary:
        "Vas a recuperar un dato guardado en el navegador.",
      goal: "Usar localStorage.getItem.",
      challenge:
        "Lee la clave estado desde localStorage y guardala en una const estado.",
      hint:
        "getItem devuelve el valor o null si no existe.",
      rescue:
        "const estado = localStorage.getItem('estado');",
      explain:
        "Leer datos guardados permite que una pagina recuerde configuraciones entre visitas.",
      steps: ["Usa getItem.", "Guarda en const.", "Muestra el valor."],
      required: ["localStorage", "getItem", "estado"],
      example: `const estado = localStorage.getItem("estado");
console.log(estado);`,
      lab: {
        html: `<p id="estado"></p>`,
        js: `const estado = localStorage.getItem("estado");
document.querySelector("#estado").textContent =
  estado || "Todavia no hay estado guardado";`,
      },
    }),
    makeLesson({
      title: "JSON stringify",
      summary:
        "Vas a convertir un objeto en texto para poder guardarlo.",
      goal: "Usar JSON.stringify.",
      challenge:
        "Crea un objeto practica y conviertelo a texto con JSON.stringify.",
      hint:
        "localStorage no guarda objetos directos, guarda texto.",
      rescue:
        "const texto = JSON.stringify(practica);",
      explain:
        "JSON es el formato puente entre datos de JS y texto guardable o enviable.",
      steps: ["Crea objeto.", "Usa JSON.stringify.", "Guarda texto."],
      required: ["JSON.stringify", "const", "practica"],
      example: `const practica = {
  tema: "JS",
  completa: false,
};

const texto = JSON.stringify(practica);
console.log(texto);`,
      lab: {
        html: `<pre id="salida"></pre>`,
        js: `const practica = {
  tema: "JS",
  completa: false,
};

const texto = JSON.stringify(practica);
document.querySelector("#salida").textContent = texto;`,
      },
    }),
    makeLesson({
      title: "JSON parse",
      summary:
        "Vas a convertir texto JSON de vuelta en objeto.",
      goal: "Usar JSON.parse.",
      challenge:
        "Crea un texto JSON con tema JS y conviertelo a objeto con JSON.parse.",
      hint:
        "El texto JSON necesita comillas dobles en las claves.",
      rescue:
        "const objeto = JSON.parse(texto);",
      explain:
        "Parsear JSON permite recuperar datos guardados o recibidos desde una API.",
      steps: ["Crea string JSON.", "Usa JSON.parse.", "Lee una propiedad."],
      required: ["JSON.parse", "tema"],
      example: `const texto = '{"tema":"JS"}';
const objeto = JSON.parse(texto);

console.log(objeto.tema);`,
      lab: {
        html: `<p id="tema"></p>`,
        js: `const texto = '{"tema":"JS"}';
const objeto = JSON.parse(texto);

document.querySelector("#tema").textContent = objeto.tema;`,
      },
    }),
    makeLesson({
      title: "Temporizador con setInterval",
      summary:
        "Vas a ejecutar una accion cada cierto tiempo.",
      goal: "Usar setInterval.",
      challenge:
        "Crea una let segundos en 0 y usa setInterval para sumar 1 cada segundo.",
      hint:
        "1000 milisegundos equivalen a un segundo.",
      rescue:
        "setInterval(() => { segundos = segundos + 1; }, 1000).",
      explain:
        "Los intervalos sirven para relojes, timers, animaciones simples y chequeos periodicos.",
      steps: ["Crea contador.", "Usa setInterval.", "Suma uno.", "Actualiza pantalla."],
      required: ["let", "segundos", "setInterval", "1000"],
      example: `let segundos = 0;

setInterval(() => {
  segundos = segundos + 1;
  console.log(segundos);
}, 1000);`,
      lab: {
        html: `<p id="segundos">0</p>`,
        js: `let segundos = 0;
const salida = document.querySelector("#segundos");

setInterval(() => {
  segundos = segundos + 1;
  salida.textContent = segundos;
}, 1000);`,
      },
    }),
    makeLesson({
      title: "Fechas con Date",
      summary:
        "Vas a crear una fecha actual y mostrarla.",
      goal: "Usar new Date().",
      challenge:
        "Crea una const hoy con new Date() y muestra hoy.getFullYear().",
      hint:
        "Date trae metodos como getFullYear.",
      rescue:
        "const hoy = new Date(); console.log(hoy.getFullYear()).",
      explain:
        "Las fechas aparecen en agendas, vencimientos, logs, publicaciones y filtros.",
      steps: ["Crea Date.", "Llama metodo.", "Muestra resultado."],
      required: ["new Date", "getFullYear", "console.log"],
      example: `const hoy = new Date();
console.log(hoy.getFullYear());`,
      lab: {
        html: `<p id="anio"></p>`,
        js: `const hoy = new Date();
document.querySelector("#anio").textContent =
  "Anio actual: " + hoy.getFullYear();`,
      },
    }),
    makeLesson({
      title: "Manejo de errores",
      summary:
        "Vas a probar codigo que puede fallar sin romper todo.",
      goal: "Usar try y catch.",
      challenge:
        "Escribi un try/catch que intente JSON.parse de un texto incorrecto y muestre el error.",
      hint:
        "catch recibe el error.",
      rescue:
        "try { JSON.parse(...) } catch (error) { console.log(error) }",
      explain:
        "Manejar errores permite responder mejor cuando un dato viene mal o una accion falla.",
      steps: ["Abre try.", "Ejecuta algo riesgoso.", "Agrega catch.", "Muestra error."],
      required: ["try", "catch", "JSON.parse", "console.log"],
      example: `try {
  JSON.parse("{mal json}");
} catch (error) {
  console.log(error);
}`,
      lab: {
        html: `<p id="error"></p>`,
        js: `try {
  JSON.parse("{mal json}");
} catch (error) {
  document.querySelector("#error").textContent = "Error controlado";
}`,
      },
    }),
    makeLesson({
      title: "Mini lista de tareas",
      summary:
        "Vas a unir input, evento, array y renderizado en un proyecto pequeno.",
      goal: "Crear una tarea desde un input.",
      challenge:
        "Crea un array tareas. Al hacer click en un boton, agrega input.value al array y renderiza un li.",
      hint:
        "push agrega al final del array.",
      rescue:
        "Lee input.value, tareas.push(...), crea li y append.",
      explain:
        "Este mini proyecto une muchos conceptos: datos, eventos, DOM y estado.",
      steps: [
        "Crea array tareas.",
        "Lee input.",
        "Escucha click.",
        "Agrega tarea.",
        "Renderiza li.",
      ],
      required: ["const", "tareas", "push", "addEventListener", "createElement", "append"],
      example: `const tareas = [];
const input = document.querySelector("input");
const lista = document.querySelector("ul");

document.querySelector("button").addEventListener("click", () => {
  tareas.push(input.value);
  const item = document.createElement("li");
  item.textContent = input.value;
  lista.append(item);
});`,
      lab: {
        html: `<input placeholder="Nueva tarea">
<button>Agregar</button>
<ul></ul>`,
        js: `const tareas = [];
const input = document.querySelector("input");
const lista = document.querySelector("ul");

document.querySelector("button").addEventListener("click", () => {
  if (!input.value) return;
  tareas.push(input.value);
  const item = document.createElement("li");
  item.textContent = input.value;
  lista.append(item);
  input.value = "";
});`,
      },
    }),
  );
}

const els = {
  trackTabs: document.querySelectorAll(".track-tab"),
  trackLabel: document.querySelector("#track-label"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonSummary: document.querySelector("#lesson-summary"),
  lessonGoal: document.querySelector("#lesson-goal"),
  lessonList: document.querySelector("#lesson-list"),
  lessonSearch: document.querySelector("#lesson-search"),
  filterChips: document.querySelectorAll(".filter-chip"),
  mapStatus: document.querySelector("#map-status"),
  challengeText: document.querySelector("#challenge-text"),
  answerInput: document.querySelector("#answer-input"),
  practiceEditor: document.querySelector("#practice-editor"),
  answerLines: document.querySelector("#answer-lines"),
  answerHighlight: document.querySelector("#answer-highlight"),
  editorFile: document.querySelector("#editor-file"),
  editorMode: document.querySelector("#editor-mode"),
  editorTrackPill: document.querySelector("#editor-track-pill"),
  editorShortcutPrimary: document.querySelector("#editor-shortcut-primary"),
  editorShortcutSecondary: document.querySelector("#editor-shortcut-secondary"),
  editorShortcutTertiary: document.querySelector("#editor-shortcut-tertiary"),
  checklist: document.querySelector("#checklist"),
  checklistSummary: document.querySelector("#checklist-summary"),
  guideList: document.querySelector("#guide-list"),
  guideSummary: document.querySelector("#guide-summary"),
  feedback: document.querySelector("#feedback"),
  hintButton: document.querySelector("#hint-button"),
  rescueButton: document.querySelector("#rescue-button"),
  rescueText: document.querySelector("#rescue-text"),
  checkButton: document.querySelector("#check-button"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
  clearButton: document.querySelector("#clear-button"),
  progressBar: document.querySelector("#progress-bar"),
  progressText: document.querySelector("#progress-text"),
  trackProgress: document.querySelector("#track-progress"),
  trackSummary: document.querySelector("#track-summary"),
  coachExplain: document.querySelector("#coach-explain"),
  microSteps: document.querySelector("#micro-steps"),
  exampleCode: document.querySelector("#example-code"),
  notes: document.querySelector("#notes"),
  htmlEditor: document.querySelector("#html-editor"),
  cssEditor: document.querySelector("#css-editor"),
  jsEditor: document.querySelector("#js-editor"),
  runLab: document.querySelector("#run-lab"),
  loadExample: document.querySelector("#load-example"),
  clearConsole: document.querySelector("#clear-console"),
  preview: document.querySelector("#preview"),
  consoleOutput: document.querySelector("#console-output"),
  consoleSummary: document.querySelector("#console-summary"),
  timer: document.querySelector("#timer"),
  timerToggle: document.querySelector("#timer-toggle"),
};

const trackOrder = Object.keys(curriculum);
const PREVIEW_MESSAGE_TYPE = "aula010101-preview-console";
const uiState = {
  lessonSearch: "",
  lessonFilter: "all",
};

let state = loadState();
let timerSeconds = 8 * 60;
let timerId = null;
let previewRunId = 0;
let consoleEntries = [];

function sanitizeState(value) {
  const fallback = { track: "html", lesson: 0, completed: {} };
  const raw = value && typeof value === "object" ? value : fallback;
  const track = curriculum[raw.track] ? raw.track : fallback.track;
  const maxLesson = curriculum[track].lessons.length - 1;
  const lessonValue = Number(raw.lesson);
  const lesson = Number.isFinite(lessonValue)
    ? Math.min(Math.max(Math.floor(lessonValue), 0), maxLesson)
    : fallback.lesson;
  const completed = {};

  if (raw.completed && typeof raw.completed === "object") {
    Object.entries(raw.completed).forEach(([key, isDone]) => {
      const [trackKey, lessonIndexText] = key.split("-");
      const lessonIndex = Number.parseInt(lessonIndexText, 10);

      if (
        isDone &&
        curriculum[trackKey] &&
        Number.isInteger(lessonIndex) &&
        lessonIndex >= 0 &&
        lessonIndex < curriculum[trackKey].lessons.length
      ) {
        completed[lessonId(trackKey, lessonIndex)] = true;
      }
    });
  }

  return { track, lesson, completed };
}

function loadState() {
  try {
    return sanitizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return sanitizeState(null);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLesson() {
  return curriculum[state.track].lessons[state.lesson];
}

function answerKey() {
  return `aula010101-answer-${state.track}-${state.lesson}`;
}

function labKey(part) {
  return `aula010101-lab-${state.track}-${state.lesson}-${part}`;
}

function lessonId(track = state.track, lesson = state.lesson) {
  return `${track}-${lesson}`;
}

function isLessonDone(track = state.track, lesson = state.lesson) {
  return Boolean(state.completed[lessonId(track, lesson)]);
}

function getTrackCompletedCount(track = state.track) {
  return curriculum[track].lessons.reduce(
    (total, _lesson, index) => total + Number(isLessonDone(track, index)),
    0,
  );
}

function getVisibleLessons() {
  const search = normalize(uiState.lessonSearch);

  return curriculum[state.track].lessons
    .map((lesson, index) => ({
      lesson,
      index,
      done: isLessonDone(state.track, index),
    }))
    .filter(({ lesson, done }) => {
      const matchesSearch =
        !search ||
        normalize(`${lesson.title} ${lesson.summary} ${lesson.goal}`).includes(search);

      if (!matchesSearch) return false;
      if (uiState.lessonFilter === "done") return done;
      if (uiState.lessonFilter === "pending") return !done;
      return true;
    });
}

function getPracticeEditorMeta() {
  return {
    html: {
      file: "reto.html",
      mode: "HTML",
      status: "HTML",
      placeholder: "Escribi tu HTML aca. No hace falta que sea perfecto.",
      shortcuts: ["Tab/Enter expande", "Ctrl+Enter comprueba", "Ctrl+/ comenta"],
    },
    css: {
      file: "reto.css",
      mode: "CSS",
      status: "CSS",
      placeholder: "Escribi tu CSS aca. Una regla por vez alcanza.",
      shortcuts: ["Tab/Enter snippet", "Ctrl+Enter comprueba", "Ctrl+/ comenta"],
    },
    js: {
      file: "reto.js",
      mode: "JavaScript",
      status: "JS",
      placeholder: "Escribi tu JS aca. Proba aunque sea una linea.",
      shortcuts: ["Tab/Enter snippet", "Ctrl+Enter comprueba", "Ctrl+/ comenta"],
    },
  }[state.track];
}

function getAnswerLineCount() {
  return Math.max(1, els.answerInput.value.split("\n").length);
}

function getCurrentAnswerLine() {
  return els.answerInput.value.slice(0, els.answerInput.selectionStart).split("\n").length;
}

function syncAnswerEditorScroll() {
  els.answerLines.scrollTop = els.answerInput.scrollTop;
  els.answerHighlight.scrollTop = els.answerInput.scrollTop;
  els.answerHighlight.scrollLeft = els.answerInput.scrollLeft;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function applyHighlightRules(value, rules) {
  const stash = [];
  let result = value;

  const hold = (markup) => {
    const index = stash.push(markup) - 1;
    return `\u0000${index}\u0000`;
  };

  rules.forEach(({ pattern, replacer }) => {
    result = result.replace(pattern, (...args) => hold(replacer(...args)));
  });

  return result.replace(/\u0000(\d+)\u0000/g, (_match, index) => stash[Number(index)]);
}

function highlightHtml(value) {
  const escaped = escapeHtml(value);

  return applyHighlightRules(escaped, [
    {
      pattern:
        /&lt;!--[\s\S]*?--&gt;|&lt;\/?[\w-]+(?:\s+[\w:-]+(?:=(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*\s*\/?&gt;/g,
      replacer: (token) => {
        if (token.startsWith("&lt;!--")) {
          return `<span class="token-comment">${token}</span>`;
        }

        const openPunct = token.match(/^&lt;\/?/)?.[0] || "&lt;";
        const closePunct = token.match(/\/?&gt;$/)?.[0] || "&gt;";
        const inner = token.slice(openPunct.length, token.length - closePunct.length);
        const tagName = inner.match(/^[\w-]+/)?.[0] || "";
        const attributesPart = inner.slice(tagName.length);
        const attributePattern = /\s+([\w:-]+)(?:=(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;
        let rendered = `<span class="token-punct">${openPunct}</span><span class="token-tag">${tagName}</span>`;
        let cursor = 0;
        let match = attributePattern.exec(attributesPart);

        while (match) {
          const attributeChunk = match[0];
          const attributeName = match[1];
          const equalIndex = attributeChunk.indexOf("=");

          rendered += attributeChunk.slice(cursor, match.index);

          if (equalIndex === -1) {
            rendered += ` <span class="token-attr">${attributeName}</span>`;
          } else {
            const attributeValue = attributeChunk.slice(equalIndex + 1);
            rendered += ` <span class="token-attr">${attributeName}</span><span class="token-punct">=</span><span class="token-string">${attributeValue}</span>`;
          }

          cursor = match.index + attributeChunk.length;
          match = attributePattern.exec(attributesPart);
        }

        rendered += attributesPart.slice(cursor);
        rendered += `<span class="token-punct">${closePunct}</span>`;
        return rendered;
      },
    },
  ]);
}

function highlightCss(value) {
  const escaped = escapeHtml(value);

  return applyHighlightRules(escaped, [
    {
      pattern: /\/\*[\s\S]*?\*\//g,
      replacer: (token) => `<span class="token-comment">${token}</span>`,
    },
    {
      pattern: /"[^"]*"|'[^']*'/g,
      replacer: (token) => `<span class="token-string">${token}</span>`,
    },
    {
      pattern: /(^|[\n}]\s*)(@[\w-]+)/g,
      replacer: (_match, prefix, atRule) =>
        `${prefix}<span class="token-keyword">${atRule}</span>`,
    },
    {
      pattern: /(^|[\n}]\s*)([^@\n{}]+)(\s*\{)/g,
      replacer: (_match, prefix, selector, suffix) =>
        `${prefix}<span class="token-tag">${selector.trim()}</span>${suffix}`,
    },
    {
      pattern: /([\w-]+)(\s*:)/g,
      replacer: (_match, property, suffix) =>
        `<span class="token-attr">${property}</span>${suffix}`,
    },
    {
      pattern: /#(?:[\da-f]{3,8})\b|\b-?\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|fr)?\b/gi,
      replacer: (token) => `<span class="token-number">${token}</span>`,
    },
  ]);
}

function highlightJs(value) {
  const escaped = escapeHtml(value);

  return applyHighlightRules(escaped, [
    {
      pattern: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
      replacer: (token) => `<span class="token-comment">${token}</span>`,
    },
    {
      pattern: /`(?:\\[\s\S]|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'/g,
      replacer: (token) => `<span class="token-string">${token}</span>`,
    },
    {
      pattern:
        /\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|new|class|extends|async|await|import|from|export|default|true|false|null|undefined)\b/g,
      replacer: (token) => `<span class="token-keyword">${token}</span>`,
    },
    {
      pattern: /\b\d+(?:\.\d+)?\b/g,
      replacer: (token) => `<span class="token-number">${token}</span>`,
    },
    {
      pattern: /[{}()[\].,;:+\-*/=<>!]+/g,
      replacer: (token) => `<span class="token-punct">${token}</span>`,
    },
  ]);
}

function highlightPracticeCode() {
  const value = els.answerInput.value;

  if (!value) {
    return `<span class="editor-placeholder">${escapeHtml(getPracticeEditorMeta().placeholder)}</span>`;
  }

  if (state.track === "html") return highlightHtml(value);
  if (state.track === "css") return highlightCss(value);
  return highlightJs(value);
}

function renderPracticeEditor() {
  const meta = getPracticeEditorMeta();
  const lineCount = getAnswerLineCount();
  const activeLine = getCurrentAnswerLine();

  els.practiceEditor.dataset.language = state.track;
  els.editorFile.textContent = meta.file;
  els.editorMode.textContent = meta.mode;
  els.editorTrackPill.textContent = meta.status;
  els.answerInput.placeholder = meta.placeholder;
  els.answerHighlight.innerHTML = `${highlightPracticeCode()}\n`;
  [els.editorShortcutPrimary.textContent, els.editorShortcutSecondary.textContent, els.editorShortcutTertiary.textContent] =
    meta.shortcuts;
  els.answerLines.innerHTML = Array.from(
    { length: lineCount },
    (_item, index) =>
      `<span class="${index + 1 === activeLine ? "is-active" : ""}">${index + 1}</span>`,
  ).join("");
  syncAnswerEditorScroll();
}

function saveAnswerDraft() {
  localStorage.setItem(answerKey(), els.answerInput.value);
}

function writeAnswer(value, selectionStart, selectionEnd = selectionStart) {
  els.answerInput.value = value;
  els.answerInput.focus();
  els.answerInput.selectionStart = selectionStart;
  els.answerInput.selectionEnd = selectionEnd;
  saveAnswerDraft();
  renderPracticeEditor();
  renderChecklist();
  renderLiveGuide();
}

const HTML_TAGS = new Set([
  "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi",
  "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code",
  "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog",
  "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer",
  "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr",
  "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li",
  "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript",
  "object", "ol", "optgroup", "option", "output", "p", "picture", "portal", "pre",
  "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "search", "section",
  "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary",
  "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
  "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr",
]);

const HTML_VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "source", "track", "wbr",
]);

const CURSOR_START_MARK = "__AULA_CURSOR_START__";
const CURSOR_END_MARK = "__AULA_CURSOR_END__";

const TRACK_SNIPPETS = {
  html: {
    a: `<a href="">${CURSOR_START_MARK}Link${CURSOR_END_MARK}</a>`,
    img: `<img src="${CURSOR_START_MARK}./archivos/imagenes/${CURSOR_END_MARK}" alt="">`,
    btn: `<button type="button">${CURSOR_START_MARK}Boton${CURSOR_END_MARK}</button>`,
    "btn:submit": `<button type="submit">${CURSOR_START_MARK}Enviar${CURSOR_END_MARK}</button>`,
    "link:css": `<link rel="stylesheet" href="${CURSOR_START_MARK}./styles/index.css${CURSOR_END_MARK}">`,
    "script:src": `<script src="${CURSOR_START_MARK}./script.js${CURSOR_END_MARK}"></script>`,
    "script:module": `<script type="module" src="${CURSOR_START_MARK}./script.js${CURSOR_END_MARK}"></script>`,
    "input:text": `<input type="text" name="${CURSOR_START_MARK}nombre${CURSOR_END_MARK}">`,
    "input:email": `<input type="email" name="${CURSOR_START_MARK}correo${CURSOR_END_MARK}">`,
    "input:password": `<input type="password" name="${CURSOR_START_MARK}clave${CURSOR_END_MARK}">`,
    "input:number": `<input type="number" name="${CURSOR_START_MARK}cantidad${CURSOR_END_MARK}">`,
    "input:checkbox": `<input type="checkbox" name="${CURSOR_START_MARK}acepta${CURSOR_END_MARK}">`,
    "label:for": `<label for="${CURSOR_START_MARK}campo${CURSOR_END_MARK}">Texto</label>`,
    "nav:ul": `<nav>
  <ul>
    <li><a href="">${CURSOR_START_MARK}Inicio${CURSOR_END_MARK}</a></li>
  </ul>
</nav>`,
    "form:get": `<form method="get">
  <label for="campo">${CURSOR_START_MARK}Campo${CURSOR_END_MARK}</label>
  <input id="campo" name="campo" type="text">
  <button type="submit">Enviar</button>
</form>`,
    "form:post": `<form method="post">
  <label for="campo">${CURSOR_START_MARK}Campo${CURSOR_END_MARK}</label>
  <input id="campo" name="campo" type="text">
  <button type="submit">Enviar</button>
</form>`,
    "table:basic": `<table>
  <thead>
    <tr>
      <th>${CURSOR_START_MARK}Encabezado${CURSOR_END_MARK}</th>
      <th>Dato</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Valor</td>
      <td>Valor</td>
    </tr>
  </tbody>
</table>`,
    video: `<video controls src="${CURSOR_START_MARK}./video.mp4${CURSOR_END_MARK}"></video>`,
    audio: `<audio controls src="${CURSOR_START_MARK}./audio.mp3${CURSOR_END_MARK}"></audio>`,
    picture: `<picture>
  <source srcset="${CURSOR_START_MARK}./imagen.webp${CURSOR_END_MARK}" type="image/webp">
  <img src="./imagen.jpg" alt="">
</picture>`,
    card: `<article class="card">
  <h2>${CURSOR_START_MARK}Titulo${CURSOR_END_MARK}</h2>
  <p>Texto.</p>
</article>`,
  },
  css: {
    df: `display: ${CURSOR_START_MARK}flex${CURSOR_END_MARK};`,
    dg: `display: ${CURSOR_START_MARK}grid${CURSOR_END_MARK};`,
    db: `display: ${CURSOR_START_MARK}block${CURSOR_END_MARK};`,
    dib: `display: ${CURSOR_START_MARK}inline-block${CURSOR_END_MARK};`,
    aic: `align-items: ${CURSOR_START_MARK}center${CURSOR_END_MARK};`,
    jcc: `justify-content: ${CURSOR_START_MARK}center${CURSOR_END_MARK};`,
    jcsb: `justify-content: ${CURSOR_START_MARK}space-between${CURSOR_END_MARK};`,
    jcsa: `justify-content: ${CURSOR_START_MARK}space-around${CURSOR_END_MARK};`,
    fdc: `flex-direction: ${CURSOR_START_MARK}column${CURSOR_END_MARK};`,
    fw: `flex-wrap: ${CURSOR_START_MARK}wrap${CURSOR_END_MARK};`,
    bg: `background: ${CURSOR_START_MARK}#ffffff${CURSOR_END_MARK};`,
    c: `color: ${CURSOR_START_MARK}#182126${CURSOR_END_MARK};`,
    gap: `gap: ${CURSOR_START_MARK}12px${CURSOR_END_MARK};`,
    br: `border-radius: ${CURSOR_START_MARK}8px${CURSOR_END_MARK};`,
    shadow: `box-shadow: ${CURSOR_START_MARK}0 12px 24px rgba(0, 0, 0, 0.12)${CURSOR_END_MARK};`,
    "pos:r": `position: ${CURSOR_START_MARK}relative${CURSOR_END_MARK};`,
    "pos:a": `position: ${CURSOR_START_MARK}absolute${CURSOR_END_MARK};`,
    "@m": `@media (max-width: ${CURSOR_START_MARK}700px${CURSOR_END_MARK}) {
  
}`,
    "@kf": `@keyframes ${CURSOR_START_MARK}aparecer${CURSOR_END_MARK} {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}`,
  },
  js: {
    clg: `console.log(${CURSOR_START_MARK}valor${CURSOR_END_MARK});`,
    sel: `document.querySelector("${CURSOR_START_MARK}.selector${CURSOR_END_MARK}")`,
    selall: `document.querySelectorAll("${CURSOR_START_MARK}.selector${CURSOR_END_MARK}")`,
    ae: `addEventListener("${CURSOR_START_MARK}click${CURSOR_END_MARK}", () => {
  
});`,
    fn: `function ${CURSOR_START_MARK}nombre${CURSOR_END_MARK}() {
  
}`,
    afn: `const ${CURSOR_START_MARK}nombre${CURSOR_END_MARK} = () => {
  
};`,
    if: `if (${CURSOR_START_MARK}condicion${CURSOR_END_MARK}) {
  
}`,
    ife: `if (${CURSOR_START_MARK}condicion${CURSOR_END_MARK}) {
  
} else {
  
}`,
    for: `for (let index = 0; index < ${CURSOR_START_MARK}items${CURSOR_END_MARK}.length; index += 1) {
  
}`,
    fe: `${CURSOR_START_MARK}items${CURSOR_END_MARK}.forEach((item) => {
  
});`,
    try: `try {
  
} catch (error) {
  console.error(error);
}`,
    timeout: `setTimeout(() => {
  
}, ${CURSOR_START_MARK}1000${CURSOR_END_MARK});`,
    interval: `setInterval(() => {
  
}, ${CURSOR_START_MARK}1000${CURSOR_END_MARK});`,
  },
};

const GUIDE_LIMIT = 8;

const HTML_GUIDE_LIBRARY = {
  doctype: {
    token: "<!doctype html>",
    kind: "Declaracion inicial",
    summary: "Le avisa al navegador que la pagina usa HTML moderno.",
    usage: "Se escribe una sola vez, al principio del archivo.",
    example: "<!doctype html>",
  },
  html: {
    token: "<html>",
    kind: "Raiz del documento",
    summary: "Envuelve todo el contenido HTML de la pagina.",
    usage: "Se usa una vez y suele llevar el idioma con lang.",
    example: '<html lang="es"></html>',
  },
  head: {
    token: "<head>",
    kind: "Configuracion",
    summary: "Guarda metadatos, enlaces y datos que no se ven en pantalla.",
    usage: "Va antes del body y sirve para titulo, estilos, fuentes y meta tags.",
    example: "<head></head>",
  },
  body: {
    token: "<body>",
    kind: "Contenido visible",
    summary: "Contiene lo que el usuario realmente ve en la pagina.",
    usage: "Todo el contenido visual y navegable va adentro de body.",
    example: "<body></body>",
  },
  title: {
    token: "<title>",
    kind: "Titulo del documento",
    summary: "Define el titulo que aparece en la pestana del navegador.",
    usage: "Se usa una vez dentro de head para nombrar la pagina.",
    example: "<title>Mi pagina</title>",
  },
  meta: {
    token: "<meta>",
    kind: "Metadato",
    summary: "Agrega informacion tecnica del documento, como charset o viewport.",
    usage: "Se usa dentro de head para configurar como se interpreta la pagina.",
    example: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  },
  link: {
    token: "<link>",
    kind: "Recurso externo",
    summary: "Conecta archivos externos, normalmente una hoja de estilos.",
    usage: "Sirve para cargar CSS, iconos o fuentes sin pegar el codigo en HTML.",
    example: '<link rel="stylesheet" href="./styles/index.css">',
  },
  script: {
    token: "<script>",
    kind: "JavaScript",
    summary: "Carga o contiene codigo JS para dar interaccion a la pagina.",
    usage: "Usalo cuando necesites eventos, logica o manipular el DOM.",
    example: '<script src="./script.js"></script>',
  },
  header: {
    token: "<header>",
    kind: "Cabecera",
    summary: "Representa la parte inicial de una pagina o seccion.",
    usage: "Suele contener logo, titulo, intro o navegacion principal.",
    example: "<header></header>",
  },
  nav: {
    token: "<nav>",
    kind: "Navegacion",
    summary: "Agrupa enlaces importantes para moverse por el sitio.",
    usage: "Usalo para menus principales o bloques de navegacion relevantes.",
    example: "<nav></nav>",
  },
  main: {
    token: "<main>",
    kind: "Contenido principal",
    summary: "Marca el contenido central y unico de la pagina.",
    usage: "Normalmente se usa una vez para lo mas importante del documento.",
    example: "<main></main>",
  },
  section: {
    token: "<section>",
    kind: "Seccion tematica",
    summary: "Agrupa contenido relacionado bajo una misma idea.",
    usage: "Conviene cuando el bloque tiene sentido propio, a veces con titulo.",
    example: "<section></section>",
  },
  article: {
    token: "<article>",
    kind: "Pieza independiente",
    summary: "Representa contenido que podria vivir por separado.",
    usage: "Es ideal para posts, cards, noticias o comentarios completos.",
    example: "<article></article>",
  },
  footer: {
    token: "<footer>",
    kind: "Pie",
    summary: "Cierra una pagina o seccion con datos finales.",
    usage: "Suele usarse para creditos, enlaces extra o informacion legal.",
    example: "<footer></footer>",
  },
  h1: {
    token: "<h1>",
    kind: "Titulo principal",
    summary: "Marca el titulo mas importante de la pagina.",
    usage: "Normalmente se usa una vez porque resume el tema central.",
    example: "<h1>Titulo principal</h1>",
  },
  h2: {
    token: "<h2>",
    kind: "Subtitulo",
    summary: "Introduce una seccion importante dentro del contenido.",
    usage: "Sirve para organizar la jerarquia despues del h1.",
    example: "<h2>Subtitulo</h2>",
  },
  h3: {
    token: "<h3>",
    kind: "Subnivel",
    summary: "Continua la jerarquia dentro de un bloque ya encabezado.",
    usage: "Usalo cuando una seccion necesita subapartados mas chicos.",
    example: "<h3>Detalle</h3>",
  },
  p: {
    token: "<p>",
    kind: "Parrafo",
    summary: "Contiene texto corrido o ideas completas en forma de parrafo.",
    usage: "Es la etiqueta base para texto normal de lectura.",
    example: "<p>Texto de apoyo.</p>",
  },
  a: {
    token: "<a>",
    kind: "Enlace",
    summary: "Crea un link hacia otra pagina, seccion o recurso.",
    usage: "Usalo para navegar o descargar algo con href.",
    example: '<a href="/contacto">Contacto</a>',
  },
  img: {
    token: "<img>",
    kind: "Imagen",
    summary: "Inserta una imagen en la pagina.",
    usage: "Necesita src y conviene sumar alt para describirla.",
    example: '<img src="./foto.jpg" alt="Descripcion de la imagen">',
  },
  ul: {
    token: "<ul>",
    kind: "Lista sin orden",
    summary: "Agrupa elementos cuando el orden no importa.",
    usage: "Sirve para menus, ventajas, pasos flexibles o colecciones simples.",
    example: "<ul><li>Item</li></ul>",
  },
  ol: {
    token: "<ol>",
    kind: "Lista ordenada",
    summary: "Agrupa elementos cuando el orden si importa.",
    usage: "Es ideal para pasos, rankings o instrucciones secuenciales.",
    example: "<ol><li>Paso 1</li></ol>",
  },
  li: {
    token: "<li>",
    kind: "Item de lista",
    summary: "Representa cada elemento dentro de una lista.",
    usage: "Va dentro de ul u ol para cada punto de la lista.",
    example: "<li>Elemento</li>",
  },
  div: {
    token: "<div>",
    kind: "Contenedor generico",
    summary: "Agrupa elementos sin agregar significado semantico.",
    usage: "Usalo cuando necesitas ordenar el layout y no hay una etiqueta mejor.",
    example: '<div class="card"></div>',
  },
  span: {
    token: "<span>",
    kind: "Contenedor en linea",
    summary: "Envuelve una parte pequena de texto o contenido en linea.",
    usage: "Sirve para aplicar estilo o marcar una porcion puntual.",
    example: "<span>Destacado</span>",
  },
  button: {
    token: "<button>",
    kind: "Boton",
    summary: "Dispara una accion dentro de la interfaz.",
    usage: "Usalo para enviar, abrir, guardar o reaccionar a un click.",
    example: '<button type="button">Guardar</button>',
  },
  form: {
    token: "<form>",
    kind: "Formulario",
    summary: "Agrupa campos y acciones para enviar datos.",
    usage: "Sirve para login, contacto, busqueda y cualquier ingreso de datos.",
    example: "<form></form>",
  },
  label: {
    token: "<label>",
    kind: "Etiqueta de campo",
    summary: "Nombra un input y mejora la accesibilidad del formulario.",
    usage: "Conviene unirla con for al id del campo que describe.",
    example: '<label for="nombre">Nombre</label>',
  },
  input: {
    token: "<input>",
    kind: "Campo de entrada",
    summary: "Recibe datos cortos como texto, email, numero o password.",
    usage: "Es la base de los formularios y cambia segun el atributo type.",
    example: '<input type="text" name="nombre">',
  },
  textarea: {
    token: "<textarea>",
    kind: "Texto largo",
    summary: "Permite escribir varias lineas de texto.",
    usage: "Es util para mensajes, comentarios o notas mas extensas.",
    example: "<textarea></textarea>",
  },
  select: {
    token: "<select>",
    kind: "Lista desplegable",
    summary: "Permite elegir una opcion de una lista.",
    usage: "Conviene cuando las opciones estan definidas de antemano.",
    example: "<select></select>",
  },
  option: {
    token: "<option>",
    kind: "Opcion",
    summary: "Representa cada alternativa dentro de un select.",
    usage: "Se usa dentro de select para cada valor posible.",
    example: '<option value="html">HTML</option>',
  },
  table: {
    token: "<table>",
    kind: "Tabla",
    summary: "Organiza datos en filas y columnas.",
    usage: "Sirve para informacion tabular, no para maquetar una pagina.",
    example: "<table></table>",
  },
  thead: {
    token: "<thead>",
    kind: "Cabecera de tabla",
    summary: "Agrupa las filas de encabezado de una tabla.",
    usage: "Ayuda a separar titulos de columnas del resto de los datos.",
    example: "<thead></thead>",
  },
  tbody: {
    token: "<tbody>",
    kind: "Cuerpo de tabla",
    summary: "Agrupa las filas principales con datos.",
    usage: "Sirve para distinguir los datos del encabezado y del pie.",
    example: "<tbody></tbody>",
  },
  tr: {
    token: "<tr>",
    kind: "Fila",
    summary: "Representa una fila completa dentro de una tabla.",
    usage: "Cada tr suele contener celdas th o td.",
    example: "<tr></tr>",
  },
  th: {
    token: "<th>",
    kind: "Celda de encabezado",
    summary: "Marca una celda que funciona como titulo de fila o columna.",
    usage: "Conviene para que la tabla tenga contexto y mejor accesibilidad.",
    example: "<th>Nombre</th>",
  },
  td: {
    token: "<td>",
    kind: "Celda de dato",
    summary: "Guarda un dato normal dentro de una tabla.",
    usage: "Va dentro de tr para cada valor de la fila.",
    example: "<td>Argentina</td>",
  },
  figure: {
    token: "<figure>",
    kind: "Bloque ilustrado",
    summary: "Agrupa una imagen, grafico o recurso visual como una unidad.",
    usage: "Es util cuando ese contenido puede llevar leyenda propia.",
    example: "<figure></figure>",
  },
  figcaption: {
    token: "<figcaption>",
    kind: "Leyenda",
    summary: "Agrega una descripcion o titulo a una figure.",
    usage: "Sirve para explicar una imagen o grafico sin mezclarlo con el texto general.",
    example: "<figcaption>Descripcion de la figura</figcaption>",
  },
  strong: {
    token: "<strong>",
    kind: "Importancia",
    summary: "Resalta una parte del texto como importante.",
    usage: "Conviene cuando el contenido tiene peso semantico, no solo visual.",
    example: "<strong>Importante</strong>",
  },
  em: {
    token: "<em>",
    kind: "Enfasis",
    summary: "Marca enfasis dentro de una frase.",
    usage: "Sirve para remarcar una idea con sentido, no solo con estilo.",
    example: "<em>Nota clave</em>",
  },
};

const CSS_GUIDE_LIBRARY = {
  ".class": {
    token: ".clase",
    kind: "Selector de clase",
    summary: "Apunta a cualquier elemento que tenga esa class.",
    usage: "Es la forma mas reutilizable de estilizar componentes.",
    example: ".card {\n  padding: 16px;\n}",
  },
  "#id": {
    token: "#id",
    kind: "Selector de id",
    summary: "Apunta a un elemento concreto con un id unico.",
    usage: "Conviene para piezas muy especificas, no para estilos repetidos.",
    example: "#hero {\n  min-height: 60vh;\n}",
  },
  "selector-tag": {
    token: "selector",
    kind: "Selector de etiqueta",
    summary: "Aplica estilos a todas las etiquetas de ese tipo.",
    usage: "Sirve para dar una base comun a p, h1, section u otros elementos.",
    example: "p {\n  line-height: 1.6;\n}",
  },
  ":hover": {
    token: ":hover",
    kind: "Pseudo-clase",
    summary: "Activa estilos cuando el puntero pasa por encima.",
    usage: "Es util para feedback visual en botones, links o cards.",
    example: "a:hover {\n  color: tomato;\n}",
  },
  ":focus": {
    token: ":focus",
    kind: "Pseudo-clase",
    summary: "Activa estilos cuando un elemento recibe foco.",
    usage: "Es clave para accesibilidad y navegacion con teclado.",
    example: "input:focus {\n  outline: 2px solid #0f766e;\n}",
  },
  "@media": {
    token: "@media",
    kind: "Regla responsive",
    summary: "Cambia estilos segun el tamano o contexto de la pantalla.",
    usage: "Se usa para adaptar el layout entre movil, tablet y desktop.",
    example: "@media (max-width: 700px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}",
  },
  "@keyframes": {
    token: "@keyframes",
    kind: "Animacion",
    summary: "Define las etapas de una animacion CSS.",
    usage: "Sirve cuando quieres controlar como cambia un elemento en el tiempo.",
    example: "@keyframes aparecer {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
  },
  display: {
    token: "display",
    kind: "Layout",
    summary: "Define como se comporta una caja en el flujo del documento.",
    usage: "Se usa para pasar entre block, inline, flex, grid y mas.",
    example: "display: flex;",
  },
  "flex-direction": {
    token: "flex-direction",
    kind: "Flexbox",
    summary: "Ordena los items flex en fila o columna.",
    usage: "Va junto a display: flex para decidir el eje principal.",
    example: "flex-direction: column;",
  },
  "justify-content": {
    token: "justify-content",
    kind: "Flexbox",
    summary: "Reparte los elementos a lo largo del eje principal.",
    usage: "Sirve para centrar, separar o alinear items en un contenedor flex.",
    example: "justify-content: center;",
  },
  "align-items": {
    token: "align-items",
    kind: "Flexbox",
    summary: "Alinea los elementos sobre el eje cruzado.",
    usage: "Se usa mucho para centrar verticalmente dentro de flex o grid.",
    example: "align-items: center;",
  },
  gap: {
    token: "gap",
    kind: "Espaciado",
    summary: "Agrega separacion entre items de flex o grid.",
    usage: "Es mejor que usar margenes sueltos cuando el espacio pertenece al contenedor.",
    example: "gap: 12px;",
  },
  margin: {
    token: "margin",
    kind: "Espacio exterior",
    summary: "Crea espacio por fuera de la caja.",
    usage: "Sirve para separar un elemento de los que lo rodean.",
    example: "margin: 24px;",
  },
  padding: {
    token: "padding",
    kind: "Espacio interior",
    summary: "Crea espacio entre el borde y el contenido interno.",
    usage: "Se usa para que una caja respire por dentro.",
    example: "padding: 16px;",
  },
  width: {
    token: "width",
    kind: "Tamano",
    summary: "Define el ancho del elemento.",
    usage: "Conviene cuando quieres controlar cuanto ocupa horizontalmente.",
    example: "width: 320px;",
  },
  height: {
    token: "height",
    kind: "Tamano",
    summary: "Define el alto del elemento.",
    usage: "Usalo con cuidado para cajas o medios con altura conocida.",
    example: "height: 180px;",
  },
  "max-width": {
    token: "max-width",
    kind: "Limite de ancho",
    summary: "Pone un ancho maximo sin romper la adaptacion responsive.",
    usage: "Es ideal para textos largos, contenedores y tarjetas.",
    example: "max-width: 720px;",
  },
  "min-height": {
    token: "min-height",
    kind: "Minimo de alto",
    summary: "Asegura una altura minima pero deja crecer el contenido.",
    usage: "Sirve para heroes, cards o secciones que necesitan presencia base.",
    example: "min-height: 60vh;",
  },
  background: {
    token: "background",
    kind: "Fondo",
    summary: "Define color, imagen o gradiente de fondo en una sola propiedad.",
    usage: "Conviene cuando el fondo tiene varias partes o un estilo compuesto.",
    example: "background: linear-gradient(#fff6e8, #dff2e8);",
  },
  "background-color": {
    token: "background-color",
    kind: "Color de fondo",
    summary: "Pinta el fondo del elemento con un color solido.",
    usage: "Es la forma mas directa de cambiar el fondo.",
    example: "background-color: #ffffff;",
  },
  color: {
    token: "color",
    kind: "Color de texto",
    summary: "Cambia el color del texto y de algunos elementos en linea.",
    usage: "Se usa para legibilidad, contraste y jerarquia visual.",
    example: "color: #182126;",
  },
  border: {
    token: "border",
    kind: "Borde",
    summary: "Dibuja el borde de la caja con grosor, estilo y color.",
    usage: "Sirve para separar, remarcar o estructurar visualmente.",
    example: "border: 1px solid #d6d9dc;",
  },
  "border-radius": {
    token: "border-radius",
    kind: "Esquinas",
    summary: "Redondea las esquinas de la caja.",
    usage: "Se usa para dar un look mas suave a botones, cards e inputs.",
    example: "border-radius: 12px;",
  },
  "box-shadow": {
    token: "box-shadow",
    kind: "Sombra",
    summary: "Agrega sombra alrededor del elemento.",
    usage: "Ayuda a separar capas y dar profundidad visual.",
    example: "box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);",
  },
  "font-size": {
    token: "font-size",
    kind: "Tipografia",
    summary: "Define el tamano del texto.",
    usage: "Sirve para jerarquia visual y legibilidad.",
    example: "font-size: 1rem;",
  },
  "font-weight": {
    token: "font-weight",
    kind: "Tipografia",
    summary: "Controla el grosor de la fuente.",
    usage: "Conviene para diferenciar titulos, subtitulos y texto base.",
    example: "font-weight: 700;",
  },
  "text-align": {
    token: "text-align",
    kind: "Alineacion",
    summary: "Alinea el contenido de texto dentro de la caja.",
    usage: "Se usa para centrar o acomodar bloques de texto.",
    example: "text-align: center;",
  },
  "line-height": {
    token: "line-height",
    kind: "Espacio entre lineas",
    summary: "Controla la separacion vertical entre lineas de texto.",
    usage: "Es clave para que parrafos y titulos se lean mejor.",
    example: "line-height: 1.6;",
  },
  position: {
    token: "position",
    kind: "Posicionamiento",
    summary: "Cambia como se ubica el elemento respecto del flujo o de su contenedor.",
    usage: "Sirve para usar top, left y superponer capas cuando hace falta.",
    example: "position: relative;",
  },
  top: {
    token: "top",
    kind: "Desplazamiento",
    summary: "Mueve el elemento desde el borde superior segun su posicionamiento.",
    usage: "Funciona con position relative, absolute, fixed o sticky.",
    example: "top: 0;",
  },
  right: {
    token: "right",
    kind: "Desplazamiento",
    summary: "Mueve el elemento desde el borde derecho segun su posicionamiento.",
    usage: "Se usa junto con position para ubicar un elemento con precision.",
    example: "right: 16px;",
  },
  bottom: {
    token: "bottom",
    kind: "Desplazamiento",
    summary: "Mueve el elemento desde el borde inferior segun su posicionamiento.",
    usage: "Sirve para anclar piezas al fondo de un contenedor.",
    example: "bottom: 0;",
  },
  left: {
    token: "left",
    kind: "Desplazamiento",
    summary: "Mueve el elemento desde el borde izquierdo segun su posicionamiento.",
    usage: "Se usa junto con position para acomodar capas o iconos.",
    example: "left: 16px;",
  },
  "grid-template-columns": {
    token: "grid-template-columns",
    kind: "Grid",
    summary: "Define cuantas columnas tiene una grilla y como se reparten.",
    usage: "Es la base para armar layouts con CSS Grid.",
    example: "grid-template-columns: repeat(3, 1fr);",
  },
  "place-items": {
    token: "place-items",
    kind: "Grid",
    summary: "Centra o alinea items en grid con una sola propiedad.",
    usage: "Es util para alinear facil en ambos ejes.",
    example: "place-items: center;",
  },
  transform: {
    token: "transform",
    kind: "Transformacion",
    summary: "Mueve, rota, escala o deforma el elemento sin cambiar el layout.",
    usage: "Se usa mucho en animaciones, hover y microinteracciones.",
    example: "transform: translateY(-4px);",
  },
  transition: {
    token: "transition",
    kind: "Transicion",
    summary: "Suaviza el cambio entre un estado y otro.",
    usage: "Sirve para hover, focus o cambios de clase menos bruscos.",
    example: "transition: transform 180ms ease;",
  },
  animation: {
    token: "animation",
    kind: "Animacion",
    summary: "Ejecuta una animacion definida con @keyframes.",
    usage: "Conviene para dar entrada, enfasis o movimiento controlado.",
    example: "animation: aparecer 400ms ease;",
  },
  opacity: {
    token: "opacity",
    kind: "Transparencia",
    summary: "Controla que tan visible es un elemento.",
    usage: "Sirve para fades, overlays y estados desactivados.",
    example: "opacity: 0.6;",
  },
  overflow: {
    token: "overflow",
    kind: "Desborde",
    summary: "Decide que pasa cuando el contenido se sale de la caja.",
    usage: "Es util para scroll, recortes y componentes con contenido largo.",
    example: "overflow: auto;",
  },
  "object-fit": {
    token: "object-fit",
    kind: "Medios",
    summary: "Define como una imagen o video encaja dentro de su caja.",
    usage: "Sirve para recortar o contener medios sin deformarlos.",
    example: "object-fit: cover;",
  },
  cursor: {
    token: "cursor",
    kind: "Interaccion",
    summary: "Cambia el icono del puntero segun la accion esperada.",
    usage: "Se usa para reforzar que algo es clickable o arrastrable.",
    example: "cursor: pointer;",
  },
};

const JS_GUIDE_LIBRARY = [
  {
    id: "const",
    token: "const",
    kind: "Variable fija",
    summary: "Declara un nombre que no se reasigna despues.",
    usage: "Usalo por defecto cuando esa referencia debe seguir apuntando al mismo valor.",
    example: 'const boton = document.querySelector("button");',
    pattern: /\bconst\b/,
  },
  {
    id: "let",
    token: "let",
    kind: "Variable mutable",
    summary: "Declara un nombre cuyo valor puede cambiar.",
    usage: "Conviene cuando realmente necesitas reasignar ese dato.",
    example: "let contador = 0;",
    pattern: /\blet\b/,
  },
  {
    id: "function",
    token: "function",
    kind: "Funcion",
    summary: "Declara un bloque reutilizable de codigo.",
    usage: "Sirve para agrupar pasos y ejecutarlos cuando haga falta.",
    example: "function saludar() {\n  console.log('Hola');\n}",
    pattern: /\bfunction\b/,
  },
  {
    id: "arrow",
    token: "=>",
    kind: "Arrow function",
    summary: "Crea una funcion con sintaxis corta.",
    usage: "Se usa mucho en callbacks y funciones pequenas.",
    example: "const saludar = () => {\n  console.log('Hola');\n};",
    pattern: /=>/,
  },
  {
    id: "if",
    token: "if",
    kind: "Condicional",
    summary: "Ejecuta codigo solo si una condicion se cumple.",
    usage: "Sirve para tomar decisiones dentro de la logica.",
    example: "if (activo) {\n  console.log('Ok');\n}",
    pattern: /\bif\b/,
  },
  {
    id: "else",
    token: "else",
    kind: "Alternativa",
    summary: "Marca que hacer cuando la condicion anterior no se cumple.",
    usage: "Complementa a if para cubrir el otro camino posible.",
    example: "if (ok) {\n  return;\n} else {\n  console.log('Falta');\n}",
    pattern: /\belse\b/,
  },
  {
    id: "return",
    token: "return",
    kind: "Salida de funcion",
    summary: "Devuelve un valor y corta la ejecucion de la funcion actual.",
    usage: "Se usa para entregar resultados o terminar antes una funcion.",
    example: "return total;",
    pattern: /\breturn\b/,
  },
  {
    id: "for",
    token: "for",
    kind: "Bucle",
    summary: "Repite un bloque de codigo mientras una condicion lo permita.",
    usage: "Conviene cuando necesitas recorrer por indice.",
    example: "for (let index = 0; index < items.length; index += 1) {\n  console.log(items[index]);\n}",
    pattern: /\bfor\b/,
  },
  {
    id: "forEach",
    token: ".forEach()",
    kind: "Iteracion",
    summary: "Recorre un array ejecutando una funcion por cada elemento.",
    usage: "Es comodo cuando quieres leer o renderizar items uno por uno.",
    example: "items.forEach((item) => {\n  console.log(item);\n});",
    pattern: /\.forEach\s*\(/,
  },
  {
    id: "map",
    token: ".map()",
    kind: "Transformacion",
    summary: "Crea un nuevo array transformando cada elemento.",
    usage: "Sirve cuando de un array quieres producir otro con la misma cantidad de items.",
    example: "const nombres = items.map((item) => item.nombre);",
    pattern: /\.map\s*\(/,
  },
  {
    id: "filter",
    token: ".filter()",
    kind: "Filtrado",
    summary: "Crea un nuevo array solo con los elementos que cumplen una condicion.",
    usage: "Es util para buscar coincidencias o limpiar datos.",
    example: "const activos = items.filter((item) => item.activo);",
    pattern: /\.filter\s*\(/,
  },
  {
    id: "push",
    token: ".push()",
    kind: "Array",
    summary: "Agrega un elemento al final de un array.",
    usage: "Se usa para guardar datos nuevos en una lista existente.",
    example: 'tareas.push("Practicar HTML");',
    pattern: /\.push\s*\(/,
  },
  {
    id: "querySelectorAll",
    token: "querySelectorAll()",
    kind: "DOM",
    summary: "Busca varios elementos en el documento usando un selector CSS.",
    usage: "Conviene cuando quieres trabajar con una lista de nodos.",
    example: 'document.querySelectorAll(".card");',
    pattern: /\bquerySelectorAll\s*\(/,
  },
  {
    id: "querySelector",
    token: "querySelector()",
    kind: "DOM",
    summary: "Busca el primer elemento que coincide con un selector CSS.",
    usage: "Es una de las formas mas comunes de traer un nodo del DOM.",
    example: 'document.querySelector("#app");',
    pattern: /\bquerySelector\s*\(/,
  },
  {
    id: "getElementById",
    token: "getElementById()",
    kind: "DOM",
    summary: "Busca un elemento por su id.",
    usage: "Es util cuando ya sabes exactamente que nodo necesitas.",
    example: 'document.getElementById("app");',
    pattern: /\bgetElementById\s*\(/,
  },
  {
    id: "addEventListener",
    token: "addEventListener()",
    kind: "Eventos",
    summary: "Escucha una accion del usuario o del navegador.",
    usage: "Se usa para responder a click, input, submit, keydown y otros eventos.",
    example: 'boton.addEventListener("click", () => {\n  console.log("click");\n});',
    pattern: /\baddEventListener\s*\(/,
  },
  {
    id: "createElement",
    token: "createElement()",
    kind: "DOM",
    summary: "Crea un elemento nuevo desde JavaScript.",
    usage: "Sirve cuando el HTML se arma en tiempo real con datos.",
    example: 'const item = document.createElement("li");',
    pattern: /\bcreateElement\s*\(/,
  },
  {
    id: "append",
    token: ".append()",
    kind: "DOM",
    summary: "Inserta nodos o texto al final de un elemento.",
    usage: "Se usa para agregar elementos creados o renderizados al DOM.",
    example: "lista.append(item);",
    pattern: /\.append(?:Child)?\s*\(/,
  },
  {
    id: "classList",
    token: ".classList",
    kind: "Clases CSS",
    summary: "Permite agregar, quitar o alternar clases desde JS.",
    usage: "Sirve para mostrar estados visuales como activo, abierto o error.",
    example: 'card.classList.toggle("is-active");',
    pattern: /\.classList\b/,
  },
  {
    id: "textContent",
    token: ".textContent",
    kind: "Texto",
    summary: "Lee o cambia el texto plano de un elemento.",
    usage: "Conviene cuando quieres insertar texto sin interpretar HTML.",
    example: 'titulo.textContent = "Nuevo titulo";',
    pattern: /\.textContent\b/,
  },
  {
    id: "innerHTML",
    token: ".innerHTML",
    kind: "HTML dinamico",
    summary: "Lee o reemplaza el HTML interno de un elemento.",
    usage: "Es rapido para renderizar marcado, aunque conviene usarlo con cuidado.",
    example: 'lista.innerHTML = "<li>Item</li>";',
    pattern: /\.innerHTML\b/,
  },
  {
    id: "value",
    token: ".value",
    kind: "Valor de campo",
    summary: "Lee o cambia el valor de inputs, selects y textareas.",
    usage: "Es la propiedad base para obtener lo que escribe el usuario.",
    example: "console.log(input.value);",
    pattern: /\.value\b/,
  },
  {
    id: "preventDefault",
    token: "preventDefault()",
    kind: "Control de evento",
    summary: "Evita la accion por defecto del navegador.",
    usage: "Se usa mucho en formularios, links o atajos de teclado personalizados.",
    example: "event.preventDefault();",
    pattern: /\bpreventDefault\s*\(/,
  },
  {
    id: "setTimeout",
    token: "setTimeout()",
    kind: "Tiempo",
    summary: "Ejecuta una funcion una sola vez despues de esperar un tiempo.",
    usage: "Sirve para retrasos, mensajes temporales o pasos diferidos.",
    example: "setTimeout(() => {\n  console.log('listo');\n}, 1000);",
    pattern: /\bsetTimeout\s*\(/,
  },
  {
    id: "setInterval",
    token: "setInterval()",
    kind: "Tiempo",
    summary: "Ejecuta una funcion repetidamente cada cierto tiempo.",
    usage: "Conviene para relojes, contadores o chequeos periodicos.",
    example: "setInterval(() => {\n  console.log('tic');\n}, 1000);",
    pattern: /\bsetInterval\s*\(/,
  },
  {
    id: "console-log",
    token: "console.log()",
    kind: "Depuracion",
    summary: "Muestra informacion en la consola para revisar que esta pasando.",
    usage: "Es util para entender valores, eventos y flujo durante la practica.",
    example: "console.log(datos);",
    pattern: /\bconsole\.log\s*\(/,
  },
  {
    id: "try",
    token: "try",
    kind: "Manejo de errores",
    summary: "Prueba un bloque de codigo que podria fallar.",
    usage: "Sirve cuando quieres interceptar errores sin romper toda la ejecucion.",
    example: "try {\n  ejecutar();\n} catch (error) {\n  console.error(error);\n}",
    pattern: /\btry\b/,
  },
  {
    id: "catch",
    token: "catch",
    kind: "Manejo de errores",
    summary: "Recibe el error lanzado dentro de un bloque try.",
    usage: "Se usa para reaccionar, avisar o registrar un error.",
    example: "catch (error) {\n  console.error(error);\n}",
    pattern: /\bcatch\b/,
  },
  {
    id: "async",
    token: "async",
    kind: "Asincronia",
    summary: "Marca una funcion que trabaja con promesas y espera resultados.",
    usage: "Conviene cuando necesitas await dentro de una funcion.",
    example: "async function cargarDatos() {\n  return [];\n}",
    pattern: /\basync\b/,
  },
  {
    id: "await",
    token: "await",
    kind: "Asincronia",
    summary: "Espera a que una promesa se resuelva antes de seguir.",
    usage: "Se usa dentro de funciones async para leer codigo asincrono mas claro.",
    example: "const datos = await fetch(url);",
    pattern: /\bawait\b/,
  },
];

function storeGuideEntry(detected, id, entry, index) {
  const current = detected.get(id);

  if (!current || index < current.index) {
    detected.set(id, { ...entry, index });
  }
}

function buildGenericHtmlGuideEntry(tag) {
  return {
    token: `<${tag}>`,
    kind: "Etiqueta HTML",
    summary: "Representa una pieza del contenido o de la estructura del documento.",
    usage: "Usala cuando el nombre de la etiqueta describa bien el rol real de ese bloque.",
    example: HTML_VOID_TAGS.has(tag) ? `<${tag}>` : `<${tag}></${tag}>`,
  };
}

function buildGenericCssGuideEntry(property) {
  return {
    token: property,
    kind: "Propiedad CSS",
    summary: "Ajusta una parte puntual del aspecto visual de un selector.",
    usage: "Se usa dentro de una regla CSS para cambiar ese detalle del estilo.",
    example: `${property}: valor;`,
  };
}

function getHtmlGuideEntries(value) {
  const detected = new Map();
  const doctypeMatch = /<!doctype html>/i.exec(value);

  if (doctypeMatch) {
    storeGuideEntry(detected, "doctype", HTML_GUIDE_LIBRARY.doctype, doctypeMatch.index || 0);
  }

  const tagPattern = /<\s*([a-z][\w-]*)\b/gi;
  let match = tagPattern.exec(value);

  while (match) {
    const tag = match[1].toLowerCase();
    const entry = HTML_GUIDE_LIBRARY[tag] || buildGenericHtmlGuideEntry(tag);
    storeGuideEntry(detected, tag, entry, match.index);
    match = tagPattern.exec(value);
  }

  return Array.from(detected.values())
    .sort((first, second) => first.index - second.index)
    .slice(0, GUIDE_LIMIT);
}

function getCssGuideEntries(value) {
  const detected = new Map();
  const specialRules = [
    { id: ".class", pattern: /(^|}|,)\s*\.[\w-]+\s*\{/im },
    { id: "#id", pattern: /(^|}|,)\s*#[\w-]+\s*\{/im },
    { id: "selector-tag", pattern: /(^|}|,)\s*[a-z][\w-]*\s*\{/im },
    { id: ":hover", pattern: /:hover\b/i },
    { id: ":focus", pattern: /:focus\b/i },
    { id: "@media", pattern: /@media\b/i },
    { id: "@keyframes", pattern: /@keyframes\b/i },
  ];

  specialRules.forEach(({ id, pattern }) => {
    const match = pattern.exec(value);

    if (match) {
      storeGuideEntry(detected, id, CSS_GUIDE_LIBRARY[id], match.index || 0);
    }
  });

  const propertyPattern = /(^|[{;]\s*)([a-z-]+)\s*:/gim;
  let match = propertyPattern.exec(value);

  while (match) {
    const property = match[2].toLowerCase();
    const entry = CSS_GUIDE_LIBRARY[property] || buildGenericCssGuideEntry(property);
    const index = match.index + match[1].length;
    storeGuideEntry(detected, property, entry, index);
    match = propertyPattern.exec(value);
  }

  return Array.from(detected.values())
    .sort((first, second) => first.index - second.index)
    .slice(0, GUIDE_LIMIT);
}

function getJsGuideEntries(value) {
  const detected = new Map();

  JS_GUIDE_LIBRARY.forEach((entry) => {
    const match = entry.pattern.exec(value);

    if (!match) return;

    storeGuideEntry(detected, entry.id, entry, match.index || 0);
  });

  return Array.from(detected.values())
    .sort((first, second) => first.index - second.index)
    .slice(0, GUIDE_LIMIT);
}

function getLiveGuideEntries(value = els.answerInput.value) {
  if (state.track === "html") return getHtmlGuideEntries(value);
  if (state.track === "css") return getCssGuideEntries(value);
  return getJsGuideEntries(value);
}

function getGuideEmptyState() {
  return {
    html: {
      summary: "Esperando etiquetas para explicar",
      title: "Escribe una etiqueta HTML",
      description:
        "Cuando detectemos piezas como h1, p, section o form, te contaremos para que sirve cada una y por que se usa.",
    },
    css: {
      summary: "Esperando reglas para explicar",
      title: "Escribe una regla CSS",
      description:
        "Cuando aparezcan selectores o propiedades como display, gap o color, te vamos a explicar que cambia cada una.",
    },
    js: {
      summary: "Esperando codigo para explicar",
      title: "Escribe una instruccion JS",
      description:
        "Cuando detectemos palabras clave o APIs como const, if o addEventListener, te vamos a contar que hacen y cuando conviene usarlas.",
    },
  }[state.track];
}

function renderLiveGuide() {
  const entries = getLiveGuideEntries();

  if (!entries.length) {
    const emptyState = getGuideEmptyState();
    els.guideSummary.textContent = emptyState.summary;
    els.guideList.innerHTML = `
      <article class="guide-card guide-card--empty">
        <strong>${escapeHtml(emptyState.title)}</strong>
        <p>${escapeHtml(emptyState.description)}</p>
      </article>
    `;
    return;
  }

  const visibleCount = entries.length;
  const label = visibleCount === 1 ? "pieza explicada" : "piezas explicadas";
  els.guideSummary.textContent = `${visibleCount} ${label} en esta respuesta`;
  els.guideList.innerHTML = entries
    .map(
      (entry) => `
        <article class="guide-card">
          <div class="guide-card__header">
            <code class="guide-card__token">${escapeHtml(entry.token)}</code>
            <span class="guide-card__kind">${escapeHtml(entry.kind)}</span>
          </div>
          <p class="guide-card__summary">${escapeHtml(entry.summary)}</p>
          <p class="guide-card__usage"><strong>Cuando usarlo:</strong> ${escapeHtml(entry.usage)}</p>
          <p class="guide-card__example-label"><strong>Ejemplo real:</strong></p>
          <pre class="guide-card__example"><code>${escapeHtml(entry.example)}</code></pre>
        </article>
      `,
    )
    .join("");
}

function getCurrentAnswerLineContext() {
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;
  const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
  let lineEnd = value.indexOf("\n", selectionEnd);
  lineEnd = lineEnd === -1 ? value.length : lineEnd;

  const lineText = value.slice(lineStart, lineEnd);
  const lineIndent = lineText.match(/^\s*/)?.[0] || "";

  return {
    value,
    selectionStart,
    selectionEnd,
    lineStart,
    lineEnd,
    lineText,
    lineIndent,
    trimmedLine: lineText.trim(),
  };
}

function indentTemplate(template, lineIndent) {
  return template
    .split("\n")
    .map((line) => `${lineIndent}${line}`)
    .join("\n");
}

function replaceAnswerRange(start, end, replacement, relativeStart, relativeEnd = relativeStart) {
  const value = els.answerInput.value;
  const nextValue = `${value.slice(0, start)}${replacement}${value.slice(end)}`;
  writeAnswer(nextValue, start + relativeStart, start + relativeEnd);
}

function replaceCurrentAnswerLine(lineStart, lineEnd, replacement) {
  const value = els.answerInput.value;
  const cursorStart = replacement.indexOf(CURSOR_START_MARK);
  const cursorEnd = replacement.indexOf(CURSOR_END_MARK);
  let cleanReplacement = replacement;
  let selectionStart = lineStart + replacement.length;
  let selectionEnd = selectionStart;

  if (cursorStart !== -1) {
    cleanReplacement = cleanReplacement.replace(CURSOR_START_MARK, "");
    selectionStart = lineStart + cursorStart;
  }

  if (cursorEnd !== -1) {
    const cleanCursorEnd = cleanReplacement.indexOf(CURSOR_END_MARK);
    cleanReplacement = cleanReplacement.replace(CURSOR_END_MARK, "");
    selectionEnd = lineStart + cleanCursorEnd;
  } else {
    selectionEnd = selectionStart;
  }

  const nextValue = `${value.slice(0, lineStart)}${cleanReplacement}${value.slice(lineEnd)}`;
  writeAnswer(nextValue, selectionStart, selectionEnd);
}

function getAnswerSelectionOrCurrentLine() {
  const context = getCurrentAnswerLineContext();

  if (context.selectionStart !== context.selectionEnd) {
    return {
      start: context.selectionStart,
      end: context.selectionEnd,
      text: context.value.slice(context.selectionStart, context.selectionEnd),
    };
  }

  return {
    start: context.lineStart,
    end: context.lineEnd,
    text: context.lineText,
  };
}

function getLineIndexFromOffset(value, offset) {
  return value.slice(0, offset).split("\n").length - 1;
}

function getAnswerLineSelection() {
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;
  const lines = value.split("\n");
  const startLine = getLineIndexFromOffset(value, selectionStart);
  let endLine = getLineIndexFromOffset(value, selectionEnd);

  if (selectionEnd > selectionStart && value[selectionEnd - 1] === "\n") {
    endLine -= 1;
  }

  endLine = Math.max(startLine, endLine);

  return {
    value,
    lines,
    startLine,
    endLine,
  };
}

function getOffsetFromLineIndex(lines, targetLine, column = 0) {
  let offset = column;

  for (let index = 0; index < targetLine; index += 1) {
    offset += lines[index].length + 1;
  }

  return offset;
}

function writeLineSelection(lines, startLine, endLine) {
  const nextValue = lines.join("\n");
  const selectionStart = getOffsetFromLineIndex(lines, startLine);
  const selectionEnd =
    endLine === lines.length - 1
      ? nextValue.length
      : getOffsetFromLineIndex(lines, endLine + 1);

  writeAnswer(nextValue, selectionStart, selectionEnd);
}

function splitTopLevel(value, separator) {
  const parts = [];
  let current = "";
  let squareDepth = 0;
  let curlyDepth = 0;
  let roundDepth = 0;
  let quote = "";

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];

    if (quote) {
      current += char;
      if (char === quote && value[index - 1] !== "\\") {
        quote = "";
      }
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }

    if (char === "[") squareDepth += 1;
    if (char === "]") squareDepth -= 1;
    if (char === "{") curlyDepth += 1;
    if (char === "}") curlyDepth -= 1;
    if (char === "(") roundDepth += 1;
    if (char === ")") roundDepth -= 1;

    if (
      char === separator &&
      squareDepth === 0 &&
      curlyDepth === 0 &&
      roundDepth === 0
    ) {
      parts.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  parts.push(current);
  return parts;
}

function findClosingIndex(value, startIndex, openChar, closeChar) {
  let depth = 0;
  let quote = "";

  for (let index = startIndex; index < value.length; index += 1) {
    const char = value[index];

    if (quote) {
      if (char === quote && value[index - 1] !== "\\") {
        quote = "";
      }
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }

    if (char === openChar) depth += 1;
    if (char === closeChar) depth -= 1;
    if (depth === 0) return index;
  }

  return -1;
}

function readAbbreviationToken(value, startIndex) {
  let index = startIndex;

  while (index < value.length && /[\w:$-]/.test(value[index])) {
    index += 1;
  }

  if (index === startIndex) return null;

  return {
    value: value.slice(startIndex, index),
    nextIndex: index,
  };
}

function parseHtmlAttributes(value) {
  const attributes = [];
  let index = 0;

  while (index < value.length) {
    while (index < value.length && /\s/.test(value[index])) {
      index += 1;
    }

    if (index >= value.length) break;

    const nameStart = index;
    while (index < value.length && !/[\s=]/.test(value[index])) {
      index += 1;
    }

    const name = value.slice(nameStart, index);
    if (!name) return null;

    while (index < value.length && /\s/.test(value[index])) {
      index += 1;
    }

    if (value[index] !== "=") {
      attributes.push({ name, value: null });
      continue;
    }

    index += 1;

    while (index < value.length && /\s/.test(value[index])) {
      index += 1;
    }

    let attributeValue = "";

    if (value[index] === '"' || value[index] === "'") {
      const quote = value[index];
      index += 1;
      const valueStart = index;

      while (index < value.length && value[index] !== quote) {
        index += 1;
      }

      if (index >= value.length) return null;

      attributeValue = value.slice(valueStart, index);
      index += 1;
    } else {
      const valueStart = index;

      while (index < value.length && !/\s/.test(value[index])) {
        index += 1;
      }

      attributeValue = value.slice(valueStart, index);
    }

    attributes.push({ name, value: attributeValue });
  }

  return attributes;
}

function isValidHtmlTag(tag) {
  return HTML_TAGS.has(tag) || tag.includes("-");
}

function parseHtmlSegment(segment) {
  const value = segment.trim();
  if (!value) return null;

  let index = 0;
  let tag = "div";
  const tagMatch = value.match(/^[a-zA-Z][\w-]*/);

  if (tagMatch) {
    tag = tagMatch[0].toLowerCase();
    index = tag.length;
  } else if (![".", "#", "[", "{"].includes(value[0])) {
    return null;
  }

  if (!isValidHtmlTag(tag)) return null;

  const node = {
    tag,
    id: "",
    classes: [],
    attributes: [],
    text: "",
    repeat: 1,
    children: [],
  };

  while (index < value.length) {
    const char = value[index];

    if (char === ".") {
      const token = readAbbreviationToken(value, index + 1);
      if (!token) return null;
      node.classes.push(token.value);
      index = token.nextIndex;
      continue;
    }

    if (char === "#") {
      const token = readAbbreviationToken(value, index + 1);
      if (!token) return null;
      node.id = token.value;
      index = token.nextIndex;
      continue;
    }

    if (char === "[") {
      const closingIndex = findClosingIndex(value, index, "[", "]");
      if (closingIndex === -1) return null;

      const attributes = parseHtmlAttributes(value.slice(index + 1, closingIndex));
      if (!attributes) return null;

      node.attributes.push(...attributes);
      index = closingIndex + 1;
      continue;
    }

    if (char === "{") {
      const closingIndex = findClosingIndex(value, index, "{", "}");
      if (closingIndex === -1) return null;

      node.text = value.slice(index + 1, closingIndex);
      index = closingIndex + 1;
      continue;
    }

    if (char === "*") {
      const repeatMatch = value.slice(index + 1).match(/^\d+/);
      if (!repeatMatch) return null;

      node.repeat = Math.max(1, Number(repeatMatch[0]));
      index += repeatMatch[0].length + 1;
      continue;
    }

    return null;
  }

  return node;
}

function parseHtmlExpression(value, startIndex = 0) {
  const nodes = [];
  let index = startIndex;

  while (index < value.length) {
    const segmentStart = index;

    while (index < value.length && ![">", "+"].includes(value[index])) {
      if (value[index] === "[") {
        const closingIndex = findClosingIndex(value, index, "[", "]");
        if (closingIndex === -1) return null;
        index = closingIndex + 1;
        continue;
      }

      if (value[index] === "{") {
        const closingIndex = findClosingIndex(value, index, "{", "}");
        if (closingIndex === -1) return null;
        index = closingIndex + 1;
        continue;
      }

      index += 1;
    }

    const segment = value.slice(segmentStart, index).trim();
    if (!segment) return null;

    const node = parseHtmlSegment(segment);
    if (!node) return null;

    if (value[index] === ">") {
      const childExpression = parseHtmlExpression(value, index + 1);
      if (!childExpression) return null;

      node.children = childExpression.nodes;
      index = childExpression.index;
    }

    nodes.push(node);

    if (value[index] === "+") {
      index += 1;
      continue;
    }

    break;
  }

  return { nodes, index };
}

function parseHtmlAbbreviation(value) {
  const result = parseHtmlExpression(value.trim());
  if (!result) return null;

  return result.index === value.trim().length ? result.nodes : null;
}

function replaceCounterTokens(value, counter) {
  return value.replace(/\$+/g, (match) => String(counter).padStart(match.length, "0"));
}

function renderHtmlNode(node, depth, cursorState, counter = 1) {
  const repeatIndex = counter;
  const tag = replaceCounterTokens(node.tag, repeatIndex);
  const indent = "  ".repeat(depth);
  const attributes = [];

  if (node.id) {
    attributes.push(`id="${replaceCounterTokens(node.id, repeatIndex)}"`);
  }

  if (node.classes.length) {
    attributes.push(
      `class="${node.classes.map((item) => replaceCounterTokens(item, repeatIndex)).join(" ")}"`,
    );
  }

  node.attributes.forEach((attribute) => {
    if (attribute.value === null) {
      attributes.push(attribute.name);
      return;
    }

    attributes.push(
      `${attribute.name}="${replaceCounterTokens(attribute.value, repeatIndex)}"`,
    );
  });

  const openingTag = `<${tag}${attributes.length ? ` ${attributes.join(" ")}` : ""}>`;
  const text = replaceCounterTokens(node.text, repeatIndex);

  if (HTML_VOID_TAGS.has(tag)) {
    return `${indent}${openingTag}`;
  }

  if (node.children.length) {
    const renderedChildren = [];

    node.children.forEach((child) => {
      for (let index = 1; index <= child.repeat; index += 1) {
        renderedChildren.push(
          renderHtmlNode(
            child,
            depth + 1,
            cursorState,
            child.repeat > 1 ? index : repeatIndex,
          ),
        );
      }
    });

    return `${indent}${openingTag}\n${renderedChildren.join("\n")}\n${indent}</${tag}>`;
  }

  if (text) {
    return `${indent}${openingTag}${text}</${tag}>`;
  }

  if (!cursorState.used) {
    cursorState.used = true;
    return `${indent}${openingTag}${CURSOR_START_MARK}${CURSOR_END_MARK}</${tag}>`;
  }

  return `${indent}${openingTag}</${tag}>`;
}

function renderHtmlAbbreviation(nodes, baseIndent) {
  const cursorState = { used: false };
  const rendered = [];

  nodes.forEach((node) => {
    for (let index = 1; index <= node.repeat; index += 1) {
      rendered.push(renderHtmlNode(node, 0, cursorState, index));
    }
  });

  return rendered
    .join("\n")
    .split("\n")
    .map((line) => `${baseIndent}${line}`)
    .join("\n");
}

function buildCssNumericSnippet(token) {
  const match = token.match(
    /^(m|mt|mr|mb|ml|mx|my|p|pt|pr|pb|pl|px|py|gap|br|fs|w|h|minw|minh|maxw|maxh)(-?\d+)$/,
  );
  if (!match) return null;

  const [, key, rawValue] = match;
  const value = `${rawValue}px`;
  const snippets = {
    m: `margin: ${value};`,
    mt: `margin-top: ${value};`,
    mr: `margin-right: ${value};`,
    mb: `margin-bottom: ${value};`,
    ml: `margin-left: ${value};`,
    mx: `margin-inline: ${value};`,
    my: `margin-block: ${value};`,
    p: `padding: ${value};`,
    pt: `padding-top: ${value};`,
    pr: `padding-right: ${value};`,
    pb: `padding-bottom: ${value};`,
    pl: `padding-left: ${value};`,
    px: `padding-inline: ${value};`,
    py: `padding-block: ${value};`,
    gap: `gap: ${value};`,
    br: `border-radius: ${value};`,
    fs: `font-size: ${value};`,
    w: `width: ${value};`,
    h: `height: ${value};`,
    minw: `min-width: ${value};`,
    minh: `min-height: ${value};`,
    maxw: `max-width: ${value};`,
    maxh: `max-height: ${value};`,
  };

  return snippets[key] || null;
}

function getTrackSnippetTemplate(track, token) {
  const exact = TRACK_SNIPPETS[track]?.[token];
  if (exact) return exact;

  if (track === "css") {
    return buildCssNumericSnippet(token);
  }

  return null;
}

function handleTrackSnippetShortcut(event) {
  const context = getCurrentAnswerLineContext();

  if (context.selectionStart !== context.selectionEnd || !context.trimmedLine) return false;

  const template = getTrackSnippetTemplate(state.track, context.trimmedLine);
  if (!template) return false;

  event.preventDefault();
  replaceCurrentAnswerLine(
    context.lineStart,
    context.lineEnd,
    indentTemplate(template, context.lineIndent),
  );

  return true;
}

function handleHtmlBangShortcut(event) {
  const context = getCurrentAnswerLineContext();

  if (state.track !== "html" || context.selectionStart !== context.selectionEnd) return false;
  if (context.trimmedLine !== "!") return false;

  event.preventDefault();

  const template = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi pagina</title>
  </head>
  <body>
    <h1>Mi primera pagina</h1>
  </body>
</html>`;
  const replacement = template
    .replace("Mi primera pagina", `${CURSOR_START_MARK}Mi primera pagina${CURSOR_END_MARK}`)
    .split("\n")
    .map((line) => `${context.lineIndent}${line}`)
    .join("\n");

  replaceCurrentAnswerLine(context.lineStart, context.lineEnd, replacement);

  return true;
}

function handleHtmlAbbreviationShortcut(event) {
  const context = getCurrentAnswerLineContext();

  if (state.track !== "html" || context.selectionStart !== context.selectionEnd) return false;
  if (!context.trimmedLine || context.trimmedLine.includes("<")) return false;

  const nodes = parseHtmlAbbreviation(context.trimmedLine);
  if (!nodes) return false;

  event.preventDefault();
  replaceCurrentAnswerLine(
    context.lineStart,
    context.lineEnd,
    renderHtmlAbbreviation(nodes, context.lineIndent),
  );

  return true;
}

function handleHtmlShortcut(event) {
  return (
    handleHtmlBangShortcut(event) ||
    handleTrackSnippetShortcut(event) ||
    handleHtmlAbbreviationShortcut(event)
  );
}

function handleHtmlTagAutocomplete(event) {
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;

  if (
    state.track !== "html" ||
    event.ctrlKey ||
    event.metaKey ||
    event.altKey ||
    selectionStart !== selectionEnd
  ) {
    return false;
  }

  const before = value.slice(0, selectionStart);
  const after = value.slice(selectionEnd);
  const lastOpenIndex = before.lastIndexOf("<");
  const lastCloseIndex = before.lastIndexOf(">");

  if (lastOpenIndex === -1 || lastOpenIndex < lastCloseIndex) return false;

  const fragment = before.slice(lastOpenIndex + 1).trim();
  if (!fragment || fragment.startsWith("/") || fragment.endsWith("/")) return false;
  if (!/^[a-z][\w-]*(\s[^<>]*)?$/i.test(fragment)) return false;

  const tag = fragment.match(/^[a-z][\w-]*/i)?.[0]?.toLowerCase();
  if (!tag || HTML_VOID_TAGS.has(tag) || after.startsWith(">")) return false;

  event.preventDefault();
  replaceAnswerRange(selectionStart, selectionEnd, `></${tag}>`, 1);

  return true;
}

function handleAnswerTab(event) {
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;

  event.preventDefault();

  if (selectionStart === selectionEnd) {
    writeAnswer(
      `${value.slice(0, selectionStart)}  ${value.slice(selectionEnd)}`,
      selectionStart + 2,
    );
    return;
  }

  const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
  let lineEnd = value.indexOf("\n", selectionEnd);
  lineEnd = lineEnd === -1 ? value.length : lineEnd;

  const block = value.slice(lineStart, lineEnd);
  const lines = block.split("\n");

  if (event.shiftKey) {
    const removed = lines.map((line) => {
      if (line.startsWith("  ")) return 2;
      if (line.startsWith("\t")) return 1;
      if (line.startsWith(" ")) return 1;
      return 0;
    });
    const updatedBlock = lines
      .map((line, index) => line.slice(removed[index]))
      .join("\n");
    const removedTotal = removed.reduce((sum, amount) => sum + amount, 0);
    const nextValue = `${value.slice(0, lineStart)}${updatedBlock}${value.slice(lineEnd)}`;
    const nextStart = Math.max(lineStart, selectionStart - removed[0]);
    const nextEnd = Math.max(nextStart, selectionEnd - removedTotal);

    writeAnswer(nextValue, nextStart, nextEnd);
    return;
  }

  const updatedBlock = lines.map((line) => `  ${line}`).join("\n");
  const nextValue = `${value.slice(0, lineStart)}${updatedBlock}${value.slice(lineEnd)}`;
  const nextStart = selectionStart + 2;
  const nextEnd = selectionEnd + lines.length * 2;

  writeAnswer(nextValue, nextStart, nextEnd);
}

function handleAnswerEnter(event) {
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;
  const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
  const currentLine = value.slice(lineStart, selectionStart);
  const indent = currentLine.match(/^[\t ]*/)?.[0] || "";
  const trimmedLine = currentLine.trimEnd();
  const previousChar = value[selectionStart - 1];
  const nextChar = value[selectionEnd];
  const openTagMatch = value.slice(0, selectionStart).match(/<([a-z][\w-]*)(\s[^<>]*)?>$/i);
  const closeTagMatch = value.slice(selectionEnd).match(/^<\/([a-z][\w-]*)>/i);

  event.preventDefault();

  if (
    state.track === "html" &&
    selectionStart === selectionEnd &&
    previousChar === ">" &&
    openTagMatch &&
    closeTagMatch &&
    openTagMatch[1].toLowerCase() === closeTagMatch[1].toLowerCase()
  ) {
    const insert = `\n${indent}  \n${indent}`;
    writeAnswer(
      `${value.slice(0, selectionStart)}${insert}${value.slice(selectionEnd)}`,
      selectionStart + indent.length + 3,
    );
    return;
  }

  if (
    selectionStart === selectionEnd &&
    ((previousChar === "{" && nextChar === "}") ||
      (previousChar === "[" && nextChar === "]") ||
      (previousChar === "(" && nextChar === ")"))
  ) {
    const insert = `\n${indent}  \n${indent}`;
    writeAnswer(
      `${value.slice(0, selectionStart)}${insert}${value.slice(selectionEnd)}`,
      selectionStart + indent.length + 3,
    );
    return;
  }

  const opensBlock =
    /[({\[]\s*$/.test(trimmedLine) ||
    (/<([a-z][\w-]*)(\s[^>]*)?>$/i.test(trimmedLine) && !/\/>\s*$/.test(trimmedLine));
  const insert = `\n${indent}${opensBlock ? "  " : ""}`;

  writeAnswer(
    `${value.slice(0, selectionStart)}${insert}${value.slice(selectionEnd)}`,
    selectionStart + insert.length,
  );
}

function handleAnswerPair(event) {
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
    '"': '"',
    "'": "'",
    "`": "`",
  };
  const close = pairs[event.key];

  if (!close || event.ctrlKey || event.metaKey || event.altKey) return false;

  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;
  const selected = value.slice(selectionStart, selectionEnd);
  const previousChar = value[selectionStart - 1] || "";
  const nextChar = value[selectionEnd] || "";
  const isQuote = event.key === '"' || event.key === "'" || event.key === "`";

  if (
    isQuote &&
    selectionStart === selectionEnd &&
    /[\w)]/.test(previousChar) &&
    /[\w]/.test(nextChar)
  ) {
    return false;
  }

  if (isQuote && selectionStart === selectionEnd && nextChar === close) {
    event.preventDefault();
    els.answerInput.selectionStart = selectionStart + 1;
    els.answerInput.selectionEnd = selectionStart + 1;
    renderPracticeEditor();
    return true;
  }

  event.preventDefault();

  writeAnswer(
    `${value.slice(0, selectionStart)}${event.key}${selected}${close}${value.slice(selectionEnd)}`,
    selectionStart + 1,
    selectionStart === selectionEnd ? selectionStart + 1 : selectionEnd + 1,
  );

  return true;
}

function handleAnswerBackspace(event) {
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
    '"': '"',
    "'": "'",
    "`": "`",
  };
  const value = els.answerInput.value;
  const { selectionStart, selectionEnd } = els.answerInput;

  if (selectionStart !== selectionEnd || selectionStart === 0) return;

  const previousChar = value[selectionStart - 1];
  const nextChar = value[selectionStart];

  if (pairs[previousChar] !== nextChar) return;

  event.preventDefault();
  writeAnswer(
    `${value.slice(0, selectionStart - 1)}${value.slice(selectionStart + 1)}`,
    selectionStart - 1,
  );
}

function handleCommentToggleShortcut(event) {
  if (!(event.ctrlKey || event.metaKey) || event.shiftKey || event.key !== "/") return false;

  event.preventDefault();

  if (state.track === "js") {
    const { lines, startLine, endLine } = getAnswerLineSelection();
    const selected = lines.slice(startLine, endLine + 1);
    const allCommented = selected
      .filter((line) => line.trim())
      .every((line) => line.trimStart().startsWith("//"));
    const updated = selected.map((line) => {
      if (!line.trim()) return line;

      const indent = line.match(/^\s*/)?.[0] || "";
      const rest = line.slice(indent.length);

      if (allCommented) {
        if (rest.startsWith("// ")) return `${indent}${rest.slice(3)}`;
        if (rest.startsWith("//")) return `${indent}${rest.slice(2)}`;
        return line;
      }

      return `${indent}// ${rest}`;
    });

    lines.splice(startLine, selected.length, ...updated);
    writeLineSelection(lines, startLine, endLine);
    return true;
  }

  const { start, end, text } = getAnswerSelectionOrCurrentLine();
  const startMark = state.track === "html" ? "<!--" : "/*";
  const endMark = state.track === "html" ? "-->" : "*/";
  const leadingWhitespace = text.match(/^\s*/)?.[0] || "";
  const trailingWhitespace = text.match(/\s*$/)?.[0] || "";
  const core = text.slice(leadingWhitespace.length, text.length - trailingWhitespace.length);
  const trimmedCore = core.trim();
  let replacement = "";
  let relativeStart = 0;
  let relativeEnd = 0;

  if (trimmedCore.startsWith(startMark) && trimmedCore.endsWith(endMark)) {
    const uncommented = trimmedCore
      .slice(startMark.length, trimmedCore.length - endMark.length)
      .trim();
    replacement = `${leadingWhitespace}${uncommented}${trailingWhitespace}`;
    relativeStart = leadingWhitespace.length;
    relativeEnd = leadingWhitespace.length + uncommented.length;
  } else {
    replacement = `${leadingWhitespace}${startMark} ${core} ${endMark}${trailingWhitespace}`;
    relativeStart = leadingWhitespace.length;
    relativeEnd = replacement.length - trailingWhitespace.length;
  }

  replaceAnswerRange(start, end, replacement, relativeStart, relativeEnd);
  return true;
}

function handleSelectLineShortcut(event) {
  if (!(event.ctrlKey || event.metaKey) || event.shiftKey || event.altKey || event.key !== "l") {
    return false;
  }

  event.preventDefault();

  const context = getCurrentAnswerLineContext();
  const selectionEnd = context.lineEnd === context.value.length ? context.lineEnd : context.lineEnd + 1;

  els.answerInput.focus();
  els.answerInput.selectionStart = context.lineStart;
  els.answerInput.selectionEnd = selectionEnd;
  renderPracticeEditor();

  return true;
}

function moveAnswerLines(direction) {
  const { lines, startLine, endLine } = getAnswerLineSelection();
  const count = endLine - startLine + 1;

  if ((direction < 0 && startLine === 0) || (direction > 0 && endLine === lines.length - 1)) {
    return false;
  }

  const selected = lines.splice(startLine, count);
  const destination = direction < 0 ? startLine - 1 : startLine + 1;
  lines.splice(destination, 0, ...selected);
  writeLineSelection(lines, destination, destination + count - 1);

  return true;
}

function duplicateAnswerLines(direction) {
  const { lines, startLine, endLine } = getAnswerLineSelection();
  const selected = lines.slice(startLine, endLine + 1);
  const insertionIndex = direction < 0 ? startLine : endLine + 1;

  lines.splice(insertionIndex, 0, ...selected);
  writeLineSelection(
    lines,
    insertionIndex,
    insertionIndex + selected.length - 1,
  );

  return true;
}

function deleteAnswerLines() {
  const { lines, startLine, endLine } = getAnswerLineSelection();
  const removeCount = endLine - startLine + 1;

  lines.splice(startLine, removeCount);

  if (!lines.length) lines.push("");

  const nextLine = Math.min(startLine, lines.length - 1);
  writeLineSelection(lines, nextLine, nextLine);
}

function render() {
  const track = curriculum[state.track];
  const lesson = getLesson();

  els.trackTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.track === state.track);
  });

  els.trackLabel.textContent = track.label;
  els.lessonTitle.textContent = lesson.title;
  els.lessonSummary.textContent = lesson.summary;
  els.lessonGoal.textContent = lesson.goal;
  els.challengeText.textContent = lesson.challenge;
  els.rescueText.textContent = lesson.rescue;
  els.coachExplain.textContent = lesson.explain;
  els.exampleCode.textContent = lesson.example;
  els.feedback.textContent = "Cuando termines, comprobaremos la idea central.";
  els.feedback.className = "feedback";
  els.answerInput.value = localStorage.getItem(answerKey()) || "";
  renderPracticeEditor();
  renderChecklist();
  renderLiveGuide();

  renderSteps(lesson.steps);
  renderLessonList();
  renderProgress();
  renderTrackProgress();
  renderMapControls();
  renderMapStatus();
  renderNavButtons();
  loadLab(lesson);
  runPreview();
}

function renderSteps(steps) {
  els.microSteps.innerHTML = "";
  steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    els.microSteps.append(item);
  });
}

function renderLessonList() {
  const lessons = getVisibleLessons();
  els.lessonList.innerHTML = "";

  if (!lessons.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      "No aparece ninguna practica con ese filtro. Proba otra palabra o cambia la vista.";
    els.lessonList.append(empty);
    return;
  }

  lessons.forEach(({ lesson, index, done }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-card";
    button.dataset.index = index;
    button.classList.toggle("is-active", index === state.lesson);
    button.classList.toggle("is-done", done);
    button.innerHTML = `
      <span>${state.track.toUpperCase()} ${index + 1}</span>
      <strong>${lesson.title}</strong>
      <small>${done ? "Completada" : "Pendiente"}</small>
    `;
    els.lessonList.append(button);
  });
}

function renderProgress() {
  const total = Object.values(curriculum).reduce(
    (sum, track) => sum + track.lessons.length,
    0,
  );
  const done = Object.keys(state.completed).length;
  const percent = Math.round((done / total) * 100);

  els.progressBar.style.width = `${percent}%`;
  els.progressText.textContent = `${done} de ${total} practicas`;
}

function renderTrackProgress() {
  const track = curriculum[state.track];
  const done = getTrackCompletedCount(state.track);
  const label = done === 1 ? "completada" : "completadas";

  els.trackProgress.textContent = `${track.label} ${state.lesson + 1} de ${track.lessons.length}`;
  els.trackSummary.textContent = `${done} ${label} en este modulo.`;
}

function renderMapControls() {
  els.lessonSearch.value = uiState.lessonSearch;

  els.filterChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === uiState.lessonFilter);
  });
}

function renderMapStatus() {
  const total = curriculum[state.track].lessons.length;
  const visible = getVisibleLessons().length;
  const filterLabel = {
    all: "todas",
    pending: "pendientes",
    done: "completadas",
  }[uiState.lessonFilter];
  const trackName = curriculum[state.track].label;
  const searchText = uiState.lessonSearch.trim()
    ? ` para "${uiState.lessonSearch.trim()}"`
    : "";

  if (uiState.lessonFilter === "all" && !searchText) {
    els.mapStatus.textContent = `Mostrando las ${total} practicas de ${trackName}.`;
    return;
  }

  els.mapStatus.textContent =
    `Mostrando ${visible} de ${total} practicas ${filterLabel} de ${trackName}${searchText}.`;
}

function renderNavButtons() {
  els.prevButton.disabled = !hasPrevious();
}

function loadLab(lesson) {
  els.htmlEditor.value = localStorage.getItem(labKey("html")) || lesson.lab.html;
  els.cssEditor.value = localStorage.getItem(labKey("css")) || lesson.lab.css;
  els.jsEditor.value = localStorage.getItem(labKey("js")) || lesson.lab.js;
}

function saveLab() {
  localStorage.setItem(labKey("html"), els.htmlEditor.value);
  localStorage.setItem(labKey("css"), els.cssEditor.value);
  localStorage.setItem(labKey("js"), els.jsEditor.value);
}

function runPreview() {
  saveLab();

  previewRunId += 1;
  clearConsoleOutput(`Nueva ejecucion #${previewRunId}.`);

  els.preview.srcdoc = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${els.cssEditor.value}</style>
  </head>
  <body>
    ${els.htmlEditor.value}
    <script>
      (() => {
        const TYPE = ${JSON.stringify(PREVIEW_MESSAGE_TYPE)};
        const RUN_ID = ${previewRunId};
        const serialize = (value) => {
          if (typeof value === "undefined") return "undefined";
          if (value === null) return "null";
          if (typeof value === "string") return value;
          if (typeof value === "number" || typeof value === "boolean") return String(value);
          if (value instanceof Error) return value.message;
          try {
            return JSON.stringify(value);
          } catch {
            return Object.prototype.toString.call(value);
          }
        };
        const post = (level, values) => {
          parent.postMessage(
            {
              type: TYPE,
              runId: RUN_ID,
              level,
              message: values.map(serialize).join(" "),
            },
            "*",
          );
        };
        ["log", "info", "warn", "error"].forEach((level) => {
          const original = console[level];
          console[level] = (...values) => {
            post(level, values);
            original.apply(console, values);
          };
        });
        window.addEventListener("error", (event) => {
          post("error", [event.message]);
        });
        window.addEventListener("unhandledrejection", (event) => {
          post("error", ["Promise rejection:", event.reason]);
        });
        window.addEventListener("load", () => {
          post("ready", ["Vista previa lista"]);
        });
      })();
    <\/script>
    <script>${els.jsEditor.value}<\/script>
  </body>
</html>`;
}

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasLooseToken(raw, token) {
  const compactToken = token.trim();
  if (!compactToken) return false;
  return raw.toLowerCase().includes(compactToken.toLowerCase());
}

function hasWordToken(raw, token) {
  const escaped = escapeRegExp(token);
  return new RegExp(`(^|[^\\w-])${escaped}([^\\w-]|$)`, "i").test(raw);
}

function describeRequirementToken(token, track) {
  if (token.startsWith("</")) {
    return `Cerrar ${token}>`.replace(">>", ">");
  }

  if (token.startsWith("<")) {
    return `Usar ${token}>`.replace(">>", ">");
  }

  if (token.includes("=")) {
    return `Agregar ${token}`;
  }

  if (token.startsWith("@")) {
    return `Usar ${token}`;
  }

  if (token.startsWith(".") || token.startsWith("#")) {
    return track === "css" ? `Usar selector ${token}` : `Usar ${token}`;
  }

  if (token.endsWith("()")) {
    return `Llamar ${token}`;
  }

  return `Incluir ${token}`;
}

function describeAnyGroup(group, track) {
  const options = group
    .map((token) => {
      if (token.startsWith("<")) {
        return token.replace(/[<>/]/g, "");
      }
      return token;
    })
    .filter(Boolean);

  return `Usar una opcion: ${options.join(" o ")}`;
}

function matchesHtmlRequirement(token, raw, normalized) {
  const lowerToken = token.toLowerCase();

  if (lowerToken.startsWith("<!doctype")) {
    return /<!doctype\s+html/i.test(raw);
  }

  if (lowerToken.startsWith("</")) {
    const tag = lowerToken.match(/^<\/([\w-]+)/)?.[1];
    return tag ? new RegExp(`<\\/${escapeRegExp(tag)}\\b`, "i").test(raw) : false;
  }

  if (lowerToken.startsWith("<")) {
    const tag = lowerToken.match(/^<([\w-]+)/)?.[1];
    return tag ? new RegExp(`<${escapeRegExp(tag)}\\b`, "i").test(raw) : false;
  }

  if (lowerToken.includes("=")) {
    const [attributeName, attributeValue] = lowerToken.split(/=(.+)/);
    if (!attributeValue) {
      return new RegExp(`${escapeRegExp(attributeName)}\\s*=`, "i").test(raw);
    }

    const cleanValue = attributeValue.replace(/^["']|["']$/g, "");
    return new RegExp(
      `${escapeRegExp(attributeName)}\\s*=\\s*["']?${escapeRegExp(cleanValue)}["']?`,
      "i",
    ).test(raw);
  }

  if (["required", "controls", "autoplay", "loop", "muted", "checked", "disabled"].includes(lowerToken)) {
    return new RegExp(`\\b${escapeRegExp(lowerToken)}(?=[\\s>])`, "i").test(raw);
  }

  return normalized.includes(lowerToken);
}

function matchesCssRequirement(token, raw, normalized) {
  if (token.startsWith("@")) {
    return new RegExp(`${escapeRegExp(token)}\\b`, "i").test(raw);
  }

  if (token.startsWith(".") || token.startsWith("#")) {
    return new RegExp(escapeRegExp(token), "i").test(raw);
  }

  if (["*", ">", "+", "=>", ">=", "<=", "===", "!=="].includes(token)) {
    return raw.includes(token);
  }

  if (/^[a-z-]+$/i.test(token)) {
    return hasWordToken(raw, token);
  }

  return normalized.includes(token.toLowerCase());
}

function matchesJsRequirement(token, raw, normalized) {
  if (["*", "+", "-", "/", ">=", "<=", "=>", "===", "!=="].includes(token)) {
    return raw.includes(token);
  }

  if (token.endsWith("()")) {
    const name = token.slice(0, -2);
    return new RegExp(`\\b${escapeRegExp(name)}\\s*\\(`, "i").test(raw);
  }

  if (token.includes(" ")) {
    return new RegExp(token.split(/\s+/).map(escapeRegExp).join("\\s+"), "i").test(raw);
  }

  if (token.includes(".")) {
    return new RegExp(escapeRegExp(token), "i").test(raw);
  }

  if (/^[a-z_][\w-]*$/i.test(token)) {
    return hasWordToken(raw, token);
  }

  return normalized.includes(token.toLowerCase());
}

function matchesRequirement(track, token, raw, normalized) {
  if (track === "html") return matchesHtmlRequirement(token, raw, normalized);
  if (track === "css") return matchesCssRequirement(token, raw, normalized);
  return matchesJsRequirement(token, raw, normalized);
}

function evaluateLessonAnswer(answerValue = els.answerInput.value) {
  const lesson = getLesson();
  const raw = answerValue;
  const normalized = normalize(answerValue);
  const checks = [];

  (lesson.required || []).forEach((token) => {
    checks.push({
      label: describeRequirementToken(token, state.track),
      passed: matchesRequirement(state.track, token, raw, normalized),
    });
  });

  (lesson.requiredAny || []).forEach((group) => {
    checks.push({
      label: describeAnyGroup(group, state.track),
      passed: group.every((token) => matchesRequirement(state.track, token, raw, normalized)),
    });
  });

  const passedCount = checks.filter((item) => item.passed).length;

  return {
    checks,
    passedCount,
    total: checks.length,
    passed: checks.every((item) => item.passed),
    firstMissing: checks.find((item) => !item.passed),
  };
}

function renderChecklist() {
  const evaluation = evaluateLessonAnswer();

  els.checklist.innerHTML = "";
  els.checklistSummary.textContent = `${evaluation.passedCount} de ${evaluation.total} piezas listas`;

  evaluation.checks.forEach((check) => {
    const item = document.createElement("li");
    item.className = check.passed ? "is-good" : "";
    item.textContent = check.label;
    els.checklist.append(item);
  });
}

function checkAnswer() {
  const answer = normalize(els.answerInput.value);
  const evaluation = evaluateLessonAnswer();

  if (answer.length < 8) {
    setFeedback("Escribi un poco mas. Un intento pequeno ya cuenta.", "warn");
    return;
  }

  if (evaluation.passed) {
    state.completed[lessonId()] = true;
    saveState();
    renderLessonList();
    renderProgress();
    renderTrackProgress();
    renderMapStatus();
    setFeedback("Bien. La idea central esta. Marcamos esta practica como completada.", "good");
    return;
  }

  setFeedback(
    `Casi. Revisa esta pieza: ${evaluation.firstMissing?.label || "alguna pieza clave"}.`,
    "warn",
  );
}

function setFeedback(message, type) {
  els.feedback.textContent = message;
  els.feedback.className = `feedback is-${type}`;
}

function renderConsoleOutput() {
  if (!consoleEntries.length) {
    els.consoleSummary.textContent = "Esperando ejecucion...";
    els.consoleOutput.innerHTML =
      '<p class="console-empty">Ejecuta el laboratorio para ver logs, errores y avisos.</p>';
    return;
  }

  const summaryLabel = consoleEntries.length === 1 ? "mensaje" : "mensajes";
  els.consoleSummary.textContent = `${consoleEntries.length} ${summaryLabel} en esta ejecucion`;
  els.consoleOutput.innerHTML = consoleEntries
    .map(
      (entry) => `
        <div class="console-entry console-entry--${entry.level}">
          <span class="console-entry__level">${entry.level}</span>
          <span class="console-entry__message">${escapeHtml(entry.message)}</span>
        </div>
      `,
    )
    .join("");
  els.consoleOutput.scrollTop = els.consoleOutput.scrollHeight;
}

function clearConsoleOutput(message) {
  consoleEntries = [];

  if (message) {
    consoleEntries.push({ level: "ready", message });
  }

  renderConsoleOutput();
}

function pushConsoleEntry(level, message) {
  consoleEntries.push({
    level,
    message: String(message || ""),
  });
  renderConsoleOutput();
}

function handlePreviewMessage(event) {
  if (!event.data || event.data.type !== PREVIEW_MESSAGE_TYPE) return;
  if (event.data.runId !== previewRunId) return;

  pushConsoleEntry(event.data.level || "info", event.data.message || "");
}

function hasPrevious() {
  return state.lesson > 0 || trackOrder.indexOf(state.track) > 0;
}

function goPrevious() {
  if (!hasPrevious()) return;

  if (state.lesson > 0) {
    state.lesson -= 1;
  } else {
    const previousTrack = trackOrder[trackOrder.indexOf(state.track) - 1];
    state.track = previousTrack;
    state.lesson = curriculum[previousTrack].lessons.length - 1;
  }

  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goNext() {
  const lessons = curriculum[state.track].lessons;
  const trackIndex = trackOrder.indexOf(state.track);

  if (state.lesson < lessons.length - 1) {
    state.lesson += 1;
  } else if (trackIndex < trackOrder.length - 1) {
    state.track = trackOrder[trackIndex + 1];
    state.lesson = 0;
  } else {
    state.lesson = 0;
  }

  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  els.timer.textContent = `${minutes}:${seconds}`;
}

function setTimerButton(running) {
  els.timerToggle.innerHTML = running
    ? '<span aria-hidden="true">||</span>'
    : '<span aria-hidden="true">&gt;</span>';
  els.timerToggle.setAttribute(
    "aria-label",
    running ? "Pausar bloque de foco" : "Iniciar bloque de foco",
  );
}

function toggleTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    setTimerButton(false);
    return;
  }

  timerId = setInterval(() => {
    timerSeconds -= 1;
    if (timerSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerSeconds = 8 * 60;
      setTimerButton(false);
      setFeedback("Bloque terminado. Anota una cosa que entendiste y toma agua.", "good");
    }
    updateTimer();
  }, 1000);

  setTimerButton(true);
}

els.trackTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.track = tab.dataset.track;
    state.lesson = 0;
    saveState();
    render();
  });
});

els.lessonList.addEventListener("click", (event) => {
  const card = event.target.closest(".lesson-card");

  if (!card) return;

  state.lesson = Number(card.dataset.index);
  saveState();
  render();
});

els.answerInput.addEventListener("input", () => {
  saveAnswerDraft();
  renderPracticeEditor();
  renderChecklist();
  renderLiveGuide();
});

els.answerInput.addEventListener("scroll", syncAnswerEditorScroll);

["click", "keyup", "select"].forEach((eventName) => {
  els.answerInput.addEventListener(eventName, renderPracticeEditor);
});

els.answerInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
    return;
  }

  if (handleCommentToggleShortcut(event)) return;
  if (handleSelectLineShortcut(event)) return;

  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "k") {
    event.preventDefault();
    deleteAnswerLines();
    return;
  }

  if (event.altKey && !event.ctrlKey && !event.metaKey && event.key === "ArrowUp") {
    event.preventDefault();

    if (event.shiftKey) {
      duplicateAnswerLines(-1);
      return;
    }

    moveAnswerLines(-1);
    return;
  }

  if (event.altKey && !event.ctrlKey && !event.metaKey && event.key === "ArrowDown") {
    event.preventDefault();

    if (event.shiftKey) {
      duplicateAnswerLines(1);
      return;
    }

    moveAnswerLines(1);
    return;
  }

  if ((event.ctrlKey || event.metaKey) && !event.shiftKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveAnswerDraft();
    setFeedback("Guardado en el navegador. Puedes seguir escribiendo.", "good");
    return;
  }

  if (event.key === "Tab") {
    if (handleHtmlShortcut(event) || handleTrackSnippetShortcut(event)) return;
    handleAnswerTab(event);
    return;
  }

  if (event.key === "Enter") {
    if (handleHtmlShortcut(event) || handleTrackSnippetShortcut(event)) return;
    handleAnswerEnter(event);
    return;
  }

  if (event.key === ">" && handleHtmlTagAutocomplete(event)) {
    return;
  }

  if (handleAnswerPair(event)) return;

  if (event.key === "Backspace") {
    handleAnswerBackspace(event);
  }
});

els.hintButton.addEventListener("click", () => {
  setFeedback(getLesson().hint, "warn");
});

els.rescueButton.addEventListener("click", () => {
  els.rescueText.textContent = getLesson().rescue;
  els.answerInput.focus();
  setFeedback("Volviste al punto correcto. Hace solo el primer paso.", "good");
});

els.checkButton.addEventListener("click", checkAnswer);
els.prevButton.addEventListener("click", goPrevious);
els.nextButton.addEventListener("click", goNext);

els.clearButton.addEventListener("click", () => {
  els.answerInput.value = "";
  localStorage.removeItem(answerKey());
  renderPracticeEditor();
  renderChecklist();
  renderLiveGuide();
  setFeedback("Limpio. Empeza de nuevo con una sola linea.", "warn");
});

els.runLab.addEventListener("click", runPreview);
els.loadExample.addEventListener("click", () => {
  const lesson = getLesson();
  els.htmlEditor.value = lesson.lab.html;
  els.cssEditor.value = lesson.lab.css;
  els.jsEditor.value = lesson.lab.js;
  runPreview();
});
els.clearConsole.addEventListener("click", () => {
  clearConsoleOutput();
});

[els.htmlEditor, els.cssEditor, els.jsEditor].forEach((editor) => {
  editor.addEventListener("input", saveLab);
});

els.lessonSearch.addEventListener("input", () => {
  uiState.lessonSearch = els.lessonSearch.value;
  renderLessonList();
  renderMapStatus();
});

els.filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    uiState.lessonFilter = chip.dataset.filter;
    renderMapControls();
    renderLessonList();
    renderMapStatus();
  });
});

els.notes.value = localStorage.getItem(NOTES_KEY) || "";
els.notes.addEventListener("input", () => {
  localStorage.setItem(NOTES_KEY, els.notes.value);
});

els.timerToggle.addEventListener("click", toggleTimer);

if (typeof window.addEventListener === "function") {
  window.addEventListener("message", handlePreviewMessage);
}

updateTimer();
setTimerButton(false);
renderConsoleOutput();
render();
