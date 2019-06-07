function newPostSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.post({mutation_in: ['CREATED']}).node()
}

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => payload,
}

module.exports = {
  newPost,
}
