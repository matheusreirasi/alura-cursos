const fs = require("fs")

const getTodosLivros = () => {
  return JSON.parse(fs.readFileSync("db.json"))
}

const getLivroPorId = (id) => {
  const livros = JSON.parse(fs.readFileSync("db.json"))
  return livros.filter(livro => livro.id === id)
}

const inserirLivro = (novoLivro) => {
  const livros = getTodosLivros()
  const novaLista = [ ...livros, novoLivro]

  fs.writeFileSync("db.json", JSON.stringify(novaLista))
}

const alterarLivro = (alteracoes, id) => {
  let livrosAtuais = getTodosLivros()
  const indiceAlteracao = livrosAtuais.findIndex(livro => livro.id === id)

  const conteudoAlterado = {...livrosAtuais[indiceAlteracao], ...alteracoes}
  // livroAtuais[indiceAlteracao] -> {id:2, nome: "Bíblia"}
  // modificacoes -> {nome: "A arte da guerra"}

  livrosAtuais[indiceAlteracao] = conteudoAlterado
  
  fs.writeFileSync("db.json", JSON.stringify(livrosAtuais))
}

const deletarLivro = (id) => {
  const livros = getTodosLivros()
  const livrosRestantes = livros.filter(livro => livro.id !== id)
  fs.writeFileSync("db.json", JSON.stringify(livrosRestantes))
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  inserirLivro,
  alterarLivro,
  deletarLivro
}