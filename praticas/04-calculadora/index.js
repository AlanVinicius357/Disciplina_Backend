// importar o express

const express = require('express')

//criar uma instancia da aplicação

const app = express()

//middlewares (intermediarios)
// intermediario de log

app.use((req, res, next) => {
    console.log("---------####--------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    const primeiroNome = req.query.primeiroNome
    const sobreNome = req.query.sobreNome
    res.send(`Olá ${primeiroNome} ${sobreNome}`)
})

//importando o router calculadora de nota da pasta routes
const calculadoraNotaRouter = require('./routes/calculadoraNota')
app.use('/calculadora', calculadoraNotaRouter)



// executar a apliacação
app.listen(3000, () => {
    console.log("Apliacação rodando em http://localhost:3000  !!!")
})