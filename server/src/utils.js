const jwt = require('jsonwebtoken')
const APP_SECRET = 'yello'

const getUserId = context => {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const {userId} = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

const getFollowers = async context => {
  const userId = getUserId(context)

  const followIds = await context.prisma
    .user({id: userId})
    .following()
    .id()

  const follows = await Promise.all(
    followIds.map(d =>
      context.prisma
        .follow({id: d.id})
        .following()
        .id(),
    ),
  )

  return follows
}

module.exports = {
  APP_SECRET,
  getUserId,
  getFollowers,
}
