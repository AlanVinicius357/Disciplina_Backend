//importar o express
const express = require('express')
//crio uma instancia do express
const app = express()

//middlewares (intermediarios)
app.use((req, res, next)=> { 
    console.log("----##----")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
}) 

//importando o router calculadora

const calculadoraRouter = require('./routes/calculadora')

app.use('/calculadora', calculadoraRouter)


//executar a aplicação

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})