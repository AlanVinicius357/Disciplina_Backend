const express = require('express');
const router = express.Router();

let professores = [
  { id: 1, nome: "João Pereira", email: "joao@email.com", cpf: "33333333333", curso: "Matemática", disciplina: "BackEnd" },

  { id: 2, nome: "Maria Oliveira", email: "maria@email.com", cpf: "44444444444", curso: "História", disciplina: "FrontEnd" }
];

//listação dos professores
router.get('/professores', (req, res) => res.json(professores));

//listar um professor
router.get('/professores/:id', (req, res) => {
  const professor = professores.find(p => p.id == req.params.id);
  professor ? res.json(professor) : res.status(404).json({ message: "Professor não encontrado" });
});

//novo professor
router.post('/professores', (req, res) => {
  const { nome, email, cpf, curso, disciplina } = req.body;
  const novoProfessor = { id: professores.length + 1, nome, email, cpf, curso, disciplina };
  professores.push(novoProfessor);
  res.status(201).json(novoProfessor);
});

//atualização de professor
router.put('/professores/:id', (req, res) => {
  const professor = professores.find(p => p.id == req.params.id);
  if (professor) {
    Object.assign(professor, req.body);
    res.json(professor);
  } else {
    res.status(404).json({ message: "Professor não encontrado" });
  }
});

//deletar cadastro 
router.delete('/professores/:id', (req, res) => {
  professores = professores.filter(p => p.id != req.params.id);
  res.json({ message: "Professor removido com sucesso" });
});

module.exports = router;
