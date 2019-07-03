const {getFollowers} = require('../utils')

const feed = async (root, args, context) => {
  const followers = !args.explore && (await getFollowers(context))

  const where = {
    AND: [
      {
        OR: [
          {
            AND: [{op: {id: args.user}}, {reblogPoster: null}],
          },
          {reblogPoster: {id: args.user}},
        ],
      },
      {text_contains: args.filter},
      followers && !args.user
        ? {
            OR: [
              {
                AND: [{op: {id_in: followers}}, {reblogPoster: null}],
              },
              {reblogPoster: {id_in: followers}},
            ],
          }
        : {},
    ],
  }

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
