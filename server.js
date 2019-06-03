const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => res.send('ping'))

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html')),
)

app.listen(process.env.PORT || 8080)
