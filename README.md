# Refem Valor — Web

Web estática (HTML/CSS/JS, sin build ni backend) de Refem Valor, empresa de
revalorización de pisos en Olot i la Garrotxa.

- Català a la arrel (`/`).
- Castellano bajo `/es/`.
- Selector de idioma en la cabecera de cada página.

## Estructura

```
index.html                 Inici (CA)
com-funciona.html
per-propietaris.html
per-immobiliaries.html
qui-som.html
contacte.html

es/index.html               Inicio (ES)
es/como-funciona.html
es/para-propietarios.html
es/para-inmobiliarias.html
es/sobre-refem.html
es/contacto.html

css/style.css                Estilos compartidos
js/main.js                   Menú móvil + envío del formulario de contacto
assets/favicon.svg
robots.txt
sitemap.xml
```

## Publicar en tu hosting

Son ficheros estáticos: sube la carpeta completa a la raíz del hosting
(vía FTP, panel de archivos, o el método que use tu proveedor). No requiere
Node, PHP ni base de datos.

Apunta el dominio **refemvalor.com** a ese hosting (registro A/CNAME según indique
tu proveedor) y confirma que sirve `index.html` como página de inicio.

## Configurar el formulario de contacto

El formulario (`contacte.html` y `es/contacto.html`) envía los datos por
`POST` a un servicio externo sin necesidad de backend propio. Por defecto
usa [Formspree](https://formspree.io) como ejemplo.

Pasos:

1. Crea una cuenta gratuita en https://formspree.io con `info@refemvalor.com`.
2. Crea un formulario nuevo y copia el endpoint que te da (tipo
   `https://formspree.io/f/abcdwxyz`).
3. Sustituye `https://formspree.io/f/XXXXXXX` por ese endpoint en **dos**
   ficheros:
   - `contacte.html` (atributo `action` del `<form id="contact-form">`)
   - `es/contacto.html` (mismo atributo)
4. Los envíos llegarán como email a la cuenta de Formspree conectada.

Alternativa sin Formspree: si prefieres recibir los envíos en una hoja de
Google Sheets, sustituye ese mismo `action` por la URL de un
[Google Apps Script](https://developers.google.com/apps-script) publicado
como Web App que reciba el `POST` y escriba la fila en tu Sheet. El
formulario ya envía los campos como `FormData` estándar (`nombre`,
`telefono`, `email`, `perfil`, `direccion`, `mensaje`), compatibles con
cualquiera de las dos opciones sin tocar el HTML.

Mientras el `action` mantenga el valor de ejemplo `XXXXXXX`, el formulario
avisa al usuario de que el envío no está configurado en lugar de fallar en
silencio.

## SEO básico incluido

- `<title>` y meta descripción propios por página e idioma.
- `rel=canonical` y `hreflang` cruzado entre versión CA/ES de cada página.
- `robots.txt` y `sitemap.xml` con las 12 URLs (6 páginas × 2 idiomas).
- Favicon en SVG.

## Calculadora de rentabilidad

No incluida en esta primera versión (decisión tomada al iniciar el
proyecto). Se puede añadir más adelante como sección interactiva en
"Cómo funciona" o "Para propietarios".
