// para escrever nos arquivos
const fs = require('fs')


// para o express
const express = require("express")
const app = express()
const routes = require('./routes')


// utilizando as rotas
app.use(routes)


// para o servidor
const server = require('http').createServer(app)
const io = require('socket.io')(server)


io.on('connection', socket => {
	socket.on('client_sended', data => {
		console.log(data)
	})
	

	socket.on('client_register', data => {
		if (data.name && data.tel) {
			var list = [data.name, data.tel]
		} else {
			throw new Error("Erro de tipo. Valor nulo!")
		}


		fs.writeFile('./bin/client.txt', list, err => {
			if (err) throw err

			console.log(`O que foi escrito: ${list}`)

		})

	})

})



module.exports = server

