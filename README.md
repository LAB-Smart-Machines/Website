Este website se realizó utilizando el ejemplo de [NextJS con Firebase Hosting](https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting) y esta traducido al castellano en este README.

## Herramientas Utilizadas

📄 [Diseño hecho en webflow ](https://smart-machines.webflow.io/)

💻 [Website en progreso](https://smartctci.firebaseapp.com/)

🏁 [Iconos FontAwesome](https://fontawesome.com/)

🙂 [Ilustraciones unDraw](https://undraw.co/)

React, NextJS, GraphQL y Firebase

# Hosting con Firebase (Traducción de [NextJS](https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting))

## Como usar

**Usando `create-next-app`**

Ejecutar [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) con [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) o con npm :

```bash
npm create-next-app --example with-firebase-hosting with-firebase-hosting-app
# o
yarn create next-app --example with-firebase-hosting with-firebase-hosting-app
```

O bajalo manualmente:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-firebase-hosting
cd with-firebase-hosting
```

<details>
<summary><b>Preparar firebase</b></summary>

- instalar Firebase Tools: `npm i -g firebase-tools`
- crear un proyecto a traves del [firebase web console](https://console.firebase.google.com/)
- copiar ID del proyecto de consola en este URL: `https://console.firebase.google.com/project/<projectId>`
- actualizar el `.firebaserc` ID defecto `"web-id-aquí"` al el nuevo proyecto
- iniciar sesion al Firebase CLI tool con `firebase login`

</details>

<details>
<summary><b>Instalar Proyecto</b></summary>

Más información sobre las diferentes etapas del desarrollo de una aplicación. [NextJS](https://nextjs.org/docs)

```bash
npm install
```

#### Ejecutar Next.js development localmente:

```bash
npm run dev
```

#### Ejecutar Firebase localmente para testing:

```
npm run serve
```

#### Despliegue en la nube (cloud) con Firebase:

```bash
npm run deploy
```

#### Limpiar el folder dist

```bash
npm run clean
```

</details>

## Variables

https://firebase.google.com/docs/functions/config-env

## La idea detrás del ejemplo.

El objetivo es alojar la aplicación Next.js en Firebase Cloud Functions con las reglas de reescritura de Firebase Hosting para que nuestra aplicación sea servida desde nuestra URL de Firebase Hosting. Cada `page` individual es llamada a la Cloud Function que realiza el procesamiento inicial del servidor.

Esto trabajo esta basado en https://github.com/geovanisouza92/serverless-firebase y https://github.com/jthegedus/firebase-functions-next-example describido [aquí](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2).

Si tiene problemas, no dude en etiquetar a @jthegedus con el [tema que se crea en el next.js repo](https://github.com/zeit/next.js/issues/new)

## Importante

- El archivo vacío `placeholder.html` es para que Firebase Hosting no se equivoque de la carpeta vacía`public/` y aún aloje el URL del proyecto Firebase.
- `firebase.json` describe la regla de reescritura general para nuestra Cloud Function.
- Se requiere especificar [`"engines": {"node":"8"}`](package.json#L5-L7) en el `package.json` para que las funciones de firebase se pueda implementarse con Node 8 en lugar del Node 6 ([Anuncio en el blog de Firebase](https://firebase.googleblog.com/2018/08/cloud-functions-for-firebase-config-node-8-timeout-memory-region.html)). Esto esta emparejado en [`src/functions/.babelrc`](src/functions/.babelrc) para que babel genere un código algo más compacto y moderno.

### Personalización

El desarrollo de Next App y Next Server se divide en dos carpetas diferentes:

- app - `src/app/`
- server - `src/functions/`

Si desea modificar cualquier configuración del Next App, solo debe modificar el contenido de `src/app`.

Por ejemplo, el `.babelrc` en`src/functions` se usa solo para compilar el código de Firebase Cloud Functions, que es nuestro código de Next Server. Si desea personalizar el `.babelrc` para la compilación Next App, debe crear uno en`src/app/.babelrc` y seguir la [guía de personalización](https://github.com/zeit/next.js#personalización-babel-config).

### \_app.js

Si usas `_app.js`, puede recibir el siguiente error en su 'Cloud Function' implementada:

```
{ Error: Cannot find module '@babel/runtime/regenerator'...
```

A pesar de que next.js tiene `@ babel/runtime` como dependencia, debe instalarlo como dependencia directamente en este proyecto.

# Otros articulos para leer

- https://nextjs.org/learn/basics/create-dynamic-pages/passing-data

- https://github.com/jaydenseric/graphql-react

- https://github.com/rexxars/react-markdown

- https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
