const {GraphQLServer} = require('graphql-yoga')

const posts = [
  {
    id: '1',
    description: 'desc',
    imgUrl: 'http://place-puppy.com/200x200',
  },
]

const resolvers = {
  Query: {
    feed: () => posts,
  },
  Mutation: {
    publish: (p, args) => {
      const newPost = {
        id: posts.length + 1,
        description: args.description,
        imgUrl: args.imgUrl,
      }
      posts.push(newPost)
      return newPost
    },
  },
  Post: {
    id: p => p.id,
    description: p => p.description,
    imgUrl: p => p.imgUrl,
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log('server running on port 4000'))
