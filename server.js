const server = require("./JS_project/app")

server.listen(3000, err => {
	if (err) throw err

	console.log("Conectado com sucesso!")
})
