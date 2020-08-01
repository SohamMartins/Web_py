const express = require("express")
const app = express()
const routes = express.Router()
const path = require("path")

const idx = require('./src/idx/idn')
const clients = require('./src/cli/clients')


routes.use(clients)
routes.use(idx)


app.use(express.static(path.join(__dirname, 'src')))


app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(routes)

module.exports = app
