const op = (parent, args, context) => context.prisma.post({id: parent.id}).op()

const reblogPoster = (parent, args, context) =>
  context.prisma.post({id: parent.id}).reblogPoster()

const likes = (parent, args, context) =>
  context.prisma.post({id: parent.id}).likes()

module.exports = {
  op,
  reblogPoster,
  likes,
}
