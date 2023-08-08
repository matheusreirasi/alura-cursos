const { getTodosFavoritos, inserirFavorito, deletarFavorito } = require("../services/favoritos")

const getFavoritos = (req, res) => {
  try {
    const livros = getTodosFavoritos()
    res.send(livros)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const postFavorito = (req, res) => {
  const id = req.params.id
  try {
    inserirFavorito(id)
    res.status(201)
    res.send("Livro criado!!!")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteFavorito = (req, res) => {
  try {
    const id = req.params.id
    deletarFavorito(id)
    res.send("Livro favorito excluído")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
}