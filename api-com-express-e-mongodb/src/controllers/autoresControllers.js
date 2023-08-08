import NotFound from "../errors/NotFound.js";
import {autores} from "../models/index.js";

class AutorController {
	static listarAutores = async (req, res, next) => {
		
		try {
			const autoresResultado = autores.find();
			req.resultado = autoresResultado;
			next();
			// res.status(200).json(autoresResultado);		
		} catch (error) {
			next(error);
		}


		// autores.find((err, autores) =>{
		// 	res.status(200).json(autores);
		// });
	};

	static listarAutorId = async (req, res, next) => {
		const id = req.params.id;
		
		try {
			const autor = await autores.findById(id);

			autor !== null
				? res.status(200).send(autor)
				: next(new NotFound("ID não encontrado.")); //somente ocorre se houver quantidade correta de dígitos(12 ou 24) no ID e todos forem hexadecimais.

		} catch (error) {
			next(error);
		}

		// autores.findById(id, (err, autores) => {
		// 	if (err) return res.status(400).send(err);
		// 	else {res.status(200).send(autores);}
		// });
	};

	static cadastrarAutor = async (req, res, next) => {
		const novoAutor = new autores(req.body);

		try {
			const autorCadastrado = await novoAutor.save();
			res.status(201).send(autorCadastrado.toJSON());
		} catch (error) {
			next(error);
		}
		
		// novoAutor.save((err) => {
		// 	if (err) {
		// 		res.status(500).send(err);
		// 	} else {
		// 		res.status(201).send(novoAutor.toJSON());
		// 	}
		// });
	};

	static atualizarAutor = async(req, res, next) => {
		const id = req.params.id;

		try {
			const autorAtualizado = await autores.findByIdAndUpdate(id, {$set: req.body});

			autorAtualizado !== null
				? res.status(200).send({message: "Atualizado com sucesso!"})
				: next(new NotFound("ID não encontrado."));

		} catch (error) {
			next(error);
		}

		// autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
		// 	if (err) return res.status(500).send(err);
		// 	else {res.status(200).send("Autor atualizado com sucesso!");}
		// });
	};

	static removerAutor = async (req, res, next) => {
		const id = req.params.id;

		try {
			const autorDeletado = await autores.findByIdAndDelete(id);

			autorDeletado !== null
				? res.status(200).send({message: "Autor excluído com sucesso!"})
				: next(new NotFound("ID não encontrado."));
				
		} catch (error) {
			next(error);
		}

		// autores.findByIdAndDelete(id, err => {
		// 	if (err) return res.status(500).send(err);
		// 	else {res.status(200).send("Autor excluído");}
		// });
	};
}

export default AutorController;