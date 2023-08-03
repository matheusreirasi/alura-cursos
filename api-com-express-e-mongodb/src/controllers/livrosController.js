import livros from "../models/Livro.js";

class LivroController {
	static listarLivros = (req, res) => {
		livros.find()
			.populate("autor")
			.exec((err, livros) =>{
				res.status(200).json(livros);
			});
	};

	static listarLivroId = (req, res) => {
		const id = req.params.id;

		livros.findById(id) 
			.populate("autor", "nome")
			.exec((err, livros) => {
				if (err) return res.status(400).send(err);
				else {res.status(200).send(livros);}
			});
	};

	static cadastrarLivro = (req, res) => {
		const novoLivro = new livros(req.body);

		novoLivro.save((err) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(201).send(novoLivro.toJSON());
			}
		});
	};

	static atualizarLivro = (req, res) => {
		const id = req.params.id;

		livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
			if (err) return res.status(500).send(err);
			else {res.status(200).send("Livro atualizado com sucesso!");}
		});
	};


	static removerLivro = (req, res) => {
		const id = req.params.id;

		livros.findByIdAndDelete(id, err => {
			if (err) return res.status(500).send(err);
			else {res.status(200).send("Livro excluído");}
		});
	};

	static listarLivroEditora = (req, res) => {
		const editora = req.query.editora;

		livros.find({"editora": editora}, {}, (err, livros) => {
			if (err) return res.status(400).send(err);
			else {res.status(200).send(livros);}
		});
	};
}

export default LivroController;