const express = require('express')
const nunjucks = require('nunjucks')
const favicon = require('serve-favicon');

const server = express()

server.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico', 'favicon.png', 'favicon-32x32.png', 'favicon-96x96.png')));
// the __dirname is the current directory from where the script is running

server.set('view engine', "html")

nunjucks.configure("./src/views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render('index')
})


server.listen(process.env.PORT || 5000)