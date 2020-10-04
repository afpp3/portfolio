const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', "html")

nunjucks.configure("./src/views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render('index')
})


server.listen(process.env.PORT || 5000)