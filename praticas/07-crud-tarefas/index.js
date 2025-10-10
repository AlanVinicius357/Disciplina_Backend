const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())

//conectar no banco mongo
mongoose.connect('mongodb+srv://AlanVinicius27:dellon3157@cluster0.5hpbakc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Conectado ao MongoDB")
    })
    .catch(err => {
        console.log("Erro ao conectar no banco MongoDB: ", err)
    })

app.listen(3000, () => {
    console.log("A aplicação está rodando em http://localhost:3000")
})