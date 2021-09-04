// instanciando mongoose
const mongoose = require('mongoose');

function Conn(url, porta, banco) {
	//o metodo connect recebe 2 parametros aqui,a url do banco e  um objeto
	// useNewUrlParser - para adotar o novo sistema de Url
	// useUnifiedTopology - monitorar o banco de dados
	mongoose
		.connect(
			`mongodb+srv://dbAdmin:9chq8onxzvcBemDl@blue-db.inejy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => {
			console.log('MongoDB connected');
		})
		.catch((err) => {
			console.error(err);
		});
}

module.exports = Conn;
