// Importando bibliotecas
import express from "express";

// Importando arquivo de controladoras
import routerController from "../controllers/routerController.js";

// Utilizando o roteador do express
const router = express.Router();

// Rotas
router.post("/", routerController.createReserve);
router.get("/", routerController.readReserve);
router.delete("/:id", routerController.deleteReserve);
router.put("/", routerController.updateReserve);

// Exportando o roteador
export default router;
