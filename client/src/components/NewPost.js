import React, {useState} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import Dropzone from './Dropzone'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $picture: Upload) {
    publish(description: $description, picture: $picture) {
      id
      description
    }
  }
`

const NewPost = () => {
  const [description, setDescription] = useState('')
  const [file, setFile] = useState()

  return (
    <Mutation mutation={POST_MUTATION} variables={{description, picture: file}}>
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault()
            if (file) createPost()
          }}
        >
          <Dropzone file={file} onChange={setFile} />
          <input
            type="text"
            onChange={e => setDescription(e.target.value)}
            placeholder="description"
            required
          />
          <button type="submit">post</button>
        </form>
      )}
    </Mutation>
  )
}

export default NewPost
