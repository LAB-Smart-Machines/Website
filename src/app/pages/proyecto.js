import * as React from "react";

import App from "../components/App";
import GraphQLProveedor from "../components/GraphQLProveedor";

import { useRouter } from "next/router";
import { GraphQL, GraphQLProvider } from "graphql-react";

const Page = () => {
  const router = useRouter();

  return (
    <App>
      <div id="projects" className="section grey">
        <div className="w-container">
          <h1 className="heading-3">{router.query.titulo}</h1>
          <div className="divider grey"></div>
          <GQL repoString={router.query.titulo} />
        </div>
      </div>
    </App>
  );
};

export default Page;

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
