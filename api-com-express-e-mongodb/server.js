import "dotenv/config.js";
import app from "./src/app.js";
const port = process.env.PORT || 8080; //ou a porta do ambiente de produção ou a porta de desenvolvimento


app.listen(port, () => {
	console.log(`Servidor escutando em  https://localhost:${port}`);
});


//Só pra não esquecer que require é utilização do CommonJs e import é do Ecmascript. Por algum motivo, todo projeto base utilizando express começando com a criação do server utilizando CommonJs