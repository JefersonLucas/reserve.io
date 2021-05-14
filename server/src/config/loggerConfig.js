/** `loggerConfig.js`:
 * esse arquivo faz a configuração dos logs com o winston.
 */

// Importanto bibliotecas
import winston from "winston";

// Desestruturando os formatos de winston
const { combine, timestamp, label, printf } = winston.format;
// Criando uma fomato de log
const reserveLogFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

// Criando e exportando o logger
export default function logger() {
  return winston.createLogger({
    level: "silly",
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "./src/logs/reserve.log" }), // Caminho e nome do log
    ],
    format: combine(
      label({ label: "reserve.io" }),
      timestamp(),
      reserveLogFormat,
    ),
  });
}
