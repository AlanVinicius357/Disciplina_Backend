const yup = require('yup')

//Criar esquema de validação titulo, autor, editora, ano
//e preco.

const schemaNovoLivro = yup.object().shape(
    {
        titulo: yup.string().required("O campo titúlo é obrigatório!!"),
        autor: yup.string().required("O campo autor é obrigatório!!"),
        editora: yup.string().required("O campo editora é obrigatório!!"),
        ano: yup.number().min(1500, "O livro deve ter data de lançamento ápos 1500").max(new Date().getFullYear(), "O ano de lançamento não pode ser no futuro").required("O campo"),
        preco: yup.number().required("O campo preço é obrigatório!").positive("O preço deve ser positivo")
    }
)

//middlewares de validação 

async function validarNovoLivro(req, res, next){
    try {
        await schemaNovoLivro.validate(req.body, {abortEarly: 
            false})
            next()
    } catch (error){
        return res.status(400).json({erros: error.errors})
    }
}

//exportar os middlewares
module.exports = {
    validarNovoLivro
}