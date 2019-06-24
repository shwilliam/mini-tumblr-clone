import React, {useState} from 'react'
import PostMutation from '../../store/mutation/PostMutation'
import TextArea from '../TextArea'
import TextInput from '../TextInput'
import Button from '../Button'
import ImageDropzone from '../ImageDropzone'

// FIXME: require fields

const NewPost = ({type, onCreate, ...props}) => {
  const [text, setText] = useState('')
  const [link, setLink] = useState('')
  const [file, setFile] = useState()

  return (
    <PostMutation text={text} picture={file} link={link}>
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createPost()
            onCreate()
          }}
          noValidate
          {...props}
        >
          {type === 'photo' && <ImageDropzone file={file} onChange={setFile} />}
          <TextArea
            onChange={e => setText(e.target.value)}
            placeholder={
              type === 'photo' ? 'your alt text here' : 'your text here'
            }
          />
          {type === 'link' && (
            <TextInput
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
