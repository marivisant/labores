# Las labores de Mariví — cómo ponerla en marcha

Son 6 archivos que juntos forman la app. No hay servidor, ni cuentas, ni suscripción:
todo se guarda dentro del iPhone de Mariví.

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera (pantallas, diseño y funcionamiento) |
| `manifest.webmanifest` | Hace que se instale como app, con su nombre y su icono |
| `sw.js` | Permite que funcione sin conexión a internet |
| `icono-180/192/512.png`, `icono-maskable-512.png` | El icono del corazón de patchwork |

## Paso 1 — Probarla en el ordenador (2 minutos)

Descomprime todo en una carpeta y abre `index.html` con Chrome o Safari.
Funciona todo menos "compartir por WhatsApp" y el modo sin conexión, que necesitan
que esté publicada en internet.

## Paso 2 — Publicarla gratis en GitHub Pages

GitHub Pages es gratuito para siempre y no pide tarjeta.

1. Crea una cuenta en **github.com** (gratis).
2. Pulsa **New repository**. Nombre: `labores`. Marca **Public**. **Create repository**.
3. En el repositorio nuevo: **Add file › Upload files**. Arrastra los 6 archivos
   (los archivos sueltos, no la carpeta). Abajo, **Commit changes**.
4. Ve a **Settings › Pages**. En *Branch* elige `main` y `/ (root)`. **Save**.
5. Espera un minuto y recarga: aparecerá la dirección, del estilo
   `https://tuusuario.github.io/labores/`.

Alternativa aún más rápida: **app.netlify.com/drop** — arrastras la carpeta y te da
una dirección al instante (necesitarás registrarte gratis para que no caduque).

## Paso 3 — Instalarla en el iPhone de Mariví

1. Abre esa dirección **en Safari** (importante: en Safari, no en Chrome).
2. Toca el botón de compartir (el cuadrado con la flecha hacia arriba).
3. **Añadir a pantalla de inicio** › **Añadir**.
4. Ya está el corazón de patchwork en su pantalla. Se abre como una app normal,
   sin barras de navegador, y funciona sin internet.

## Paso 4 — Explicarle dos cosas a Mariví

- **Para guardar un trabajo**: botón verde *Añadir una labor* › foto › nombre › *Guardar labor*.
- **Para enviarlo por WhatsApp**: abrir la labor y tocar el botón verde *Compartir*.

## Importante: las copias de seguridad

Las fotos y los datos viven **solo en ese iPhone**. Si se borra la app o se pierde el
teléfono, se pierden. Por eso la app trae **Más › Copia de seguridad › Guardar copia**:
crea un archivo `labores-marivi-FECHA.json` con todo dentro (fotos incluidas).

Guárdalo en Archivos/iCloud o mándatelo por correo cada pocos meses. Para restaurarlo
en un teléfono nuevo: instalar la app y usar *Restaurar una copia*.

La app avisa sola en la pantalla de inicio cuando pasan más de 45 días sin copia.

## Si algún día quieres cambiar algo

Todo el diseño y el funcionamiento están dentro de `index.html`. Los colores están
arriba del todo, en el bloque `:root`. Para actualizar la app basta con volver a subir
ese archivo a GitHub; en el iPhone se actualiza sola al abrirla con internet.
