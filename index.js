// Importando bibliotecas
import express from "express";

// Importanto arquivo de rotas
import reserveRouter from "./src/routes/reserveRouter.js";

// Importando arquivo de controladoras
import reserveController from "./src/controllers/reserveController.js";

// Caminho do arquivo reserve.json
global.PATH_API = "./api/reserve.json";

// Instanciando a biblioteca express
const app = express();

// Utilizando JSON
app.use(express.json());

// Utilizando as rotas
app.use("/api", reserveRouter);

app.listen(1010, reserveController.start);
