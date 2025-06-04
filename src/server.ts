import express from 'express';
import helmet from 'helmet';
import path from 'path';// Importando o módulo path para manipulação de caminhos de arquivos

import router from './routes';// Importando as rotas definidas no arquivo index.ts


const app = express();
const port = 3000;

app.use(helmet());

// Middleware para JSON
app.use(express.json());

// Middleware para CORS
app.use(express.urlencoded({ extended: true }));// Permite o envio de dados via formulário (application/x-www-form-urlencoded)

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));//http://localhost:3000/teste.txt

app.use('/', router);// Registrando as rotas definidas no arquivo index.ts sob o prefixo '/'

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



////////////////////////////////////////////////////////////////////

//npm init -y
//npm install express
//npm install helmet
//npm install -D @types/helmet
//npm install -D typescript ts-node-dev @types/node @types/express
//npx tsc --init
/*
tsconfig.json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}

package.json

"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

meu-projeto/
│
├── public/
│   ├── images/
│   │   └── logo.png
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── src/
│   └── index.ts
│
├── package.json
└── tsconfig.json

*/