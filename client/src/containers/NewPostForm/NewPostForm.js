import React, {useState} from 'react'
import styled from 'styled-components'
import PostMutation from '../../store/mutation/PostMutation'
import withValidation from '../../enhancers/withValidation'
import TextArea from '../../components/TextArea'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import ErrorText from '../../components/ErrorText'
import ImageDropzone from '../ImageDropzone'

const TextAreaInput = withValidation(TextArea)
const UrlInput = withValidation(TextInput)

// TODO: require text fields
// TODO: clean up file error handling

const Form = styled.form`
  flex-grow: 1;
`

const NewPostForm = ({type, onCreate, ...props}) => {
  const [text, setText] = useState('')
  const [link, setLink] = useState('')
  const [file, setFile] = useState()
  const [fileError, setFileError] = useState()

  return (
    <PostMutation
      text={text}
      picture={type === 'photo' ? file : null}
      link={type === 'link' ? link : null}
    >
      {createPost => (
        <Form
          onSubmit={e => {
            e.preventDefault()

            if (type === 'photo' && !file)
              return setFileError('please upload an image')
            createPost()
            onCreate()
          }}
          noValidate
          {...props}
        >
          {type === 'photo' && (
            <>
              <ErrorText>{fileError}</ErrorText>
              <ImageDropzone value={file} onChange={setFile} />
            </>
          )}
          <TextAreaInput
            value={text}
            onChange={setText}
            errorMessage="this field is required"
            validation=".*\S.*"
            placeholder={
              type === 'photo' ? 'describe your image here' : 'your text here'
            }
          />
          {type === 'link' && (
            <UrlInput
              type="url"
              onChange={setLink}
              errorMessage="please input a valid url"
              validation="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
              placeholder="your link here"
            />
          )}
          <Button type="primary" htmlType="submit">
            post
          </Button>
        </Form>
      )}
    </PostMutation>
  )
}

export default NewPostForm
