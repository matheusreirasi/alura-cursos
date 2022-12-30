import mongoose from "mongoose";

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/alura-node")

const db = mongoose.connection

export default db

//Não esquecer de colocar o nome do database depois da porta da conexão