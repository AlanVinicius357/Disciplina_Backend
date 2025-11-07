const express = require('express');
const router = express.Router();

const ProjetoModel = require('../models/ProjetoModel');
const { validarId } = require('../validators/IDValidator');
const { validarProjeto, validarProjetoAtualizacao } = require('../validators/ProjetoValidator');

router.get('/projetos', async (req, res) => {
  const projeto = await ProjetoModel.find();
  res.json(projeto);
});

router.get('/projetos/:id', validarId, async (req, res) => {
  const projeto = await ProjetoModel.findById(req.params.id);
  if (!projeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.json(projeto);
});

router.post('/projeto', validarProjeto, async (req, res) => {
  const novoProjeto = await ProjetoModel.create(req.body);
  res.status(201).json(novoProjeto);
});

router.put('/projetos/:id', validarId, validarProjetoAtualizacao, async (req, res) => {
  const updateProjeto = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updateProjeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.json(updatedProjeto);
});

router.delete('/projetos/:id', validarId, async (req, res) => {
  const deletarProjeto = await ProjetoModel.findByIdAndDelete(req.params.id);
  if (!deletarProjeto) {
    return res.status(404).json({ message: 'Projeto não encontrado!' });
  }
  res.status(204).send();
});

module.exports = router;