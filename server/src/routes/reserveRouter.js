// Importando bibliotecas
import express from "express";

// Importando arquivo de controladoras
import routerController from "../controllers/routerController.js";

// Desestruturando routerController
const {
  createReserve,
  readReserve,
  readReserveById,
  updateReserve,
  deleteReserve,
} = routerController;

// Utilizando o roteador do express
const router = express.Router();

// Rotas
router.post("/create", createReserve);
router.get("/read", readReserve);
router.get("/read/:id", readReserveById);
router.put("/update", updateReserve);
router.delete("/delete/:id", deleteReserve);

// Exportando o roteador
export default router;
