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

//criação
//post/pessoas
//req.body
//new date()
router.post('/pessoas', (req, res, next)=>{
    const { nome, email, dataNascimento} = req.body
//validando todos os itens
    if (!nome || !cpf || !email || !dataNascimento){
        return res.status(400).json ({error: "Nome, cpf, email e data de nascimento são obrigatórios!!"})
    }
//validar se o cpf ja está cadastrado

    if (listaPessoas.some(pessoa => pessoa.cpf == cpf)){
        return res.status(409).json({error: "Cpf já cadastrado"})
    }

const novaPessoa = {
    id: Date.now(),
    nome,
    cpf, 
    email,
    dataNascimento
}
listaPessoas.push(novaPessoa)
res.status(201).json({message: "Pessoa cadastrada com sucesso", novaPessoa})
})

//atualizar
//put ou patch
router.put('/pessoas/:id', (req, res, next) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    //validar se pessoa existe
    if(!pessoa){
        return res.status(404).json({error: "Pessoa não encontrada!!!"})
    }


//validar se os dados pra atualizar vinheram na requisição
    const {nome, email, dataNascimento} = req.body
    if(!nome || !email || !dataNascimento){
        return res.status(400).json({error: "Nome, email e data de nascimento são obrigatórios!"})
    }

//atualizo dados da pessoa
pessoa.nome = nome 
pessoa.email = email
pessoa.dataNascimento = dataNascimento

res.json({message: "Pessoa atualizada com sucesso!", pessoa})
})

//deletar pessoa
router.delete('/pessoas/:id', (req, res, next) =>{
    
})



//exportar o roteador
module.exports = router

