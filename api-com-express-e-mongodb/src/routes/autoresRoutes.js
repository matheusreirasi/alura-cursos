import express from "express";
import AutorController from "../controllers/autoresControllers.js";
import Paginar from "../middlewares/Paginar.js";

const router = express.Router();

router.get("/autores", AutorController.listarAutores, Paginar);
router.get("/autores/:id", AutorController.listarAutorId);
router.post("/autores", AutorController.cadastrarAutor);
router.put("/autores/:id", AutorController.atualizarAutor);
router.delete("/autores/:id", AutorController.removerAutor);


export default router;