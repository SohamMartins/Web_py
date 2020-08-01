const express = require("express")
const app = express()
const routes = express.Router()
const path = require("path")


app.use(express.static(path.join(__dirname)));


app.set('views', path.join(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


routes.use('/', (req, res) => {
	res.render('index.html')
})


app.use(routes)

module.exports = app