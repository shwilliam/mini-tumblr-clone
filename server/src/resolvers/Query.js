const feed = async (root, args, context) => {
  const where = args.filter
    ? {
        OR: [{description_contains: args.filter}],
      }
    : {}

  const posts = await context.prisma.posts({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })

  const count = await context.prisma
    .postsConnection({
      where,
    })
    .aggregate()
    .count()

  return {posts, count}
}

module.exports = {feed}
