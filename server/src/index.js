const {GraphQLServer} = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Subscription = require('./resolvers/Subscription')

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Subscription,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
})

server.start(() => console.log('server running on port 4000'))
