const { getTodosLivros, getLivroPorId, inserirLivro, alterarLivro, deletarLivro } = require("../services/livros")

const getLivros = (req, res) => {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const getLivro = (req, res) => {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const livro = getLivroPorId(id)
      res.send(livro)
    } else {
      res.status(422) //Unprocessable Entity
      res.send("Parâmetro inválido.")
    }

  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const postLivro = (req, res) => {
  try {
    const novoLivro = req.body
    if (req.body.nome) {
      inserirLivro(novoLivro)
  
      res.status(201)
      res.send("Livro criado!!!")
    } else {
      res.status(422)
      res.send("Campos incompletos")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const patchLivro = (req, res) => {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const body = req.body
      const livro = getLivroPorId(id)
  
      alterarLivro(body, id)
      res.send(`Livro ${livro.nome} alterado com sucesso`)

    } else {
      res.status(422) //Unprocessable Entity
      res.send("Parâmetro inválido.")
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteLivro = (req, res) => {
  try {
    const id = req.params.id
    deletarLivro(id)
    res.send("Livro excluído")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

// export default getLivros
module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}