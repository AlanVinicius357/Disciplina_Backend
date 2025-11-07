const express = require('express');
const router = express.Router();

const TarefaModel = require('../models/TarefaModel');
const { validarTarefa, validarTarefaAtualizacao } = require('../validators/TarefaValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/tarefas', async (req, res) => {
  const tarefas = await TarefaModel.find().populate(['responsavel', 'projeto']);
  res.json(tarefas);
});

router.get('/tarefas/:id', validarId, async (req, res) => {
  const tarefa = await TarefaModel.findById(req.params.id).populate(['responsavel', 'projeto']);
  if (!tarefa) {
    return res.status(404).json({ error: 'A tarefa não foi encontrada' });
  }
  res.json(tarefa);
});

router.post('/tarefas', validarTarefa, async (req, res) => {
  const novaTarefa = await TarefaModel.create(req.body);
  res.status(201).json(novaTarefa);
});

router.put('/tarefas/:id', validarId, validarTarefaAtualizacao, async (req, res) => {
  const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!tarefaAtualizada) {
    return res.status(404).json({ error: 'A tarefa não encontrada' });
  }
  res.json(tarefaAtualizada);
});

router.delete('/tarefas/:id', validarId, async (req, res) => {
  const tarefaDeletada = await TarefaModel.findByIdAndDelete(req.params.id);
  if (!tarefaDeletada) {
    return res.status(404).json({ error: 'A tarefa não encontrada' });
  }
  res.status(204).send();
});

module.exports = router;