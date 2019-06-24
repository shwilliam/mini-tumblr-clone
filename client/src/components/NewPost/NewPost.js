import React, {useState} from 'react'
import PostMutation from '../../store/mutation/PostMutation'
import ImageDropzone from '../ImageDropzone'

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
          {...props}
        >
          {type === 'photo' && <ImageDropzone file={file} onChange={setFile} />}
          <textarea
            onChange={e => setText(e.target.value)}
            placeholder={
              type === 'photo' ? 'your alt text here' : 'your text here'
            }
            required
          />
          {type === 'link' && (
            <input
              type="url"
              onChange={e => setLink(e.target.value)}
              placeholder="your link here"
              required
            />
          )}
          <button type="submit">post</button>
        </form>
      )}
    </PostMutation>
  )
}

export default NewPost
