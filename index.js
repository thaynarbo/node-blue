const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');
Conn('localhost', 27017, '');
const port = 3000;

const filme = require('./routers/filmes.routes');
app.use(`/filmes`, filme);

app.listen(process.env.PORT || port, () => {
	console.info(`Serviddor rodando na porta ${port}`);
});
