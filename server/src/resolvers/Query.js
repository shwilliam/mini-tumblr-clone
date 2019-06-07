const feed = async (root, args, context) => {
  const where = args.filter
    ? {
        OR: [
          {description_contains: args.filter},
          {imgUrl_contains: args.filter},
        ],
      }
    : {}

  const posts = await context.prisma.posts({
    where,
  })
  return posts
}

module.exports = {feed}
