import express from 'express'

const port = 3000
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

server.listen(port, () => {
  console.log('The server is listening on port', port)
})
