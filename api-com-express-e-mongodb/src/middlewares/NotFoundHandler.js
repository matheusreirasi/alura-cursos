import NotFound from "../errors/NotFound.js";

const NotFoundHandler = (req, res, next) => {
	const error404 = new NotFound();
	next(error404);
};

export default NotFoundHandler;

// Como eu não passei nenhuma mensagem para dentro da classe NotFound() instanciada aqui a mensagem padrão que será retornada é a frase declarada no arquivo src/errors/NotFound.js