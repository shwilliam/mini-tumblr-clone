import gql from 'graphql-tag'

const subscribeToNewLikes = subscribeToMore => {
  subscribeToMore({
    document: NEW_LIKES_SUBSCRIPTION,
  })
}

const NEW_LIKES_SUBSCRIPTION = gql`
  subscription {
    newLike {
      id
      post {
        id
        imgUrl
        text
        createdAt
        op {
          id
          name
          email
        }
        likes {
          id
          user {
            id
            email
          }
        }
      }
      user {
        id
      }
    }
  }
`

export {subscribeToNewLikes}
