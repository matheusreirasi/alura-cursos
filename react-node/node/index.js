const express = require("express")
const cors = require("cors")
const rotaLivro = require("./routes/livros.js")
const rotaFavorito = require("./routes/favoritos.js")

const port = 8000
const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavorito)

app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})