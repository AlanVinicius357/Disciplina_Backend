// importar o o express
const express = require('express')
//criar um router(roteador)
const router = express.Router()

//mapear as rotas e implementar a logica

//routes da calculadora

router.get('/soma', (req, res, next) =>{
    const number1 = parseFloat(req.query.number1)
    const number2 = parseFloat(req.query.number2)

//validar se os numeros estão no intervalo correto
if (isNaN(number1) || isNaN(number2)){
    return res.status(400).json({erro: "Números inválidos"})
}

const resultadoSoma = number1 = number2 

res.json({resultadoSoma})

})



router.get('/subtracao', (req, res, next) =>{
    const number1 = parseFloat(req.query.number1)
     const number2 = parseFloat(req.query.number2)

//validar os parametros
if (isNaN(number1) || isNaN(number2)){
    return res.status(400).json({erro: "Números inválidos"})
}
const resultadoSubtracao = number1 - number2

res.json({resultadoSubtracao})
})



router.get('/multiplicacao', (req, res, next) => {
    const number1 = parseFloat(req.query.number1)
    const number2 = parseFloat(req.query.number2)

//validar os parametros
if (isNaN(number1) || isNaN(number2)){
    return res.status(400).json({erro: "Números inválidos"})
}
const resultadoMult = number1 * number2 
res.json({resultadoMult})
})



router.get('/divisao', (req, res, next) => {
    const number1 = parseFloat(req.query.number1)
    const number2 = parseFloat(req.query.number2)
//validar os parametros

    if(isNaN(number1) || isNaN(number2)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    if(number2 <= 0){
        return res.status(400).json({error:"Não é possivel dividir por 0"})
    }
    const resultadoDivisao = number1 / number2
    res.json({resultadoDivisao})
})



router.get('/quadrado', (req, res, next) => {
    const number1 = parseFloat(req.query.number1)
    if(isNaN(number1)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = Math.pow(number1, 2)
    res.json({resultado})
})



router.get('/raiz', (req, res, next) => {
    const number1 = parseFloat(req.query.number1)
    if(isNaN(number1)){
        return res.status(400).json({error:"Valores inválidas"})
    }
    const resultado = Math.sqrt(number1)
    res.json({resultado})
})

module.exports = router