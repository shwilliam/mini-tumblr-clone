const newPostSubscribe = (parent, args, context, info) =>
  context.prisma.$subscribe.post({mutation_in: ['CREATED']}).node()

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => payload,
}

const newLikeSubscribe = (parent, args, context, info) =>
  context.prisma.$subscribe.like({mutation_in: ['CREATED']}).node()

const newLike = {
  subscribe: newLikeSubscribe,
  resolve: payload => payload,
}

module.exports = {
  newPost,
  newLike,
}
