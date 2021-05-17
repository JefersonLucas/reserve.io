export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description:
      "This is a sample reserve.io server. Find out how the application works, making it possible to **create**, **read**, **update** and **delete** reservations.",
    version: "0.2.0",
    title: "reserve.io",
    contact: {
      email: "jeferson.luckas@gmail.com",
    },
    license: {
      name: "MIT",
      url: "https://github.com/JefersonLucas/reserve.io/blob/master/LICENSE.md",
    },
  },
  host: "localhost:1010",
  basePath: "/reserve.io/v1",
  tags: [
    {
      name: "reservas",
      description: "Everything about reservations",
    },
  ],
  schemes: ["http"],
  paths: {
    "/create": {
      post: {
        tags: ["reservas"],
        summary: "Add a new resevation in the database",
        description: "Reserve object that needs to be added to the database",
        operationId: "createReserve",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Create a new reservation by passing a new object",
            required: true,
            schema: {
              $ref: "#/definitions/Reserva",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Reserva_id",
              },
            },
          },
          405: {
            description: "Invalid input",
          },
        },
      },
    },
    "/read": {
      get: {
        tags: ["reservas"],
        summary: "Finds all reservation",
        description: "Multiple reservations displayed",
        operationId: "readReserve",
        produces: ["application/json"],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Reserva_id",
              },
            },
          },
        },
      },
    },
    "/read/{id}": {
      get: {
        tags: ["reservas"],
        summary: "Find reservation by id",
        description: "Search for a reservation by id",
        operationId: "readReserveById",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Select the ID to search in the request parameter",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Reserva_id",
              },
            },
          },
          400: {
            description: "Invalid ID value",
          },
        },
      },
    },
    "/update": {
      put: {
        tags: ["reservas"],
        summary: "Update an existing reservation",
        description: "Updating a reservation including the ID",
        operationId: "updateReserve",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description:
              "Select the reservation object by including its ID in the request body",
            required: true,
            schema: {
              $ref: "#/definitions/Reserva_id",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Reserva_id",
              },
            },
          },
          400: {
            description: "Invalid ID supplied",
          },
          404: {
            description: "Reserve not found",
          },
          405: {
            description: "Validation exception",
          },
        },
      },
    },
    "/delete/{id}": {
      delete: {
        tags: ["reservas"],
        summary: "Delete a reservation",
        description: "Delete a reservation by passing the ID by parameter",
        operationId: "deleteReserve",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Select the ID to delete in the request parameter",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Invalid ID supplied",
          },
          404: {
            description: "Reserve not found",
          },
        },
      },
    },
  },
  definitions: {
    Reserva: {
      type: "object",
      required: [
        "user_name",
        "user_mail",
        "equipment_name",
        "equipment_id",
        "local",
        "status",
        "time_in",
        "time_out",
        "date_in",
        "date_out",
      ],
      properties: {
        user_name: {
          type: "string",
          example: "Jeferson Lucas",
        },
        user_mail: {
          type: "string",
          example: "jefersonlucas@email.com",
        },
        equipment_name: {
          type: "string",
          example: "DataShow S27+",
        },
        equipment_id: {
          type: "string",
          example: "03400",
        },
        local: {
          type: "string",
          example: "Anatomia I",
        },
        status: {
          type: "string",
          description: "reserve status in the database",
          enum: ["waiting", "using", "returned"],
        },
        time_in: {
          type: "string",
          example: "19:00:00",
        },
        time_out: {
          type: "string",
          example: "22:00:00",
        },
        date_in: {
          type: "string",
          example: "2021-05-11",
        },
        date_out: {
          type: "string",
          example: "2021-05-12",
        },
      },
      xml: {
        name: "Reserva",
      },
    },
    Reserva_id: {
      type: "object",
      required: [
        "user_name",
        "user_mail",
        "equipment_name",
        "equipment_id",
        "local",
        "status",
        "time_in",
        "time_out",
        "date_in",
        "date_out",
      ],
      properties: {
        id: {
          type: "string",
          example: "d39bf747-cb05-497e-9f37-c9fb7ef53f88",
        },
        user_name: {
          type: "string",
          example: "Jeferson Lucas",
        },
        user_mail: {
          type: "string",
          example: "jefersonlucas@email.com",
        },
        equipment_name: {
          type: "string",
          example: "DataShow S27+",
        },
        equipment_id: {
          type: "string",
          example: "03400",
        },
        local: {
          type: "string",
          example: "Anatomia I",
        },
        status: {
          type: "string",
          description: "reserve status in the database",
          enum: ["waiting", "using", "returned"],
        },
        time_in: {
          type: "string",
          example: "19:00:00",
        },
        time_out: {
          type: "string",
          example: "22:00:00",
        },
        date_in: {
          type: "string",
          example: "2021-05-11",
        },
        date_out: {
          type: "string",
          example: "2021-05-12",
        },
      },
      xml: {
        name: "ReservaId",
      },
    },
  },
  externalDocs: {
    description: "Contributing",
    url: "https://github.com/JefersonLucas/reserve.io/blob/master/CONTRIBUTING.md",
  },
};
