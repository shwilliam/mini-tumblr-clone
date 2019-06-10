import React, {useState} from 'react'
import Dropzone from './Dropzone'
import PostMutation from '../store/mutation/PostMutation'

const NewPost = ({type, ...props}) => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState()

  return (
    <PostMutation description={description} picture={file}>
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault()
            if (file) createPost()
          }}
          {...props}
        >
          {type === 'photo' && <Dropzone file={file} onChange={setFile} />}
          <input
            type="text"
            onChange={e => setDescription(e.target.value)}
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
