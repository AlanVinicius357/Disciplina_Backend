//importar o express
const express = require('express')
//importar o cors
const cors = require('cors')
//criar uma instancia do express
const app = express()

//middleware (intermediarios)
app.use(cors()) //habilita o corsh nas requisições
app.use(express.json()) // habilita receber json no corpo da requisição

//roteadores (intermediarios do tipo router)
const contatosRouter = require('./routes/contatos')
app.use(contatosRouter)


//executar a aplicação
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})