const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch')

const baseURL = `http://demo9458524.mockable.io/`

const typeDefs = gql`
type Query {
  movie(id: ID!): Movie
}

type Movie {
  id: ID!
  title: String!
  overview: String!
  poster_path: String!
  credits: Credits!
  rating: Rating!
  recommendations: Recommendations!
}

type Credits {
  id: ID!
  cast: [Person]
}

type Person {
  id: Int!
  name: String!
  character: String!
  profile_path: String
}

type Rating {
  id: Int!
  avg_rating: Float!
  total_ratings: Float!
}

type Recommendations {
  id: ID!
  results: [Recommendation]
}

type Recommendation {
  id: Int!
  title: String!
  poster_path: String!
}
`

const resolvers = {
  Query: {
    movie: (parent, args) => {
      const { id } = args
      return fetch(`${baseURL}/movies/${id}`).then(res => res.json())
    },
  },
  Movie: {
    credits: parent => {
      const { id } = parent
      return fetch(`${baseURL}/movies/${id}/credits`).then(res => res.json())
    },
    rating: parent => {
      const { id } = parent
      return fetch(`${baseURL}/movies/${id}/rating`).then(res => res.json())
    },
    recommendations: parent => {
      const { id } = parent
      return fetch(`${baseURL}/movies/${id}/recommendations`).then(res => res.json())
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000, () => console.log(`The server is running on http://localhost:4000`))
