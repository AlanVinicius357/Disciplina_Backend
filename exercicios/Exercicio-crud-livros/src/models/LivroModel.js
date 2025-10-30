const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    //estrutura para cadastro de livro titulo, autor, editora, ano e preco.
    {
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        ano: {type: Number, required: true},
        preco: {type: Number, required: true}
    },
    
    //salvar a data de criação e data de atualização do registro com..
    {timestamps: true}
)

//criar modelo para exportação
const LivroModel = mongoose.model('Livros', schema)

module.exports = LivroModel