import * as React from "react";
import App from "../components/App";
import ReactMarkdown from "react-markdown";

import { GraphQL, GraphQLProvider, useGraphQL } from "graphql-react";

// Zero config GraphQL client that manages the cache.
const graphql = new GraphQL();

const GraphQLData = ({ queryString, repoString }) => {
  // The useGraphQL hook can be used just the same for queries or mutations.
  const { loading, cacheValue = {} } = useGraphQL({
    // Any GraphQL API can be queried in components, where fetch options for
    // the URL, auth headers, etc. are specified. To avoid repetition it’s a
    // good idea to import the fetch options override functions for the APIs
    // your app uses from a central module. The default fetch options received
    // by the override function are tailored to the operation; typically the
    // body is JSON but if there are files in the variables it will be a
    // FormData instance for a GraphQL multipart request.
    fetchOptionsOverride(options) {
      options.url = "https://api.github.com/graphql";

      options.headers["Authorization"] = `Bearer `;
    },

    // The operation typically contains `query` and sometimes `variables`, but
    // additional properties can be used; all are JSON encoded and sent to the
    // GraphQL server in the fetch request body.
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
    loadOnMount: true,

    // Reload the query whenever a global cache reload is signaled.
    loadOnReload: true,

    // Reload the query whenever the global cache is reset. Resets immediately
    // delete the cache and are mostly only used when logging out the user.
    loadOnReset: true
  });
  return cacheValue.data ? (
    <ReadMe data={cacheValue.data.repository} />
  ) : loading ? (
    // Data is often reloaded, so don’t assume loading indicates no data.
    "Loading…"
  ) : (
    // Detailed error info is available in the `cacheValue` properties
    // `fetchError`, `httpError`, `parseError` and `graphQLErrors`. A combination
    // of errors is possible, and an error doesn’t necessarily mean data is
    // unavailable.
    "Error!"
  );
};

export default () => (
  <App>
    <GraphQLProvider graphql={graphql}>
      <GraphQLData queryString="vahurtad" repoString="TraderFeed" />
    </GraphQLProvider>
  </App>
);

const ReadMe = ({ data }) => (
  <section>
    <ReactMarkdown
      source={data.object.text}
      className="w-container readme"
      linkTarget="_blank"
    />
  </section>
);
