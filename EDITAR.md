Tenemos 2 archivos de contenido:

- [PROYECTOS](/PROYECTOS.json)
- [CONTENIDO](/CONTENIDO.json)

## Contenido

Aqui contiene datos como el titulo, subtitulo, o contenido de otras secciones.

```javascript
{
  "titulo_principal": "Laboratorio Smart Machines",
  "subtexto_principal":  ___opcional__,
  "titulo_primera_seccion": "Mision",
  "subtexto_primera_seccion": ___opcional__,
  "titulo_segunda_seccion": "Historia",
  "subtexto_segunda_seccion":  ___opcional__,
```

## Proyecto

Aqui contiene datos de cada proyecto.

Si `img` no es requrido pero usamos una imagen local `undraw_scrum_board_cesn.png`.

```javascript
"proyecto": [
  {
    "titulo":  ___requerido__,
    "subtitulo":  ___requerido__,
    "img":  ___opcional__,
    "github": ___requerido__
  },
```
