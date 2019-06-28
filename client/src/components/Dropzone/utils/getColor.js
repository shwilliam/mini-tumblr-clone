export default ({value}) => {
  switch (!!value) {
    case true:
      return '#bdbdbd'
    default:
      return '#000'
  }
}
