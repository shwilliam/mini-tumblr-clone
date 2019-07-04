const posts = (parent, args, context) =>
  context.prisma.user({id: parent.id}).posts()

const followers = (parent, args, context) =>
  context.prisma.user({id: parent.id}).followers()

module.exports = {
  posts,
  followers,
}
