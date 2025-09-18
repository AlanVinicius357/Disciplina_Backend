//importar o express
const express = require('express')
//criar um roteador
const router = express.Router()

//lista de pessoas pra simular o bando de dados
let listaPessoas = [
    {
        id: 1,
        nome: 'Alan',
        cpf: "15554887684",
        email:"alan@gmail.com",
        dataNascimento: "27/02/2001"
    },
    {
        id: 2,
        nome: 'Raiane',
        cpf: "58765428217",
        email:"raiane@gmail.com",
        dataNascimento: "10/11/2004"
    }
]

//mapear as rotas e a logica
//Buscar
//get/pessoas
router.get('/pessoas', (req, res, next) =>{
    res.json(listaPessoas)
})


//busca pelo id
//get pessoas/id:
router.get('/pessoas/:id', (req, res, next) => {
    //recebenod o id como parametro dinamico
    const id = req.params.id
    //faço a busca na lista de pessoas pelo id recebido
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)

    if (!pessoa) {
        return res.status(404).json({error: "Pessoa não encontrada!!"})
    }
    res.json(pessoa)
})




//exportar o roteador
module.exports = router

