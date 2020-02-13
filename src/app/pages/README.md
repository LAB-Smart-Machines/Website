Un ejemplo de como se puede ver el README de un proyecto esta [aquí](https://github.com/LAB-Smart-Machines/TestUno/blob/master/README.md) y en el website [aquí](http://localhost:3000/proyecto?titulo=testuno).

## Como funciona

Se hace una coneccion al GraphQL API de Github que nos ayudar a ver el repo necesario y despues se usa un package llamado [react-markdown](https://github.com/rexxars/react-markdown) que reproduce archivos `.md` como el `README.md` que usamos. el codigo de GraphQL lo puedes ver en [aquí](../components/GraphQLProveedor.js).

Cada pagina de cada proyecto se hace dinamicamente y se puede ver [aquí](./proyecto.js) o el ejemplo [aquí](https://nextjs.org/learn/basics/create-dynamic-pages/passing-data).

### Componente

Este componente lo puede ver [aquí](../components/Columna.js).

```
 <Columna
    titulo={"Test Uno"}
    subtitulo={"subtitulo"}
    img={cohetes}
    github={"testuno"}
  />
```

En el componente `Columna`:

- `titulo` es el titulo que aparece en la pagina del proyecto y en la pagina inicial.
- `subtitulo` es el subtitulo que aparece en la pagina inicial.
- `img` es la imagen que aparece en la pagina inicial.
- `github` es el nombre del repo que aparece en la pagina del proyecto. No olvidar de poner el nombre correcto.
