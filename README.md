Usando ejemplo de [NextJS con Firebase Hosting](https://github.com/zeit/next.js/tree/master/examples/with-firebase-hosting)

[Website en progreso](https://smartctci.firebaseapp.com/)

- [Diseño](https://smart-machines.webflow.io/)
- Iconos FontAwesome
- figuras Undraw

# Hosting con Firebase

## Como usar

**Usando `create-next-app`**

Ejecutar [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) con [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) o con npm :

```bash
npm create-next-app --example with-firebase-hosting with-firebase-hosting-app
# o
yarn create next-app --example with-firebase-hosting with-firebase-hosting-app
```

<details>
<summary><b>Bajalo manualmente</b></summary>

Baja el ejemplo:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-firebase-hosting
cd with-firebase-hosting
```

</details>

<details>
<summary><b>Preparar firebase</b></summary>

- instalar Firebase Tools: `npm i -g firebase-tools`
- crear un proyecto a traves del [firebase web console](https://console.firebase.google.com/)
- copiar ID del proyecto de consola en este URL: `https://console.firebase.google.com/project/<projectId>`
- actualizar el `.firebaserc` ID defecto `"web-id-aqui"` al el nuevo proyecto
- iniciar sesion al Firebase CLI tool con `firebase login`

</details>

<details>
<summary><b>Instalar Proyecto</b></summary>

```bash
npm install
```

#### Ejecutar Next.js development:

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

## The idea behind the example

The goal is to host the Next.js app on Firebase Cloud Functions with Firebase Hosting rewrite rules so our app is served from our Firebase Hosting URL. Each individual `page` bundle is served in a new call to the Cloud Function which performs the initial server render.

This is based off of the work at https://github.com/geovanisouza92/serverless-firebase & https://github.com/jthegedus/firebase-functions-next-example as described [here](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2).

If you're having issues, feel free to tag @jthegedus in the [issue you create on the next.js repo](https://github.com/zeit/next.js/issues/new)

## Important

- The empty `placeholder.html` file is so Firebase Hosting does not error on an empty `public/` folder and still hosts at the Firebase project URL.
- `firebase.json` outlines the catchall rewrite rule for our Cloud Function.
- Specifying [`"engines": {"node": "8"}`](package.json#L5-L7) in the `package.json` is required for firebase functions
  to be deployed on Node 8 rather than Node 6
  ([Firebase Blog Announcement](https://firebase.googleblog.com/2018/08/cloud-functions-for-firebase-config-node-8-timeout-memory-region.html))
  . This is matched in [`src/functions/.babelrc`](src/functions/.babelrc) so that babel output somewhat compacter and moderner code.

### Customization

Next App and Next Server development are separated into two different folders:

- app - `src/app/`
- server - `src/functions/`

If you wish to modify any configuration of the Next App, you should only modify the contents of `src/app`.

For instance, the `.babelrc` in `src/functions` is used only to compile the Firebase Cloud Functions code, which is our the Next Server code. If you wish to customize the `.babelrc` for the Next App compilation, then you should create one at `src/app/.babelrc` and follow the [customization guide](https://github.com/zeit/next.js#customizing-babel-config).

### \_app.js

If using `_app.js` you may receive the following error on your deployed Cloud Function:

```
{ Error: Cannot find module '@babel/runtime/regenerator'...
```

Despite next.js having `@babel/runtime` as a dependency, you must install it as a dependency directly in this project.

### Issues

- [object Module] in css files with svg files
  https://github.com/cyrilwanner/next-optimized-images/issues/124

- Firebase is retuning 404 for files in the /static folder
  https://github.com/zeit/next.js/issues/5944

https://codeburst.io/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2

https://github.com/jaydenseric/graphql-react
