const {GraphQLServer} = require('graphql-yoga')

const typeDefs = `
  type Query {
    test: String!
  }
`

const resolvers = {
  Query: {
    test: () => `hello`,
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('server running on port 4000'))
