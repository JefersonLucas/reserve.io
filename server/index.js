// Importando bibliotecas
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

// Importanto arquivo de rotas
import reserveRouter from "./src/routes/reserveRouter.js";

// Importando arquivo de controladoras
import reserveController from "./src/controllers/reserveController.js";

// Importando logger do winston
import logger from "./src/config/loggerConfig.js";

// Importando o documento do swagger
import { swaggerDocument } from "./docs/doc.js";

// Variáveis globais
global.PATH_API = "./api/reserve.json"; // Caminho do arquivo reserve.json
global.logger = logger(); // Logger do winston

// Instanciando a biblioteca express
const api = express();

// Utilizando JSON
api.use(express.json());

// Utilizando cors
api.use(cors());

// Utilizando o Swagger Document
api.use(
  "/reserve.io/v1/doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

// Utilizando as rotas
api.use("/reserve.io/v1", reserveRouter);

api.listen(1010, reserveController.start);
