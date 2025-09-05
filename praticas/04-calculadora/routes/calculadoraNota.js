//importar o express
const express = require('express')
//criar um router(roteador)
const router = express.Router()

// mapeamento das rotas e implementa a logica de cada um

router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    //validar se os parametros existem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: "Notas invalidas"})
    }


    //validar se as notas estão no intervalo correto
    if(exercicio < 0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6){
        return res.status(400).json({erro: "Notas fora do intervalo"})
    }
    

    const notaA1 = exercicio + trabalho + prova

    res.json({notaA1})


    res.send("Calculadora nota A1 Funcionando!!")
})




//exportar 
module.exports = router