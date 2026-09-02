# Portfolio — Aaron Brumat

Sitio personal de [aaronbrumat.com.ar](https://aaronbrumat.com.ar/). Software
Developer orientado a backend, APIs y datos, en Rosario, Argentina.

HTML, CSS y JavaScript sin frameworks, sin bundler y sin dependencias de
terceros: el repositorio es exactamente lo que se sirve.

## Estructura

```
index.html        Portfolio: hero, proyectos, stack, perfil, trayectoria, contacto
cv.html           CV en pantalla, con hoja de estilos de impresion aparte
css/
  base.css        Tokens de diseno, reset, tipografia y utilidades
  components.css  Navegacion, botones, chips, tarjetas, dialogos, formulario
  sections.css    Maquetado de cada seccion y puntos de quiebre
  cv.css          Estilos del CV, incluida la version de impresion
js/
  i18n-data.js    Diccionario ES / EN del portfolio
  cv-data.js      Diccionario ES / EN del CV
  i18n.js         Aplica las traducciones (sin innerHTML)
  nav.js          Cabecera adherida, menu movil y seccion activa
  reveal.js       Aparicion progresiva, respetando prefers-reduced-motion
  lightbox.js     Visor de capturas con teclado y zoom
  contact.js      Validacion del formulario y armado del correo
  cv.js           Boton de impresion
assets/           Capturas en WebP, foto, favicon e imagen social
_headers          Cabeceras de seguridad y cache (Cloudflare Pages)
robots.txt        Indexacion y sitemap
sitemap.xml       Sitemap
```

## Direccion visual

Editorial. La jerarquia se construye con tamano, opacidad y espacio: un unico
tono de tinta en cuatro pesos sobre un negro calido, filetes de 1px como unica
separacion y ni un gradiente, sombra de caja o desenfoque.

El color aparece solo como senal, en los puntos que tienen que llamar la
atencion, y cada tono significa siempre lo mismo:

| | Significa | Donde |
| --- | --- | --- |
| verde | verificable ahora | disponible para trabajar, en produccion, abrir la app |
| azul | capacidad tecnica | proyectos, stack, perfil |
| violeta | en curso | aprendiendo, en desarrollo, la carrera |

El numero de la navegacion y el de la seccion comparten color, de modo que lo
que pertenece al mismo tema se agrupa sin necesidad de explicarlo. Solo dos
puntos pulsan: "disponible para trabajar" y "en produccion".

- **Instrument Serif** para los momentos grandes: nombre, titulos de seccion y
  de proyecto.
- **Inter** para el cuerpo.
- **JetBrains Mono** para etiquetas, numeracion y metadatos.

Cambiar `--font-display` en `css/base.css` reemplaza la serif en todo el sitio.

## Decisiones

- **Sin dependencias.** Nada que instalar, nada que compilar, nada que auditar.
  El sitio funciona abriendo `index.html`.
- **Sin tarjetas.** El contenido se apoya directo sobre el fondo. Las listas de
  especificacion (etiqueta a la izquierda, valor a la derecha) reemplazan a las
  grillas de chips y de tarjetas.
- **El contenido se lee sin JavaScript.** El HTML sale en espanol y el JS solo
  traduce, revela y agrega interaccion. Sin JS no se pierde ninguna seccion.
- **Sin `innerHTML`.** Las traducciones con enfasis usan el formato `**texto**`
  y se construyen con nodos del DOM, asi que no hay ningun punto de inyeccion.
- **Imagenes reales.** Las capturas de Data Center salen de la aplicacion
  desplegada y las de StockARG de la aplicacion de escritorio. Todas en WebP.
- **Redaccion en dos niveles.** Cada bloque tecnico cierra con una frase que lo
  traduce, para que se entienda sin conocer el vocabulario.
- **Cabeceras propias.** `_headers` define CSP, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy` y cache de assets.

## Desarrollo

Cualquier servidor estatico alcanza:

```bash
python -m http.server 8000
```

## Despliegue

`main` se publica en dos lugares:

- **Cloudflare Pages** en `aaronbrumat.com.ar` (aplica `_headers`)
- **GitHub Pages** en `maikibru.github.io` (ignora `_headers`)

## Proyectos enlazados

| Proyecto | Codigo | En vivo |
| --- | --- | --- |
| Data Center | [Page-Data-Center](https://github.com/MaikiBRU/Page-Data-Center) | [datacenter.aaronbrumat.com.ar/demo](https://datacenter.aaronbrumat.com.ar/demo) |
| StockARG | [Stock_ARG](https://github.com/MaikiBRU/Stock_ARG) | aplicacion de escritorio |

## Cache de assets

`index.html` y `cv.html` se revalidan en cada visita, pero `css/` y `js/`
quedan cacheados una semana en el borde de Cloudflare. Por eso las
referencias llevan `?v=<fecha>`: al cambiar un script hay que subir esa
versión en las dos páginas, o el navegador seguirá usando el archivo
viejo hasta que expire el caché.
