const {Router} = require("express")
const { deleteFavorito, postFavorito, getFavoritos } = require("../controller/favorito")
const router = Router()

router.get('/', getFavoritos)
router.post('/:id', postFavorito)
router.delete('/:id', deleteFavorito)

module.exports = router
