# 📝 reserve.io

![JavaScript](https://img.shields.io/badge/-JavaScript-21262d?fff&style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/-Node.js-21262d?style=flat-square&logo=node.js&logoColor=509941)
![Express](https://img.shields.io/badge/-Express-21262d?style=flat-square&logo=express)
![Winston](https://img.shields.io/badge/-Winston-21262d?style=flat-square&logo=winston)
![Swagger](https://img.shields.io/badge/-Swagger-21262d?style=flat-square&logo=swagger)
![JSON](https://img.shields.io/badge/-JSON-21262d?style=flat-square&logo=json&logoColor=gray)

## About

reserve.io is an application for equipment reservations, making it possible to insert, read, edit and remove reservations.

## Starting

These instructions will provide a copy of the project running on your local machine.

### Installing

Follow step by step the following ways to obtain the code on your local machine.

1. Start the repository on your local machine using the following command lines.

```bash
mkdir reserve.io
cd reserve.io
git init
git clone git@github.com:JefersonLucas/reserve.io.git
# or
git clone https://github.com/JefersonLucas/reserve.io.git
```

The files that are in the remote repository are now cloned into the local repository.

2. Install the required `server/` dependencies:

```bash
cd server/

npm install
# or
yarn install
```

3. Start the server on the port [localhost:1010](http://localhost:1010/reserve.io/reservas/)

```bash
npm server
# or
yarn server
```

## Contents

## Application source code

Everything that is included in the application.

```txt
reserve.io/
├── client/
├── server/
│   ├── api/
│   ├── docs/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── pipes/
│   │   └── routes/
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE.md
└── README.md
```

## server source code

What is included in `server/`.

```txt
server/
├── api/
│   └── reserve.json
├── docs/
│   ├── doc.js
│   ├── swagger.json
│   └── swagger.yaml
├── src/
│   ├── config/
│   │   └── loggerConfig.js
│   ├── controllers/
│   │   ├── reserveController.js
│   │   └── routerController.js
│   ├── middlewares/
│   │   └── reserveMiddleware.js
│   ├── pipes/
│   │   └── reservePipe.js
│   └── routes/
│       └── reserveRouter.js
├── index.js
├── nodemon.json
├── package.json
└── yarn.lock
```

## Built with

The reserve.io app has been carefully developed with the following technologies:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - HyperText Markup Language.
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Style language.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/javascript) - Scripting language.
- [Node.js](https://nodejs.org/en/) - Javascript environment.
- [NPM](https://www.npmjs.com/) - Node package manager.
- [Express](https://expressjs.com/) - Framework for Node.js web application.
- [Winston](https://www.npmjs.com/package/winston) - Simple record library.
- [Swagger](https://swagger.io/) - API documentation.
- [UUID](https://www.npmjs.com/package/uuid) - Universal unique identifier.
- [JSON](https://www.json.org/) - Lightweight data exchange format.
- [Insomnia](https://insomnia.rest/) - API Client.
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor.

## Contributing

Read the [CONTRIBUTING.md](https://github.com/JefersonLucas/reserve.io/blob/master/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## Authors

- [@JefersonLucas](https://github.com/JefersonLucas) - _Creator_.

See also the complete list of [contributors](https://github.com/JefersonLucas/reserve.io/contributors) who participated in this project.

## License

This project is licensed under the MIT license - see the file [LICENSE.md](https://github.com/JefersonLucas/reserve.io/blob/master/LICENSE.md) for details.
