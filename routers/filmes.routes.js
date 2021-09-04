// buscando o objeto express

const express = require('express');
// a constante router está recebendo uma função
const router = express.Router();
// importando o modelo criado em filmes.js
const Filme = require('../models/filmes');

// criando a rota para adicionar filmes
// no metodo post o primeiro argumento é o endpoint e o segundo uma função que precisa do req e res como parametro para poder responder o endpoint
router.post('/add', async (req, res) => {
	const filme = await Filme.create(req.body);
	filme
		.save()
		.then(() => {
			res.status(200).send('Filme adicionado com sucesso');
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
		});
});

router.get('/', async (req, res) => {
	await Filme.find({})
		.then((filme) => {
			res.status(200).send(filme);
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
			console.log(err);
		});
});

router.get('/findById/:name', async (req, res) => {
	await Filme.find({ nome: req.params.name })
		.then((musica) => {
			res.status(200).send(filme);
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
		});
});

router.get('/findByName/:name', async (req, res) => {
	await Filme.find({ nome: req.params.name })
		.then((filme) => {
			res.status(200).send(filme);
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
		});
});

router.put('/update/:id', async (req, res) => {
	await Filme.updateOne({ _id: req.params.id }, req.body)
		.then(() => {
			res.status(200).send('Atualizado com sucesso');
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
		});
});

router.delete('/delete/:id', async (req, res) => {
	await Filme.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).send('Deletado com sucesso');
		})
		.catch((err) => {
			res.status(400).send('Envio com problemas');
		});
});

module.exports = router;
