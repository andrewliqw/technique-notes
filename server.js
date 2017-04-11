const express = require('express')
const app = express()

const path = require('path')

// app.use('/static', express.static(path.join(__dirname, 'src/static')))
app.use('/static', express.static('src/static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.get('/docker/docker.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/docker/docker.html'))
})

app.get('/python/pytz.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/python/pytz.html'))
})

app.get('/nodejs/nodejs.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/nodejs/nodejs.html'))
})

app.listen(8080, '0.0.0.0', () => {
  console.log('Example app listening on port 8080')
})

// Hello world using nodejs

// const http = require('http')

// const hostname = "0.0.0.0";

// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("hello world");
// })

// server.listen(port, hostname, ()=>{
//     console.log(`server running at http://${hostname}:${port}/`);
// });
