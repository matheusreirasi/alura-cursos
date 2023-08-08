import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
const ErrorHandler = (erro, req, res, next) => {
	if (erro instanceof mongoose.Error.CastError) { //caso id não seja hexadecimal
		// res.status(400).send({message: "Parâmetros inconsistentes."}); COMO ERA
		new BadRequest().sendAnswer(res);

	} else if (erro instanceof mongoose.Error.ValidationError) { //caso algum campo esteja incompleto
		new ValidationError(erro).sendAnswer(res);

	} else if (erro instanceof NotFound) {
		erro.sendAnswer(res);
		
	
	} else if (erro instanceof BaseError) {
		erro.sendAnswer(res);
		
	} else {
		// res.status(500).send({message: `${error.message} - Erro interno de servidor.`}); COMO ERA
		new BaseError().sendAnswer(res);
	}

};

export default ErrorHandler;