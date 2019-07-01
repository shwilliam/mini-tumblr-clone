export default (post, email) =>
  (post.reblogPoster && email === post.reblogPoster.email) ||
  email === post.op.email
