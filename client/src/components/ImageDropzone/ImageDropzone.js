import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

const getColor = ({isDragAccept, isDragReject, isDragActive, theme}) => {
  if (isDragAccept) {
    return theme.success
  }
  if (isDragReject) {
    return theme.error
  }
  if (isDragActive) {
    return '#eee'
  }
  return '#eee'
}

const StyleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${({theme}) => theme.field};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`

const Dropzone = ({file, onChange, ...props}) => {
  const onDrop = useCallback(([file]) => onChange(file), [onChange])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png',
  })

  return (
    <StyleWrapper {...getRootProps()} {...props}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>drop your file here!</p>
      ) : (
        <p>drag your file here, or click to select</p>
      )}
    </StyleWrapper>
  )
}

export default Dropzone
