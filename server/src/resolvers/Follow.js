const follower = (parent, args, context) =>
  context.prisma.follow({id: parent.id}).follower()

const following = (parent, args, context) =>
  context.prisma.follow({id: parent.id}).following()

module.exports = {
  follower,
  following,
}
