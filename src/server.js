const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
// the __dirname is the current directory from where the script is running

server.set('view engine', "html")

nunjucks.configure("./src/views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render('index')
})


server.listen(process.env.PORT || 5000)