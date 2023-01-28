import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) =>{
            res.status(200).json(autores)
        })
    }

    static listarAutorId = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if (err) return res.status(400).send(err)
            else {res.status(200).send(autores)}
        })
    }

    static cadastrarAutor = (req, res) => {
        const novoAutor = new autores(req.body)

        novoAutor.save((err) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(novoAutor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) return res.status(500).send(err)
            else {res.status(200).send('Autor atualizado com sucesso!')}
        })
    }


    static removerAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, err => {
            if (err) return res.status(500).send(err)
            else {res.status(200).send('Autor excluído')}
        })
    }
}

export default AutorController