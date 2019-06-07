const post = (parent, args, context) =>
  context.prisma.like({id: parent.id}).post()

const user = (parent, args, context) =>
  context.prisma.like({id: parent.id}).user()

module.exports = {
  post,
  user,
}
