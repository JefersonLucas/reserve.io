/** `reserveMiddleware.js`
 * Esse arquivo serve para tratar das regras de negócio da API.
 */

// Importando a versão 4 da biblioteca UUID
import { v4 as uuid } from "uuid";

/** `createController`:
 * enviado pelo método `POST`, essa função cria um novo documento.
 */
const createController = (data, reserva) => {
  // Cria uma novo objeto `reserva`
  reserva = {
    id: uuid(), // passando um id com UUID
    ...reserva, // Todo o resto da reserva
  };
  // Adicionando a nova reserva dentro do Array `reservas`
  data.reservas.push(reserva);
  return data;
};

/** `deleteController`:
 * enviado pelo método `DELETE`, essa função efetua um filtro para remover um documento.
 */
const deleteController = (data, id) => {
  // Filtro
  return data.reservas.filter((reserva) => reserva.id !== id);
};

/** `updateController`:
 * enviado pelo método `PUT`, essa função atualiza um documento.
 */
const updateController = (data, reserva) => {
  // Buscando o `index` pelo o `id` passado por parâmetro do corpo da requisição
  const index = data.reservas.findIndex((reserve) => reserve.id === reserva.id);
  // Passando o `index` da reserva
  data.reservas[index] = reserva;
  return data;
};

/** `getByIdController`:
 * enviado pelo método `GET`, essa função busca por `id` um documento.
 */
const getByIdController = (data, id) => {
  // Buscando o respectivo `id`
  return data.reservas.find((reserva) => reserva.id === id);
};

export default {
  createController,
  deleteController,
  updateController,
  getByIdController,
};
