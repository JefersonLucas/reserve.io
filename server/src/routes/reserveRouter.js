// Importando bibliotecas
import express from "express";

// Importando arquivo de controladoras
import routerController from "../controllers/routerController.js";

// Desestruturando routerController
const {
  createReserve,
  readReserve,
  deleteReserve,
  updateReserve,
  getByIdReserve,
} = routerController;

// Utilizando o roteador do express
const router = express.Router();

// Rotas
router.post("/", createReserve);
router.get("/", readReserve);
router.delete("/:id", deleteReserve);
router.put("/", updateReserve);
router.get("/:id", getByIdReserve);

// Exportando o roteador
export default router;
