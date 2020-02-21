import * as React from "react";
import ReactMarkdown from "react-markdown";

import { useGraphQL } from "graphql-react";

const GraphQLData = ({ queryString, repoString }) => {
  // El hook useGraphQL se puede usar de la misma manera para consultas o mutaciones.
  const { loading, cacheValue = {} } = useGraphQL({
    // Cualquier API GraphQL puede consultarse en componentes, donde las opciones de fetch para el URL,
    // autenticación, etc. son especificados. Las opciones de recuperación predeterminadas recibidas
    // por la función de anulación se adaptan a la operación; típicamente
    // el cuerpo es JSON.

    fetchOptionsOverride(options) {
      options.url = "https://api.github.com/graphql";
      options.headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    },
    // La operación típicamente contiene `query` y algunas veces` variables`, pero
    // se pueden usar propiedades adicionales; todos están codificados en JSON y se envían al
    // servidor GraphQL en el cuerpo de solicitud de búsqueda.
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

    // Cargue la consulta cada vez que se monte el componente. Esto es deseable para mostrar contenido,
    // pero no para situaciones bajo demanda como paginación ver
    // más botones o formularios que envían mutaciones.
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
