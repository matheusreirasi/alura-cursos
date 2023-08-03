import express from "express";
import AutorController from "../controllers/autoresControllers.js";

const router = express.Router();

router.get("/autores", AutorController.listarAutores);
router.get("/autores/:id", AutorController.listarAutorId);
router.post("/autores", AutorController.cadastrarAutor);
router.put("/autores/:id", AutorController.atualizarAutor);
router.delete("/autores/:id", AutorController.removerAutor);


export default router;