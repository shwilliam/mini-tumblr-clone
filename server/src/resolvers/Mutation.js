const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {APP_SECRET, getUserId} = require('../utils')

const publish = (root, args, context) =>
  context.prisma.createPost({
    imgUrl: args.imgUrl,
    description: args.description,
    op: {connect: {id: getUserId(context)}},
  })

const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({...args, password})

  const token = jwt.sign({userId: user.id}, APP_SECRET)

  return {
    token,
    user,
  }
}

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({email: args.email})
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({userId: user.id}, APP_SECRET)

  return {
    token,
    user,
  }
}

const like = async (parent, args, context, info) => {
  const userId = getUserId(context)

  const postExists = await context.prisma.$exists.like({
    user: {id: userId},
    post: {id: args.postId},
  })
  if (postExists) {
    throw new Error(`Already liked ${args.postId}`)
  }

  return context.prisma.createLike({
    user: {connect: {id: userId}},
    post: {connect: {id: args.postId}},
  })
}

module.exports = {publish, signup, login, like}
