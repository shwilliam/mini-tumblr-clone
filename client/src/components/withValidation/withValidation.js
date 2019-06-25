import React, {useState} from 'react'
import ErrorText from '../ErrorText'

const validate = (val, message, pattern) =>
  new RegExp(pattern).test(val) ? '' : message

const withValidation = Component => ({
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
    <div>
      {error && <ErrorText>{error}</ErrorText>}
      <Component value={value} onChange={handleChange} type={type} {...props} />
    </div>
  )
}

export default withValidation
