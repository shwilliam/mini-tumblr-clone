# Tumblr mini

> Full-stack Tumblr clone prototype with a GraphQL server built using Prisma &
> `graphql-yoga`, and a frontend made with React and styled using `styled-components`

<img width="895" alt="Site screengrab" src="https://user-images.githubusercontent.com/38357771/64497413-bb267b00-d262-11e9-9c5f-6ef9ffbd453c.png">

## Features

- GraphQL backend (Prisma + `graphql-yoga`)
- Authentication w/ JSON web tokens
- Handles creating, liking, reblogging and sharing posts
- Allows users to follow other users
- Isolated component development w/ Storybook

## Install

1. Clone project

```bash
git clone https://github.com/shwilliam/mini-tumblr-clone
```

2. Init demo DB

```bash
npm i -g prisma

cd server

prisma deploy
```

3. Start server

```bash
cd server

npm i

npm start
```

4. With the server running, start the dev client in a new terminal window

```bash
cd client

npm i

npm start
```

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/mini-tumblr-clone/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/mini-tumblr-clone)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/mini-tumblr-clone/pull/new/master)
