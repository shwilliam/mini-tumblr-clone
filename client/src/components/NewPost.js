import React, {useState} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $imgUrl: String!) {
    publish(description: $description, imgUrl: $imgUrl) {
      id
      imgUrl
      description
    }
  }
`

const NewPost = () => {
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  return (
    <Mutation mutation={POST_MUTATION} variables={{description, imgUrl}}>
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createPost()
          }}
        >
          <input
            type="text"
            onChange={e => setDescription(e.target.value)}
            placeholder="description"
            required
          />
          <input
            type="url"
            onChange={e => setImgUrl(e.target.value)}
            placeholder="image url"
            required
          />
          <button type="submit">post</button>
        </form>
      )}
    </Mutation>
  )
}

export default NewPost
