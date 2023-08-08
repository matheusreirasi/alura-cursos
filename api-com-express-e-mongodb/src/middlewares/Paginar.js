import BadRequest from "../errors/BadRequest.js";

const Paginar = async (req, res, next) => {
	try {
		let {limite = 3, pagina = 1, ordenacao = "titulo:1"} = req.query;
			
		let [campoOrdenacao, ordem] = ordenacao.split(":");

		limite = parseInt(limite);
		pagina = parseInt(pagina);
		ordem = parseInt(ordem);

		const resultado = req.resultado; //Todo middleware tem acesso ao parâmetro req, ou seja todos os middlewares sabem o que passa de um para o outro. Quando eu cadastrar um resultado no controller de autores (a função listarAutores mais precisamente) então eu poderei salvar o resultado de lá dentro dessa variável resultado e depois usar a função find() do mongoose para qualquer coisa que eu queira pesquisar (livros ou autores).


		if (limite > 0 && pagina > 0) {
			const resultadoPaginado = await resultado.find()
				.sort({[campoOrdenacao]: ordem}) //com essa sintaxe do javascript consigo fazer a ordenação ser dinâmica de acordo com os parâmetros da busca na URL
				.skip((pagina -1) * limite)
				.limit(limite)
				.exec();

			res.status(200).send(resultadoPaginado);
		} else {
			next(new BadRequest());
		}
	} catch (error) {
		next(error);
	}
	
};

export default Paginar;