import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import NotFoundHandler from "./middlewares/NotFoundHandler.js";


db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
	console.log("Conexão bem sucedida");
});

const app = express();
app.use(express.json());//sem isso ñ consigo passar para o post um objeto json. Se eu tentar irá receber null

routes(app);
app.use(NotFoundHandler);
app.use(ErrorHandler);

export default app;