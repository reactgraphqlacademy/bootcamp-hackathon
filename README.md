# ReactJS Academy Hackathon

TODO: Instructions + links to examples

## hackathon ideas

- autocomplete search app with star wars api
- weather app that shows 4 cities forecast
- Github search repositories and star them
- CV app with Gatsby

---

## Resources

- Free GraphQL APIs (maybe some of them does not work): https://github.com/APIs-guru/graphql-apis
- create a Github token: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
- apollo client documentation:https://www.apollographql.com/docs/react/essentials/get-started.html
- SWAPI GraphQL API (maybe a good try to change the app to use this API?): https://graphql.org/swapi-graphql/
- rebass UI Library Documentation: http://jxnblk.com/rebass/getting-started

---

## Tutorials

### If you want to work with GraphQL

```bash
npm install --save apollo-boost react-apollo graphql graphql-tag
```

or

```bash
yarn add apollo-boost react-apollo graphql graphql-tag
```

in your root app file (`App.js` or `Root.js`)

```jsx
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "GRAPHQL_API_ENDPOINT" // example: https://api.github.com/graphql
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MyAwesomeApp />
    </ApolloProvider>
  );
}
```

---

### If you want to use the Github GraphQL API, you need to [create a token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and add it as a header to every request like this:

```js
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer YOUR_GITHUB_TOKEN"
  }
});
```

you can see all the configuration options here: [https://www.apollographql.com/docs/react/essentials/get-started.html#configuration](https://www.apollographql.com/docs/react/essentials/get-started.html#configuration)

---

## Happy Coding! :)
