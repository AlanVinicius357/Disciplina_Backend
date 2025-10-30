const mongoose = require('mongoose')

//intermediario que valida o formato do ID

function validarID(req, res, next){
    const id = req.params.id
    const valido = mongoose.Types.ObjectId.isValid(id)
    if(!valido){
        return res.status(400).json({error: "ID inválido"})
    }
    next()
}

module.exports = {
    validarID
}