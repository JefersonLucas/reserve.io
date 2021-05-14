// Importando bibliotecas
import express from "express";

// Importanto arquivo de rotas
import reserveRouter from "./src/routes/reserveRouter.js";

// Importando arquivo de controladoras
import reserveController from "./src/controllers/reserveController.js";

// Importando logger do winston
import logger from "./src/config/loggerConfig.js";

// Variáveis globais
global.PATH_API = "../api/reserve.json"; // Caminho do arquivo reserve.json
global.logger = logger(); // Logger do winston

// Instanciando a biblioteca express
const app = express();

// Utilizando JSON
app.use(express.json());

// Utilizando as rotas
app.use("/reserve", reserveRouter);

app.listen(1010, reserveController.start);
