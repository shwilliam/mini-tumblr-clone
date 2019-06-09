import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropzone({file, onChange}) {
  const onDrop = useCallback(
    ([file]) => {
      onChange(file)
    },
    [onChange],
  )
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png',
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>drop your file here!</p>
      ) : (
        <p>drag your file here, or click to select</p>
      )}
    </div>
  )
}

export default Dropzone
