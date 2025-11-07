const yup = require('yup');

const projetoSchema = yup.object().shape({
  nome: yup.string().required('O nome do projeto é obrigatório').min(8, 'O nome do projeto deve ter pelo menos 8 caracteres'),
  descricao: yup.string().required('A descrição do projeto é obrigatória').min(15, 'A descrição do projeto deve ter pelo menos 15 caracteres'),
  data_inicio: yup.date().required('O projeto deve ter uma data de início!!'),
  data_fim: yup.date().required('O projeto deve ter uma data final!!'),
})

async function validarProjeto(req, res, next) {
  try {
    await projetoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const projetoAtualizarSchema = yup.object().shape({
    nome: yup.string().required('O nome do projeto é obrigatório').min(8, 'O nome do projeto deve ter pelo menos 8 caracteres'),
    descricao: yup.string().required('A descrição do projeto é obrigatória').min(15, 'A descrição do projeto deve ter pelo menos 15 caracteres'),
    data_inicio: yup.date().required('O projeto deve ter uma data de início!!'),
    data_fim: yup.date().required('O projeto deve ter uma data final!!'),
})

async function validarProjetoAtualizacao(req, res, next) {
  try {
    await projetoAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarProjeto, validarProjetoAtualizacao };    
    
    
    