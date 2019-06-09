const {GraphQLServer} = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Subscription = require('./resolvers/Subscription')
const Like = require('./resolvers/Like')
const express = require('express')

// TODO: ensure uploads/ exists or create

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Subscription,
  Like,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
})

server.express.use('/uploads', express.static('uploads'))

const port = 4000
server.start(
  {
    port,
    cors: {
      credentials: true,
      origin: ['http://localhost:3000'],
    },
  },
  () => console.log(`server running on port ${port}`),
)
