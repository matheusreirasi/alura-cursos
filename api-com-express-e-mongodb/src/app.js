import express from "express"
import db from "./config/db.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão bem sucedida")
})

const app = express()

app.use(express.json())//sem isso ñ consigo passar para o post um objeto json. Se eu tentar irá receber null




app.get("/", (req, res) => {
    res.status(200).send("Curso de Node")
})

app.get("/livros", (req, res) => {
    livros.find((err, livros) =>{
        res.status(200).json(livros)
    })
})

app.get("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})


app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado")
})

app.put("/livros/:id", (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete("/livros/:id", (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})


const buscaLivro = (id) => {
    return livros.findIndex(livro => livro.id == id)//usar === não deu certo pois o parâmetro da função é do tipo any
}

export default app