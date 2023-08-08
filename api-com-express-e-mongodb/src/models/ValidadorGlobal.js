import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
	validator: (valor) => valor !== "",  //função de validação personalizada, será true se tiver algum valor na string
	message: ({path}) => `O campo ${path} foi fornecido em branco`
	// message: "Um campo em branco foi fornecido"
});


// Esse código do mongoose quer dizer que para todos os campos dos models que são do tipo string contidos dentro do schema será definida uma propriedade. Como todo campo (numeroPaginas e editora por exemplo) dentro do schema do mongoose permite a propriedade validator e esse validator recebe uma função, foi estabelecido aqui que somente será válido um campo do tipo string que tenha algum valor diferente de uma string vazia e caso isso não seja satisfeito será retornado uma mensagem passada no valor message.