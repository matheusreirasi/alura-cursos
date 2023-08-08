import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
	{
		id: {type: String},

		titulo: {
			type: String,
			required: [
				true,
				"Titulo é obrigatório."
			]
		},

		autor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "autores",
			required: [
				true,
				"Nome do autor é obrigatório."
			]
		},

		editora: {
			type: String,
			required: [
				true,
				"A editora é obrigatória."
			],
			enum: {
				values: ["Rocco","Companhia das Letras","Pé da letra", "Academia", "Sextante", "Planeta"],
				message: "A editora {VALUE} não é reconhecida por nós"
			}
		},

		numeroPaginas: {
			type: Number,
			validate: {
				min: 30,
				max: 3000,
				validator: (qtdPaginas) => {
					return qtdPaginas >= 30 && qtdPaginas <= 3000;
				},
				message: "{VALUE} não é uma quantidade reconhecida de páginas, deve ter entre {MIN} e {MAX}"
			}
		}
		// numeroPaginas: {
		// 	type: Number,
		// 	min: [30, "Um livro deve ter entre {MIN} e {MAX} páginas"],
		// 	max: [3000, "{VALUE} não é uma quantidade reconhecida de páginas, deve ter entre {MIN} e {MAX}"],
		// }
	}
);

const livros = mongoose.model("livros", livroSchema);

export default livros;