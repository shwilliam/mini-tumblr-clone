export default (post, email) =>
  (post.reblogPoster && email === post.reblogPoster.email) ||
  (!post.reblogPoster && email === post.op.email)
