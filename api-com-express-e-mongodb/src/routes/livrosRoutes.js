import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/busca", LivroController.listarLivroEditora);
router.get("/livros/:id", LivroController.listarLivroId);
router.post("/livros", LivroController.cadastrarLivro);
router.put("/livros/:id", LivroController.atualizarLivro);
router.delete("/livros/:id", LivroController.removerLivro);


export default router;