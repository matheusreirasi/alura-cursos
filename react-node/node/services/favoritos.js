const fs = require("fs")

const getTodosFavoritos = () => {
  return JSON.parse(fs.readFileSync("favoritos.json"))
}

const inserirFavorito = (id) => {
  const livros = JSON.parse(fs.readFileSync("db.json")) 
  const favoritos = getTodosFavoritos()

  const novoFavorito = livros.find(livro => livro.id === id)
  const novaLista = [ ...favoritos, novoFavorito]

  fs.writeFileSync("favoritos.json", JSON.stringify(novaLista))
}

const deletarFavorito = (id) => {
  const livros = getTodosFavoritos()
  const livrosRestantes = livros.filter(livro => livro.id !== id)
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosRestantes))
}

module.exports = {
  getTodosFavoritos,
  inserirFavorito,
  deletarFavorito
}