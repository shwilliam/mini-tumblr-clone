import React, {useState} from 'react'
import Dropzone from './Dropzone'
import PostMutation from '../store/mutation/PostMutation'

const NewPost = ({type, ...props}) => {
  const [text, setText] = useState('')
  const [file, setFile] = useState()

  return (
    <PostMutation text={text} picture={file}>
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createPost()
          }}
          {...props}
        >
          {type === 'photo' && <Dropzone file={file} onChange={setFile} />}
          <textarea
            onChange={e => setText(e.target.value)}
            placeholder="your text here"
            required
          />
          <button type="submit">post</button>
        </form>
      )}
    </PostMutation>
  )
}

export default NewPost
