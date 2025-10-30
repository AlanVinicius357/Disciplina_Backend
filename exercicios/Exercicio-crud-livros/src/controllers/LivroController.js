const express = require('express')
const router = express.Router()
const LivroModel = require('../models/LivroModel')

//validadores como middlewares
const {validarNovoLivro} = require('../validators/LivroValidator')
const {validarID} = require('../validators/IDValidator')

//criar rotas do crud

//create 
router.post('/livros', validarNovoLivro, async(req,res,next) =>{
    const livro = req.body
    const livroCadastrado = await LivroModel.create(livro)
    res.status(201).json(livroCadastrado)
})

//read 
router.get('/livros', async (req,res,next) =>{
    const livros = await LivroModel.find()
    res.json(livros)
})

//buscar por id
router.get('/livros/:id', validarID, async(req,res,next) => {
    const id = req.params.id
    const livroEncontrado = await LivroModel.findById(id)
    if(!livroEncontrado){
        return res.status(404).json({erro: "Livro não encontrado!!"})
    }
    res.json(livroEncontrado)
})

//update 
router.put('/livros/:id', validarID, async(req, res, next) => {
    const id = req.params.id
    const novoDados = req.body
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novoDados, {new: true})
    if(!livroAtualizado){
        return res.status(404).json({erro: "Livro não encontrado!!"})
    }
    res.json(livroAtualizado)
})


//delete
router.delete('/livros/:id', validarID, async (req, res, next) =>{
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.status(204).send()
})

module.exports = router