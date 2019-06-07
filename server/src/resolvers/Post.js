const op = (parent, args, context) => context.prisma.post({id: parent.id}).op()

module.exports = {
  op,
}
