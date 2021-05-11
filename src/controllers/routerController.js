// Importando a biblioteca FileSystem
import { promises as fs } from "fs";
// Importando a versão 4 da biblioteca UUID
import { v4 as uuid } from "uuid";

// Desestruturando
const { readFile, writeFile } = fs;

/** `createReserve`:
 * cria uma nova reserva
 */
const createReserve = async (require, response) => {
  // Buscando os dados da requisição
  let reserva = require.body;

  try {
    // Ler o arquivo `reserve.json`
    const data = JSON.parse(await readFile(global.PATH_API));

    // Cria uma nova reserva passando um id com UUID
    reserva = {
      id: uuid(),
      ...reserva,
    };
    // Adicionando a nova reserva dentro do Array reservas
    data.reservas.push(reserva);
    // Escrevendo no arquivo `reserve.json` as novas reservas
    await writeFile(global.PATH_API, JSON.stringify(data, null, 2));
    // Enviando a nova reserva para o usuário
    response.send(data);
    response.end();
  } catch (error) {
    response.status(400).send({ error: error.message });
  }
};

/** `readReserve`:
 * ler as reservas
 */
const readReserve = async (_, response) => {
  try {
    // Ler o arquivo reserve.json
    const data = JSON.parse(await readFile(global.PATH_API));
    // Enviando as reservas para o usuário
    response.send(data);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};

/** `deleteReserve`:
 * deleta reservas
 */
const deleteReserve = async (require, response) => {
  // Buscando os dados da requisição
  let id = require.params.id;
  try {
    // Ler o arquivo reserve.json
    const data = JSON.parse(await readFile(global.PATH_API));
    // Filtro
    data.reservas = data.reservas.filter((reserva) => reserva.id !== id);
    // Escrevendo no arquivo `reserve.json` a modificação da remoção da reserva
    await writeFile(global.PATH_API, JSON.stringify(data, null, 2));
    // Finalizando a requisição
    response.end();
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};

/** `updateReserve`:
 * atualiza reservas
 */
const updateReserve = async (require, response) => {
  // Buscando os dados da requisição
  let reserva = require.body;
  try {
    // Ler o arquivo reserve.json
    const data = JSON.parse(await readFile(global.PATH_API));
    // Buscando o index pelo o id passado por parâmetro
    const index = data.reservas.findIndex(
      (reserve) => reserve.id === reserva.id,
    );
    data.reservas[index] = reserva;
    // Escrevendo no arquivo `reserve.json` as modificações na reserva
    await writeFile(global.PATH_API, JSON.stringify(data, null, 2));
    // Enviando as reservas para o usuário
    response.send(data);
    response.end();
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};

export default {
  createReserve,
  readReserve,
  deleteReserve,
  updateReserve,
};
