import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

const getColor = ({value}) => {
  switch (!!value) {
    case true:
      return '#bdbdbd'
    default:
      return '#000'
  }
}

const getBorderColor = ({theme, isDragAccept, isDragReject, isDragActive}) => {
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

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-width: 2px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.field};
  border-color: ${getBorderColor};
  border-style: dashed;
  color: ${getColor};
  outline: none;
  transition: border 0.24s ease-in-out;
`

const Dropzone = ({value, onChange, ...props}) => {
  const onDrop = useCallback(([file]) => onChange(file), [onChange])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  })

  return (
    <Container
      file={value}
      {...getRootProps({isDragActive, isDragReject, isDragAccept})}
    >
      <input {...getInputProps()} {...props} />
      {isDragActive ? (
        <p>drop your file here!</p>
      ) : value ? (
        <p>dont't forget to add a description</p>
      ) : (
        <p>drag your file here, or click to select</p>
      )}
    </Container>
  )
}

export default Dropzone
