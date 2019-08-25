import React from 'react'
import StyleWrapper from './StyleWrapper'

export default React.forwardRef((props, ref) => (
  <StyleWrapper ref={ref} {...props}>
    {props.children}
    {props.isDragActive ? (
      <p>drop your file here!</p>
    ) : props.file ? (
      <p>don't forget to add a description</p>
    ) : (
      <p>drag your file here, or click to select</p>
    )}
  </StyleWrapper>
))
