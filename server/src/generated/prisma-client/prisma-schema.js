module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLike {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Like {
  id: ID!
  post: Post!
  user: User!
}

type LikeConnection {
  pageInfo: PageInfo!
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  id: ID
  post: PostCreateOneWithoutLikesInput!
  user: UserCreateOneWithoutLikesInput!
}

input LikeCreateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutPostInput {
  id: ID
  user: UserCreateOneWithoutLikesInput!
}

input LikeCreateWithoutUserInput {
  id: ID
  post: PostCreateOneWithoutLikesInput!
}

type LikeEdge {
  node: Like!
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
}

type LikePreviousValues {
  id: ID!
}

input LikeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LikeScalarWhereInput!]
  OR: [LikeScalarWhereInput!]
  NOT: [LikeScalarWhereInput!]
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
  AND: [LikeSubscriptionWhereInput!]
  OR: [LikeSubscriptionWhereInput!]
  NOT: [LikeSubscriptionWhereInput!]
}

input LikeUpdateInput {
  post: PostUpdateOneRequiredWithoutLikesInput
  user: UserUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateManyWithoutPostInput {
  create: [LikeCreateWithoutPostInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateWithoutPostDataInput {
  user: UserUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateWithoutUserDataInput {
  post: PostUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutPostDataInput!
}

input LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutUserDataInput!
}

input LikeUpsertWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutPostDataInput!
  create: LikeCreateWithoutPostInput!
}

input LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutUserDataInput!
  create: LikeCreateWithoutUserInput!
}

input LikeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  post: PostWhereInput
  user: UserWhereInput
  AND: [LikeWhereInput!]
  OR: [LikeWhereInput!]
  NOT: [LikeWhereInput!]
}

input LikeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLike(data: LikeCreateInput!): Like!
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  text: String!
  imgUrl: String
  link: String
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  op: User!
  reblogPoster: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  text: String!
  imgUrl: String
  link: String
  likes: LikeCreateManyWithoutPostInput
  op: UserCreateOneWithoutPostsInput!
  reblogPoster: UserCreateOneInput
}

input PostCreateManyWithoutOpInput {
  create: [PostCreateWithoutOpInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutLikesInput {
  id: ID
  text: String!
  imgUrl: String
  link: String
  op: UserCreateOneWithoutPostsInput!
  reblogPoster: UserCreateOneInput
}

input PostCreateWithoutOpInput {
  id: ID
  text: String!
  imgUrl: String
  link: String
  likes: LikeCreateManyWithoutPostInput
  reblogPoster: UserCreateOneInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  imgUrl_ASC
  imgUrl_DESC
  link_ASC
  link_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  imgUrl: String
  link: String
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  imgUrl: String
  imgUrl_not: String
  imgUrl_in: [String!]
  imgUrl_not_in: [String!]
  imgUrl_lt: String
  imgUrl_lte: String
  imgUrl_gt: String
  imgUrl_gte: String
  imgUrl_contains: String
  imgUrl_not_contains: String
  imgUrl_starts_with: String
  imgUrl_not_starts_with: String
  imgUrl_ends_with: String
  imgUrl_not_ends_with: String
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  text: String
  imgUrl: String
  link: String
  likes: LikeUpdateManyWithoutPostInput
  op: UserUpdateOneRequiredWithoutPostsInput
  reblogPoster: UserUpdateOneInput
}

input PostUpdateManyDataInput {
  text: String
  imgUrl: String
  link: String
}

input PostUpdateManyMutationInput {
  text: String
  imgUrl: String
  link: String
}

input PostUpdateManyWithoutOpInput {
  create: [PostCreateWithoutOpInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutOpInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutOpInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutLikesInput {
  create: PostCreateWithoutLikesInput
  update: PostUpdateWithoutLikesDataInput
  upsert: PostUpsertWithoutLikesInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutLikesDataInput {
  text: String
  imgUrl: String
  link: String
  op: UserUpdateOneRequiredWithoutPostsInput
  reblogPoster: UserUpdateOneInput
}

input PostUpdateWithoutOpDataInput {
  text: String
  imgUrl: String
  link: String
  likes: LikeUpdateManyWithoutPostInput
  reblogPoster: UserUpdateOneInput
}

input PostUpdateWithWhereUniqueWithoutOpInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutOpDataInput!
}

input PostUpsertWithoutLikesInput {
  update: PostUpdateWithoutLikesDataInput!
  create: PostCreateWithoutLikesInput!
}

input PostUpsertWithWhereUniqueWithoutOpInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutOpDataInput!
  create: PostCreateWithoutOpInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  imgUrl: String
  imgUrl_not: String
  imgUrl_in: [String!]
  imgUrl_not_in: [String!]
  imgUrl_lt: String
  imgUrl_lte: String
  imgUrl_gt: String
  imgUrl_gte: String
  imgUrl_contains: String
  imgUrl_not_contains: String
  imgUrl_starts_with: String
  imgUrl_not_starts_with: String
  imgUrl_ends_with: String
  imgUrl_not_ends_with: String
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  op: UserWhereInput
  reblogPoster: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  like(where: LikeWhereUniqueInput!): Like
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutOpInput
  likes: LikeCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLikesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutOpInput
}

input UserCreateWithoutPostsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  likes: LikeCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutOpInput
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutOpInput
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLikesDataInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutOpInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  password: String
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    