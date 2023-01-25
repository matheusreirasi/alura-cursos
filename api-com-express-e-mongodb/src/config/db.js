import mongoose from "mongoose";

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://usuario:123@alura.aqe9eco.mongodb.net/livraria-alura?retryWrites=true&w=majority")

const db = mongoose.connection

export default db

//Não esquecer de colocar o nome do database depois da porta da conexão