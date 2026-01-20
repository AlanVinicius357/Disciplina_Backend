const express = require('express');
const router = express.Router();

let alunos = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", cpf: "11111111111", telefone: "11999999999", dataNascimento: "2000-01-01" },

  { id: 2, nome: "Carlos Souza", email: "carlos@email.com", cpf: "22222222222", telefone: "21988888888", dataNascimento: "1998-05-15" }
];

//listar alunos
router.get('/alunos', (req, res) => res.json(alunos));

//listar aluno especifico
router.get('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id == req.params.id);
  aluno ? res.json(aluno) : res.status(404).json({ message: "Aluno não encontrado" });
});

//add novo aluno
router.post('/alunos', (req, res) => {
  const { nome, email, cpf, telefone, dataNascimento } = req.body;
  const novoAluno = { id: alunos.length + 1, nome, email, cpf, telefone, dataNascimento };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

//atualizar cadastro
router.put('/alunos/:id', (req, res) => {
  const aluno = alunos.find(a => a.id == req.params.id);
  if (aluno) {
    Object.assign(aluno, req.body);
    res.json(aluno);
  } else {
    res.status(404).json({ message: "Aluno não encontrado" });
  }
});

//deletar aluno
router.delete('/alunos/:id', (req, res) => {
  alunos = alunos.filter(a => a.id != req.params.id);
  res.json({ message: "Aluno removido com sucesso" });
});

module.exports = router;
