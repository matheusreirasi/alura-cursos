import BadRequest from "../errors/BadRequest.js";
import NotFound from "../errors/NotFound.js";
import {autores, livros} from "../models/index.js";

class LivroController {
	static listarLivros = async (req, res, next) => {
		try {
			let {limite = 3, pagina = 1, ordenacao = "titulo:1"} = req.query;
			
			let [campoOrdenacao, ordem] = ordenacao.split(":"); //forma rebuscada de deixar a URL mais limpa quando utilizar pesquisas. Separa a string em um array com diferentes valores a partir do dois pontos. Antes do dois pontos é campoOrdenacao (index 0 do array) e depois do dois pontos é ordem (index 1 do array)

			limite = parseInt(limite);
			pagina = parseInt(pagina);
			ordem = parseInt(ordem);


			if (limite > 0 && pagina > 0) {
				const todosLivros = await livros.find()
					.sort({[campoOrdenacao]: ordem}) //com essa sintaxe do javascript consigo fazer a ordenação ser dinâmica de acordo com os parâmetros da busca na URL
					.skip((pagina -1) * limite)
					.limit(limite)
					.populate("autor")//Essa linha no middleware do Paginar estava fazendo dar erro 500.
					.exec();

				res.status(200).send(todosLivros);
			} else {
				next(new BadRequest());
			}
		} catch (error) {
			next(error);
		}

		// livros.find()
		// 	.populate("autor")
		// 	.exec((err, livros) =>{
		// 		res.status(200).json(livros);
		// 	});
	};

	static listarLivroId = async (req, res, next) => {
		const id = req.params.id;

		try {
			const livroId = await livros.findById(id).populate("autor", "nome").exec();
			livroId !== null
				? res.status(200).send(livroId)
				: next(new NotFound("ID não encontrado."));
				
		} catch (error) {
			next(error);
		}
		// livros.findById(id) 
		// 	.populate("autor", "nome")
		// 	.exec((err, livros) => {
		// 		if (err) return res.status(400).send(err);
		// 		else {res.status(200).send(livros);}
		// 	});
	};

	static cadastrarLivro = async (req, res, next) => {
		const novoLivro = new livros(req.body);

		try {
			const livroCadastrado = await novoLivro.save();
			res.status(201).send(livroCadastrado.toJSON());
		} catch (error) {
			next(error);
		}

		// novoLivro.save((err) => {
		// 	if (err) {
		// 		res.status(500).send(err);
		// 	} else {
		// 		res.status(201).send(novoLivro.toJSON());
		// 	}
		// });
	};

	static atualizarLivro = async (req, res, next) => {
		const id = req.params.id;

		try {
			const livroAtualizado = await livros.findByIdAndUpdate(id, {$set: req.body});

			livroAtualizado !== null
				? res.status(200).send({message: "Atualizado com sucesso!"})
				: next(new NotFound("ID não encontrado."));
			
		} catch (error) {
			next(error);
		}

		// livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
		// 	if (err) return res.status(500).send(err);
		// 	else {res.status(200).send("Livro atualizado com sucesso!");}
		// });
	};

	static removerLivro = async (req, res, next) => {
		const id = req.params.id;

		try {
			const livroDeletado = await livros.findByIdAndDelete(id);

			livroDeletado !== null
				? res.status(200).send({message: "Livro excluído"})
				: next(new NotFound("ID não encontrado."));

		} catch (error) {
			next(error);
		}

		// livros.findByIdAndDelete(id, err => {
		// 	if (err) return res.status(500).send(err);
		// 	else {res.status(200).send("Livro excluído");}
		// });
	};

	static listarLivroPorFiltro = async (req, res, next) => {
		const {editora, titulo, nomeAutor} = req.query;
		let busca = {};

		const editoraRegex = RegExp(editora, "i");

		if (editora) busca.editora = editoraRegex;
		if (titulo) busca.titulo = {$regex: titulo, $options: "i"};
		if (nomeAutor) {
			const autor = await autores.findOne({nome: nomeAutor});

			autor !== null
				? busca.autor = autor._id
				: busca.autor = null;

			// const autorId = autor._id;
			// busca.autor = autorId;
		}

		try {
			const listaEditora = await livros.find(busca).populate("autor");
			busca.autor === null && next(new NotFound("ID não encontrado."));
			res.status(200).send(listaEditora);
		} catch (error) {
			next(error);
		}
		
		// livros.find({"editora": editora}, {}, (err, livros) => {
		// 	if (err) return res.status(400).send(err);
		// 	else {res.status(200).send(livros);}
		// });
	};
}

export default LivroController;


// Uma ideia é criar uma função que trabalha com o tratamento de buscas e inserir essa função dentro da função que é utilizada pela rota de busca. Assim posso ter diferentes parâmetros de busca como máximo/mínimo de páginas e deixar a função da rota CLEAN

// Na função listarLivroPorFiltro foi usado os ifs com editora e titulo para não ter que obrigatoriamente passar ambos os valores na url para poder ter um filtro aplicado, agora se eu passar somente um valor na url eu tenho o retorno daquele filtro passado, mesmo que seja somente a editora ou somente o titulo.

// O regex da editora é utilizando função do próprio Javascript e titulo foi usando operador de busca do MongoDB.