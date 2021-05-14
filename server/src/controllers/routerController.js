/** `routerController.js`:
 * esse arquivo faz os controles das rotas.
 */

/** `pipes`:
 * nesse arquivo se encontra a leitura e escrita do arquivo JSON aonde se encrontra a API.
 */
import pipe from "../pipes/reservePipe.js";

/** `middleware`:
 * nesse arquivo se encontra as regras de negócio da API.
 */
import middleware from "../middlewares/reserveMiddleware.js";

// Desestruturações `middleware` e `pipe`
const { readFileReserve, writeFileReserve } = pipe;

const {
  createController,
  deleteController,
  updateController,
  getByIdController,
} = middleware;

/** `createReserve`:
 * cria uma nova reserva.
 */
const createReserve = async (request, response) => {
  // Buscando os dados da reseva na requisição
  let reserva = request.body;

  try {
    // Ler o arquivo `reserve.json`
    const data = await readFileReserve();
    // Recebendo `createController` as regras de negócio da rota
    const newData = createController(data, reserva);
    // Escrevendo no arquivo `reserve.json` as novas reservas
    await writeFileReserve(newData);
    // Enviando a nova reserva criada pelo o usuário
    response.send(newData.reservas).end();
    logger.info(
      `${request.method} ${request.baseUrl} - created: ${JSON.stringify(
        reserva.user_name,
      )} reservation`,
    );
  } catch (error) {
    response.status(400).send({ error: error.message });
    logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  }
};

/** `readReserve`:
 * ler as reservas
 */
const readReserve = async (request, response) => {
  try {
    // Ler o arquivo `reserve.json`
    const data = await readFileReserve();
    // Enviando as reservas para o usuário
    response.send(data).end();
    logger.info(
      `${request.method} ${request.baseUrl} - read: ${data.reservas.length} document(s)`,
    );
  } catch (error) {
    response.status(500).send({ error: error.message });
    logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  }
};

/** `deleteReserve`:
 * deleta reservas
 */
const deleteReserve = async (request, response) => {
  // Buscando o `id` nos parâmetros da requisição
  let id = request.params.id;

  try {
    // Ler o arquivo `reserve.json`
    const data = await readFileReserve();
    // Remoção do arquivo recebido pelo `deleteController`
    data.reservas = deleteController(data, id);
    // Escrevendo no arquivo `reserve.json` a modificação da remoção da reserva
    await writeFileReserve(data);
    // Finalizando a requisição
    response.end();
    logger.info(`${request.method} ${request.baseUrl} - deleted: ${id}`);
  } catch (error) {
    response.status(500).send({ error: error.message });
    logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  }
};

/** `updateReserve`:
 * atualiza reservas
 */
const updateReserve = async (request, response) => {
  // Buscando os dados da reseva na requisição
  let reserva = request.body;

  try {
    // Ler o arquivo `reserve.json`
    const data = await readFileReserve();
    // Recebendo os novos dados atualizado pelo `updateController`
    const newData = updateController(data, reserva);
    // Escrevendo no arquivo `reserve.json` as modificações na reserva
    await writeFileReserve(newData);
    // Enviando as reservas para o usuário
    response.send(newData.reservas).end();
    logger.info(
      `${request.method} ${request.baseUrl} - updated ${newData.length} document`,
    );
  } catch (error) {
    response.status(500).send({ error: error.message });
    logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  }
};

const getByIdReserve = async (request, response) => {
  // Buscando o `id` nos parâmetros da requisição
  let id = request.params.id;

  try {
    // Ler o arquivo reserve.json
    const data = await readFileReserve();
    // Recebendo os dados de `getByIdController`
    const newData = getByIdController(data, id);
    // Enviando as reservas para o usuário
    response.send(newData).end();
    logger.info(`${request.method} ${request.baseUrl} - read: ${id} document`);
  } catch (error) {
    response.status(500).send({ error: error.message });
    logger.error(`${request.method} ${request.baseUrl} - ${error.message}`);
  }
};

export default {
  createReserve,
  readReserve,
  deleteReserve,
  updateReserve,
  getByIdReserve,
};
