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
        description
        createdAt
        op {
          id
          name
        }
        likes {
          id
          user {
            id
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
