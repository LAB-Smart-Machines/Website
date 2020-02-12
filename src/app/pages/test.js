import * as React from "react";
import App from "../components/App";

import { GraphQL, GraphQLProvider } from "graphql-react";
import GraphQLProveedor from "../components/GraphQLProveedor";

// Zero config GraphQL client that manages the cache.
const graphql = new GraphQL();
const GQL = ({ queryString, repoString }) => {
  return (
    <GraphQLProvider graphql={graphql}>
      <GraphQLProveedor
        queryString="LAB-Smart-Machines"
        repoString={repoString}
      />
    </GraphQLProvider>
  );
};

export default GQL;
