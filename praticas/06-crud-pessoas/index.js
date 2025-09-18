//importar o express
const express = require('express')
//importar o cors
const cors = require('cors')
//criar uma instancia do express
const app = express()

//middleware (intermedriarios)
//habilitar o cors nas requisições
app.use(cors())
//habilita receber o json no corpo da requisição
app.use(express.json())

//roteadores (intermediarios do tipo router)

const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)

//executar a aplicação
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})