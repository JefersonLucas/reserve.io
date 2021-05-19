/** `reserveMiddleware.js`
 * Esse arquivo serve para tratar das regras de negócio da API.
 */

// Importando a versão 4 da biblioteca UUID
import { v4 as uuid } from "uuid";

/** `createController`:
 * enviado pelo método `POST`, essa função cria um novo documento.
 */
const createController = (data, reserva) => {
  // Desestruturando a reserva
  const {
    user_name,
    user_mail,
    equipment_name,
    equipment_id,
    local,
    status,
    time_in,
    time_out,
    date_in,
    date_out,
  } = reserva;

  // Cria uma novo objeto `reserva`
  reserva = {
    // passando um id com UUID
    id: uuid(),
    // Todo o resto da reserva
    user_name: user_name,
    user_mail: user_mail,
    equipment_name: equipment_name,
    equipment_id: equipment_id,
    local: local,
    status: status,
    time_in: time_in,
    time_out: time_out,
    date_in: date_in,
    date_out: date_out,
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

/** `readByIdController`:
 * enviado pelo método `GET`, essa função busca por `id` um documento.
 */
const readByIdController = (data, id) => {
  // Buscando o respectivo `id`
  return data.reservas.find((reserva) => reserva.id === id);
};

export default {
  createController,
  readByIdController,
  updateController,
  deleteController,
};
