import BaseError from "./BaseError.js";

class BadRequest extends BaseError {
	constructor(message = "Parâmetros inconsistentes" ) {
		super(message, 400);
	}
}

export default BadRequest;