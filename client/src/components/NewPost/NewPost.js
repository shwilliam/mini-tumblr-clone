import React, {useState} from 'react'
import PostMutation from '../../store/mutation/PostMutation'
import withValidation from '../../enhancers/withValidation'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Button from '../Button'
import ImageDropzone from '../ImageDropzone'
import ErrorText from '../ErrorText'

const TextAreaInput = withValidation(TextArea)
const UrlInput = withValidation(TextInput)

// TODO: require text fields
// TODO: clean up file error handling

const NewPost = ({type, onCreate, ...props}) => {
  const [text, setText] = useState('')
  const [link, setLink] = useState('')
  const [file, setFile] = useState()
  const [fileError, setFileError] = useState()

  return (
    <PostMutation text={text} picture={file} link={link}>
      {createPost => (
        <form
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
              <ImageDropzone file={file} onChange={setFile} />
            </>
          )}
          <TextAreaInput
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
          <Button type="submit">post</Button>
        </form>
      )}
    </PostMutation>
  )
}

export default NewPost
