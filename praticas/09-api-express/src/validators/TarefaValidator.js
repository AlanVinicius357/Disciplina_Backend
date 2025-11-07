const yup = require('yup');
const { default: mongoose } = require('mongoose');


const tarefaSchema = yup.object().shape({
    titulo: yup.string().min(6, 'O titúlo deve ter no minímo 6 caracteres').required('O titúlo da tarefa é obrigatório!!'),
    descricao: yup.string().required('A descrição da tarefa é obrigatória').min(15, 'A descrição da tarefa deve ter pelo menos 15 caracteres'),
    data_inicio: yup.date().required('A tarefa deve ter uma data de início!!'),
    data_fim: yup.date().required('A tarefa deve ter uma data final!!'),

    responsavel: yup.string()
        .required('O responsável é obrigatório')
        .test(
          'idValidator',
          'ID do responsável inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),
      projeto: yup.string()
        .required('O projeto é obrigatório')
        .test(
          'idValidator',
          'ID de projeto é inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),


})

async function validarTarefa(req, res, next) {
  try {
    await tarefaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

const tarefaAtualizarSchema = yup.object().shape({

    titulo: yup.string(),
    descricao: yup.string(),
    data_inicio: yup.date(),
    data_fim: yup.date(),

    
    responsavel: yup.string()
        .nullable()
        .test(
          'idValidator',
          'ID do responsável inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),
    projeto: yup.string()
        .nullable()
        .test(
          'idValidator',
          'ID do projeto inválido',
          value => mongoose.Types.ObjectId.isValid(value)
        ),
    });

async function validarTarefaAtualizacao(req, res, next) {
  try {
    await tarefaAtualizarSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    return res.status(400).json({ erros: err.errors });
  }
}

module.exports = { validarTarefa, validarTarefaAtualizacao };    
    
