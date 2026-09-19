# Portfolio — Aaron Brumat

Sitio personal de [aaronbrumat.com.ar](https://aaronbrumat.com.ar/).
Desarrollador de software con perfil en Linux, infraestructura IT y soporte, en
Rosario, Argentina.

HTML, CSS y JavaScript sin frameworks, sin bundler y sin dependencias de
terceros: el repositorio es exactamente lo que se sirve, tipografias incluidas.

## Estructura

```
index.html        Portfolio: hero, proyectos, infraestructura, stack, perfil, trayectoria, contacto
cv.html           CV en pantalla: mismo contenido que el PDF, con hoja de impresion aparte
404.html          Pagina de ruta inexistente (Cloudflare la sirve con estado 404)
css/
  fonts.css       Tipografias propias y respaldos con metricas ajustadas
  base.css        Tokens de diseno, reset, tipografia y utilidades
  components.css  Navegacion, listas de especificacion, figuras, dialogos, formulario
  sections.css    Maquetado de cada seccion y puntos de quiebre
  cv.css          Estilos del CV, incluida la version de impresion
js/
  lang-boot.js    Decide el idioma antes del primer pintado (sincronico, en <head>)
  i18n-data.js    Ingles del portfolio (el espanol esta en el HTML)
  cv-data.js      Ingles del CV
  i18n.js         Copia el espanol del DOM y aplica las traducciones (sin innerHTML)
  nav.js          Cabecera adherida, menu movil y seccion activa
  reveal.js       Aparicion progresiva, respetando prefers-reduced-motion
  lightbox.js     Visor de capturas con teclado y zoom
  contact.js      Saneo y validacion del formulario, y armado del correo
  cv.js           Boton de impresion
assets/           Capturas en WebP, foto, favicon, imagen social y fonts/ (OFL)
_headers          Cabeceras de seguridad y cache (Cloudflare Pages)
.well-known/
  security.txt    Canal de reporte de vulnerabilidades (RFC 9116)
.github/workflows/
  security.yml    Secretos, dependencias, HTTPS, cabeceras, 404 y traducciones
.gitignore        Lo que nunca puede entrar al repositorio
robots.txt        Indexacion y sitemap
sitemap.xml       Sitemap
```

## Direccion visual

Editorial. La jerarquia se construye con tamano, opacidad y espacio: un unico
tono de tinta en cuatro pesos sobre un negro calido, filetes de 1px como unica
separacion y ni un gradiente, sombra de caja o desenfoque.

El color aparece solo como senal, siempre en texto, y cada tono significa lo
mismo en todo el sitio:

| | Significa | Donde |
| --- | --- | --- |
| verde | verificable ahora | disponible para trabajar, en produccion, abrir la app |
| azul | capacidad tecnica | infraestructura, stack, perfil |
| violeta | en curso | la carrera, Network Technician, lo que estoy cursando |

Los numeros de seccion existen solo en la navegacion, con el color del tema de
cada seccion. Los titulos, proyectos y listas no llevan numeros ni puntos de
color.

- **Instrument Serif** para los momentos grandes: nombre, titulos de seccion y
  de proyecto.
- **Inter** para el cuerpo.
- **JetBrains Mono** para etiquetas y metadatos.

Cambiar `--font-display` en `css/base.css` reemplaza la serif en todo el sitio.

## Decisiones

- **Sin dependencias.** Nada que instalar, nada que compilar, nada que auditar.
  El sitio funciona abriendo `index.html`. Cero paquetes es cero
  vulnerabilidades heredadas, y el CI falla si aparece un manifiesto.
- **Tipografias propias.** Se sirven desde `assets/fonts/` (solo el subconjunto
  latin). Cada una tiene un respaldo local con `size-adjust` y
  `ascent/descent-override` calculados sobre la fuente real: mientras carga, el
  texto ya ocupa el mismo lugar y el cambio no mueve el layout (CLS 0).
- **El espanol esta en un solo lugar.** El HTML sale en espanol y es la fuente
  de ese idioma: `i18n.js` lo copia del DOM al cargar. Los diccionarios solo
  traen el ingles y las cadenas que arma el JS. El CI falla si una clave del
  HTML no tiene su ingles.
- **Sin salto al cambiar de idioma.** `lang-boot.js` corre antes del primer
  pintado; si el visitante va a ver la pagina en ingles, el contenido espera a
  estar traducido. Si la traduccion no llega, se muestra igual a los 1,5 s.
- **Sin tarjetas.** El contenido se apoya directo sobre el fondo. Las listas de
  especificacion (etiqueta a la izquierda, valor a la derecha) reemplazan a las
  grillas de chips y de tarjetas.
- **El contenido se lee sin JavaScript.** Sin JS no se pierde ninguna seccion.
- **Sin `innerHTML`.** Las traducciones con enfasis usan el formato `**texto**`
  y se construyen con nodos del DOM, asi que no hay ningun punto de inyeccion.
- **Redaccion en dos niveles.** Arriba, en la presentacion de cada proyecto,
  se cuenta que hace y para quien, sin jerga. El detalle tecnico va abajo, en
  la ficha y en las decisiones tecnicas.

## Seguridad

Las medidas se enuncian como caracteristicas del sitio, en el bloque "Este
portfolio" de Proyectos, al lado del enlace al codigo:

| Que | Donde |
| --- | --- |
| Sin claves ni secretos | el sitio no consume ninguna API con credenciales |
| Secretos fuera de Git | `.gitignore` + Gitleaks sobre la historia completa |
| CSP, HSTS, nosniff, DENY, Permissions-Policy | `_headers` |
| Sin terceros | `style-src` y `font-src` en `'self'`: ni estilos ni fuentes de otro dominio |
| HTTPS forzado | HSTS un ano con subdominios y `upgrade-insecure-requests` |
| Entradas saneadas | `js/contact.js` quita control y CRLF antes del `mailto:` |
| Anti-bots | campo trampa invisible y tiempo minimo de completado |
| Dependencias | ninguna, y el CI falla si aparece un manifiesto sin auditoria |
| Reporte | `/.well-known/security.txt` |

El saneado del formulario no es cosmetico: el asunto y el cuerpo terminan dentro
de una URL `mailto:`, y ahi un salto de linea deja de ser texto para pasar a
separar encabezados. `cleanLine` y `cleanText` sacan los caracteres de control,
los separadores de linea Unicode y los espacios de ancho cero antes de armar
nada, y aplican el tope de longitud aunque se haya quitado el `maxlength`.

## Desarrollo

Cualquier servidor estatico alcanza:

```bash
python -m http.server 8000
```

## Despliegue

`main` se publica en **Cloudflare Pages**, en `aaronbrumat.com.ar`, que aplica
`_headers` y sirve `404.html` para las rutas que no existen. `www` redirige al
dominio principal.

La direccion vieja, `maikibru.github.io`, sale de la rama `gh-pages`: solo
contiene una redireccion al dominio, para que los enlaces viejos no muestren
una copia desactualizada del sitio.

## Proyectos enlazados

| Proyecto | Codigo | En vivo |
| --- | --- | --- |
| Data Center | [Page-Data-Center](https://github.com/MaikiBRU/Page-Data-Center) | [datacenter.aaronbrumat.com.ar/demo](https://datacenter.aaronbrumat.com.ar/demo) |
| BarberApp | [BarberApp](https://github.com/MaikiBRU/BarberApp) | [barberapp.aaronbrumat.com.ar/demo](https://barberapp.aaronbrumat.com.ar/demo) |
| StockARG | [Stock_ARG](https://github.com/MaikiBRU/Stock_ARG) | [stockarg.aaronbrumat.com.ar](https://stockarg.aaronbrumat.com.ar) |

## Cache de assets

Las paginas HTML se revalidan en cada visita, pero `css/` y `js/` quedan
cacheados una semana en el borde de Cloudflare. Por eso las referencias llevan
`?v=<version>`: al cambiar un script o una hoja hay que subir esa version en
todas las paginas, o el navegador seguira usando el archivo viejo hasta que
expire el cache.

Lo que esta en `assets/` se cachea un ano como inmutable y no lleva version:
una imagen que cambia tiene que cambiar de nombre (por ejemplo
`og-image-2026-09.png`). Si se reemplaza conservando el nombre, Cloudflare y
los navegadores siguen mostrando la vieja; el CI lo rechaza en cada PR.

La version es la fecha del cambio en formato `AAAAMMDD`, con una letra al final
cuando hay mas de un cambio el mismo dia. La actual es `20260919`.
