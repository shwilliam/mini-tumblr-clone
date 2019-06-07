const {GraphQLServer} = require('graphql-yoga')
const {prisma} = require('./generated/prisma-client')

const resolvers = {
  Query: {
    feed: (root, args, context) => context.prisma.posts(),
  },
  Mutation: {
    publish: (root, args, context) =>
      context.prisma.createPost({
        description: args.description,
        imgUrl: args.imgUrl,
      }),
  },
  Post: {
    id: root => root.id,
    description: root => root.description,
    imgUrl: root => root.imgUrl,
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {prisma},
})

server.start(() => console.log('server running on port 4000'))
