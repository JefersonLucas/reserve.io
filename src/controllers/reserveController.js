// Importando a biblioteca FileSystem
import { promises as fs } from "fs";

// Desestruturando
const { readFile, writeFile } = fs;

// Função para iniciar o servidor
const start = async () => {
  try {
    // Tentando ler o arquivo JSON
    await readFile(global.PATH_API);
    console.log("API started!");
  } catch (error) {
    // JSON inicial
    const reserve = {
      reservas: [],
    };
    // Escrevendo o arquivo JSON
    writeFile(global.PATH_API, JSON.stringify(reserve))
      .then(() => {
        console.log("API started and file created");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default { start };
