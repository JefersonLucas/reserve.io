# reserve.io

![reserve.io](https://img.shields.io/badge/JefersonLucas-reserve.io-brightgreen?style=flat)
![Created Badge](https://badges.pufler.dev/created/JefersonLucas/reserve.io?style=flat)
![Updated Badge](https://badges.pufler.dev/updated/JefersonLucas/reserve.io?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/JefersonLucas/reserve.io?style=flat)
![MIT](https://img.shields.io/github/license/JefersonLucas/reserve.io?style=flat)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/JefersonLucas/reserve.io?style=flat)

![HTML](https://img.shields.io/badge/-HTML-21262d?fff&style=flat-square&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-21262d?fff&style=flat-square&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/-JavaScript-21262d?fff&style=flat-square&logo=javascript)
![React](https://img.shields.io/badge/-React-21262d?fff&style=flat-square&logo=react)
![Yarn](https://img.shields.io/badge/-Yarn-21262d?fff&style=flat-square&logo=yarn)
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-21262d?fff&style=flat-square&logo=visual-studio-code&logoColor=007ACC)
![Node.js](https://img.shields.io/badge/-Node.js-21262d?style=flat-square&logo=node.js&logoColor=509941)
![Express](https://img.shields.io/badge/-Express-21262d?style=flat-square&logo=express)
![JSON](https://img.shields.io/badge/-JSON-21262d?style=flat-square&logo=json&logoColor=gray)
![Swagger](https://img.shields.io/badge/-Swagger-21262d?style=flat-square&logo=swagger)

## About

<img alt="Logo" align="right" src="./logo.svg" width="20%" />

reserve.io is an application for equipment reservations, making it possible to **create**, **read**, **update** and **delete** reservations.

The purpose of this application is to help maintain a workflow for reservations and evolve an old personal project that had the same goal.

This new project has a very ambitious goal of trying to use modern technologies, in addition to applying techniques and evolving personally and professionally.

Throughout this documentation I will list the technologies, architectures, structure and workflows used in this project.

I am trying my best to be the most declarative in the codes kept here, if you find any syntax error or unwanted operation, forgive me.

Att,

Jeferson Lucas

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

### Starting server

1. Install the required `server/` dependencies:

```bash
cd server/

npm install
# or
yarn install
```

2. Start the server on the port [localhost:1010/reserve.io/v1/](http://localhost:1010/reserve.io/v1/)

```bash
npm server
# or
yarn server
```

3. Go to [http://localhost:1010/reserve.io/v1/doc/](http://localhost:1010/reserve.io/v1/doc) to view the API documentation.

### Starting client

1. Install the required `client/` dependencies:

```bash
cd client/

npm install
# or
yarn install
```

2. Start the client on the port [localhost:3000](http://localhost:3000)

```bash
npm start
# or
yarn start
```

## Contents

### Application source code

What is included in the application.

```txt
reserve.io/
├── client/
│   ├── public/
│   └── src/
├── server/
│   ├── api/
│   ├── docs/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middlewares/
│       ├── pipes/
│       └── routes/
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE.md
├── logo.svg
└── README.md
```

### Server source code

What is included in `server/`, including source code and precompiled.

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

### Client source code

What is included in `client/`, including source code and precompiled.

```txt
client/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo36.png
│   ├── manifest.json
│   ├── robots.txt
│   └── style.css
├── src/
│   ├── App.jsx
│   ├── index.js
│   └── logo.svg
├── package.json
└── yarn.lock
```

## Built with

The reserve.io app has been carefully developed with the following technologies:

- Technologies used on the **server**:

  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/javascript) - Scripting language.
  - [Node.js](https://nodejs.org/en/) - Javascript environment.
  - [NPM](https://www.npmjs.com/) - Node package manager.
  - [Yarn](https://yarnpkg.com/) - Package manager.
  - [Express](https://expressjs.com/) - Framework for Node.js web application.
  - [Winston](https://www.npmjs.com/package/winston) - Simple record library.
  - [Swagger](https://swagger.io/) - API documentation.
  - [UUID](https://www.npmjs.com/package/uuid) - Universal unique identifier.
  - [JSON](https://www.json.org/) - Lightweight data exchange format.
  - [Insomnia](https://insomnia.rest/) - API Client.
  - [Visual Studio Code](https://code.visualstudio.com/) - Code editor.

- Technologies used on the **client**:

  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/javascript) - Scripting language.
  - [Node.js](https://nodejs.org/en/) - Javascript environment.
  - [Yarn](https://yarnpkg.com/) - Package manager.
  - [Visual Studio Code](https://code.visualstudio.com/) - Code editor.

## Contributing

Read the [CONTRIBUTING.md](https://github.com/JefersonLucas/reserve.io/blob/master/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## Authors

- [@JefersonLucas](https://github.com/JefersonLucas) - _Creator_.

See also the complete list of [contributors](https://github.com/JefersonLucas/reserve.io/contributors) who participated in this project.

## License

This project is licensed under the MIT license - see the file [LICENSE.md](https://github.com/JefersonLucas/reserve.io/blob/master/LICENSE.md) for details.
