/** `reservePipe.js`:
 * esse arquivo faz a leitura e escrita do arquivo JSON onde se encontra a API.
 */

// Importando a biblioteca FileSystem
import { promises as fs } from "fs";

// Desestruturando
const { readFile, writeFile } = fs;

/** `readFileReserve`:
 * essa função faz a leitura do arquivo JSON onde se encontra a API.
 */
const readFileReserve = async () => {
  try {
    // Ler o arquivo reserve.json
    const data = await readFile(global.PATH_API);
    const json = await JSON.parse(data);
    return json;
    // Enviando as reservas para o usuário
  } catch (error) {
    console.log(error);
  }
};

/** `writeFileReserve`:
 * essa função faz a escrita do arquivo JSON onde se encontra a API.
 */
const writeFileReserve = async (data) => {
  try {
    // Escrevendo no arquivo `reserve.json` as novas reservas
    await writeFile(global.PATH_API, JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
};

export default { readFileReserve, writeFileReserve };
