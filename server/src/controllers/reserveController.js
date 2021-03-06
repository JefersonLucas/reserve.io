/** `reserveController.js`
 * Esse arquivo serve para controlar o inicio o servidor da API.
 */

// Importando a biblioteca FileSystem
import { promises as fs } from "fs";

// Desestruturando
const { readFile, writeFile } = fs;

// Função para iniciar o servidor
const start = async () => {
  try {
    // Tentando ler o arquivo JSON
    await readFile(global.PATH_API);
    logger.info("API started!");
  } catch (error) {
    // JSON inicial
    const reserve = {
      reservas: [],
    };
    // Escrevendo o arquivo JSON
    writeFile(global.PATH_API, JSON.stringify(reserve))
      .then(() => {
        logger.info("API started and file created");
      })
      .catch((error) => {
        logger.error(error);
      });
  }
};

export default { start };
