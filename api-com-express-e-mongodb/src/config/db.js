import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

const db = mongoose.connection;

export default db;

//Não esquecer de colocar o nome do database depois da porta da conexão