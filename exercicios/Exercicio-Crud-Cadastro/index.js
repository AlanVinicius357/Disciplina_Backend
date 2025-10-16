const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

//conectar no banco mongo

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

//conectar ao mongo junto do mongoose

mongoose.connect(url)
    .then(() => {
        console.log("Conectado ao MongoDB")
    })
    .catch(err => {
        console.log("Erro ao conectar no banco MongoDB: ", err)
    })

//criar interface com o bando de dados - model
//cada model(modelo), representa uma collection(Tabela)

const LivroModel = mongoose.model('Livro', new mongoose.Schema(
    {
        titulo: String,
        autor: String,
        editora: String,
        ano: String,
        preco: String
    }
))

//implementação do CRUD

//criar

app.post('/livros', async (req, res, next) => {
    const livro = req.body
    if(!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco){
        return res.status(400).json({erro: "Os campos para cadastro são obrigatórios"})
    }
    const livroCriado = await LivroModel.create(livro)
    res.status(200).json(livroCriado)
})


//listar

app.get('/livros', async (req, res, next) => {
    const livros = await LivroModel.find()
    res.json(livros)
})



//buscar por id

app.get('/livros/:id', async (req, res, next) => {
    const id = req.params.id 
    const livro = await LivroModel.findById(id)

    if (!livro) {
        return res.status(404).json({error: "Livro não encontrado"})
    }
    res.json(livro)
})


//atualizar

app.put('/livros/:id', async (req, res, next) =>{
    const id = req.params.id
    const livro = req.body
    if(!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco){
        return res.status(400).json({erro: "Os campos são obrigatórios!"})
    }
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, {new: true})
    if(!livroAtualizado){
        return res.status(404).json({erro: "Tarefa não encontrada"})
    }
    res.json(livroAtualizado)
})





//deletar
app.delete('/livros/:id', async(req, res, next) => {
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.json({mensagem: "Livro excluido com sucesso!"})
})


//start
app.listen(3000, () =>{
    console.log("A aplicação está rodando em http://localhost:3000")
})