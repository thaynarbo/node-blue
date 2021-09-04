// importando mongoose
const mongoose = require("mongoose");

// criando uma nova coleção usanddo o metodo Schema passando um objeto com
//as linhas da "tabela" - coleção
const filmModel = new mongoose.Schema({
	nome: { type: String, required: true },
	imagemUrl: { type: String, required: true },
	descricao: { type: String },
	autor: { type: String },
});

// O primeiro argumento é o nome singular da coleção que o modelo vai fazer referencia.Mongoose irá procurar pelo plural em minusculo automaticamente. No caso abaixo eu escolhi o filme para a coleção.

// O segundo argumento é o modelo que eu instanciei

// o modelo irá fazer uma cópia do esquema então não posso esquecer de colocar todas as informações no objeto do esquema.

const Filme = mongoose.model("filme", filmModel);

module.exports = Filme;
