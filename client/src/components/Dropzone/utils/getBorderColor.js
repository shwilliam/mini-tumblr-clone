export default ({theme, isDragAccept, isDragReject, isDragActive}) => {
  if (isDragAccept) {
    return theme.success
  } else if (isDragReject) {
    return theme.error
  } else if (isDragActive) {
    return '#eee'
  } else {
    return '#eee'
  }
}
