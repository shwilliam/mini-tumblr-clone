import React, {useState} from 'react'
import styled from 'styled-components'

// TODO: refactor to withValidation HOC

const validate = (val, message, pattern) =>
  new RegExp(pattern).test(val) ? '' : message

const Container = styled.div``

const ErrorText = styled.p``

const Input = ({
  type = 'text',
  errorMessage,
  validation,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState()
  const handleChange = ({target}) => {
    const error = validate(target.value, errorMessage, validation)

    onChange(target.value)
    setValue(target.value)
    setError(error)
  }

  return (
    <Container>
      {error && <ErrorText>{error}</ErrorText>}
      <input value={value} onChange={handleChange} type={type} {...props} />
    </Container>
  )
}

export default Input
