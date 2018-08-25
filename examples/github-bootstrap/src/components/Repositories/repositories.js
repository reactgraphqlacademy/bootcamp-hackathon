import gql from "graphql-tag";

export default gql`
  {
    organization(login: "leanjscom") {
      repositories(first: 20, isLocked: false) {
        edges {
          node {
            name
            stargazers(first: 100) {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;
