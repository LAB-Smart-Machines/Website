import * as React from "react";
import ReactMarkdown from "react-markdown";

import { useGraphQL } from "graphql-react";

const GraphQLData = ({ queryString, repoString }) => {
  // The useGraphQL hook can be used just the same for queries or mutations.
  // El hook useGraphQL se puede usar de la misma manera para queries o mutaciones.
  const { loading, cacheValue = {} } = useGraphQL({
    // Any GraphQL API can be queried in components, where fetch options for
    // the URL, auth headers, etc. are specified. To avoid repetition it’s a
    // good idea to import the fetch options override functions for the APIs
    // your app uses from a central module. The default fetch options received
    // by the override function are tailored to the operation; typically the
    // body is JSON but if there are files in the variables it will be a
    // FormData instance for a GraphQL multipart request.

    // Cualquier API GraphQL puede consultarse en componentes, donde buscar opciones para
    // se especifican la URL, los encabezados de autenticación, etc. Para evitar la repetición es un
    // buena idea importar las funciones de anulación de funciones de recuperación para las API
    // tu aplicación usa desde un módulo central. Las opciones de recuperación predeterminadas recibidas
    // por la función de anulación se adaptan a la operación; típicamente el
    // el cuerpo es JSON pero si hay archivos en las variables será un
    // Instancia FormData para una solicitud de múltiples partes GraphQL.

    fetchOptionsOverride(options) {
      // console.log(functions.config().test.one);

      options.url = "https://api.github.com/graphql";
      options.headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    },

    // The operation typically contains `query` and sometimes `variables`, but
    // additional properties can be used; all are JSON encoded and sent to the
    // GraphQL server in the fetch request body.

    // La operación típicamente contiene `query` y algunas veces` variables`, pero
    // se pueden usar propiedades adicionales; todos están codificados en JSON y se envían a
    // Servidor GraphQL en el cuerpo de solicitud de búsqueda.
    operation: {
      query:
        `{
          repository(owner: \"` +
        queryString +
        `\", name:  \"` +
        repoString +
        `\") {
            id
            url

            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      `
    },

    // Load the query whenever the component mounts. This is desirable for
    // queries to display content, but not for on demand situations like
    // pagination view more buttons or forms that submit mutations.

    // Cargue la consulta cada vez que se monte el componente. Esto es deseable para
    // consultas para mostrar contenido, pero no para situaciones bajo demanda como
    // paginación ver más botones o formularios que envían mutaciones.
    loadOnMount: true,

    // Reload the query whenever a global cache reload is signaled.

    // Vuelva a cargar la consulta cada vez que se indique una recarga de caché global.
    loadOnReload: true,

    // Reload the query whenever the global cache is reset. Resets immediately
    // delete the cache and are mostly only used when logging out the user.

    // Vuelva a cargar la consulta cada vez que se restablezca la memoria caché global. Restablece de inmediato
    // elimina el caché y se usa principalmente cuando se cierra la sesión del usuario.
    loadOnReset: true
  });
  return cacheValue.data ? (
    <ReadMe data={cacheValue.data.repository} />
  ) : loading ? (
    // Data is often reloaded, so don’t assume loading indicates no data.

    // Los datos a menudo se vuelven a cargar, por lo que no asuma que la carga indica que no hay datos.
    "Cargando…"
  ) : (
    // Detailed error info is available in the `cacheValue` properties
    // `fetchError`, `httpError`, `parseError` and `graphQLErrors`. A combination
    // of errors is possible, and an error doesn’t necessarily mean data is
    // unavailable.

    // La información detallada del error está disponible en las propiedades `cacheValue`
    // `fetchError`,` httpError`, `parseError` y` graphQLErrors`. Una combinación
    // de errores es posible, y un error no significa necesariamente que los datos sean
    // no disponible.
    "Error"
  );
};

export default GraphQLData;

const ReadMe = ({ data }) =>
  data ? (
    <section>
      <ReactMarkdown
        source={data.object.text}
        className="readme"
        linkTarget="_blank"
      />
    </section>
  ) : (
    "Error"
  );
