import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Dropzone from '../components/Dropzone'

export default ({value, onChange, ...props}) => {
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
    <Dropzone
      file={value}
      {...getRootProps({isDragActive, isDragReject, isDragAccept})}
    >
      <input {...getInputProps()} {...props} />
    </Dropzone>
  )
}
