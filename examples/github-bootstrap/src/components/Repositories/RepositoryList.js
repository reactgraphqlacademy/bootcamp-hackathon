import React from "react";
import { Query } from "react-apollo";
import Repo from "./Repo";
import repositoriesQuery from "./repositories";

function RepositoryList() {
  return (
    <Query query={repositoriesQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const { edges } = data.organization.repositories;
        return edges.map(({ node }) => <Repo repo={node} />);
      }}
    </Query>
  );
}

export default RepositoryList;
