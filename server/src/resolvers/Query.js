const feed = (root, args, context) => context.prisma.posts()

module.exports = {feed}
