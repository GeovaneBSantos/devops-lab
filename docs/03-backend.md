# DevOps Lab – Backend (Node.js + Express)

## Objetivo deste Documento

Este documento descreve a **estrutura, funcionamento e decisões técnicas** do backend do projeto **DevOps Lab**. O backend é responsável por fornecer dados ao frontend por meio de uma **API REST**, simulando o status e a saúde de serviços comuns em ambientes DevOps.


## Visão Geral do Backend

O backend foi desenvolvido em **Node.js** utilizando o framework **Express**, por ser:

* Leve e amplamente utilizado em APIs REST
* Fácil de containerizar
* Adequado para serviços stateless
* Com grande ecossistema de bibliotecas

O backend atua como uma **camada de dados simulada**, retornando informações de status de serviços (frontend, backend, banco de dados, cache etc.).


## Estrutura de Pastas

backend/
├── src/
│   └── index.js        # Arquivo principal da API
├── package.json
├── package-lock.json
└── .dockerignore


## Dependências Utilizadas

Principais dependências do projeto:

* **express** – Framework web
* **cors** – Permitir requisições cross-origin
* **nodemon** (dev) – Reinício automático em desenvolvimento

Trecho do `package.json`:

"dependencies": {
  "express": "^4.x",
  "cors": "^2.x"
},
"devDependencies": {
  "nodemon": "^3.x"
}



## Inicialização do Servidor

O backend é inicializado no arquivo `src/index.js`.

Principais responsabilidades desse arquivo:

* Criar o servidor Express
* Configurar middlewares
* Definir rotas da API
* Inicializar a escuta na porta definida

Trecho simplificado:

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});


## Rotas Disponíveis

1️⃣ Healthcheck

Endpoint responsável por verificar se a API está ativa.

    GET /health

Exemplo de resposta:

{
  "status": "ok",
  "timestamp": "2025-12-09T23:02:28.806Z",
  "servicesOnline": 3,
  "totalServices": 4
}

**Uso comum:** Monitoramento, readiness e liveness probes.

2️⃣ Lista de Serviços

Endpoint que retorna a lista de serviços simulados.

    GET /api/services

Exemplo de resposta:

{
  "updatedAt": "2025-12-09T23:02:32.597Z",
  "services": [
    {
      "id": 1,
      "name": "Frontend Web",
      "type": "Nginx",
      "status": "up",
      "version": "1.0.0",
      "lastDeploy": "2025-12-01 22:10"
    }
  ]
}


## 🧪 Testes do Backend

# Teste via navegador

* [http://localhost:3001/health](http://localhost:3001/health)
* [http://localhost:3001/api/services](http://localhost:3001/api/services)

# Teste via terminal

    curl http://localhost:3001/health
    curl http://localhost:3001/api/services


## Simulação de Serviços

Os serviços retornados pela API são **mockados** diretamente no código, simulando:

* Serviços ativos
* Serviços inativos
* Versões
* Últimos deploys

Essa abordagem simplifica o projeto e mantém o foco em **infraestrutura e DevOps**, sem dependência de banco de dados real.


## Decisões de Design

* API **stateless**, facilitando escalabilidade
* Dados simulados para reduzir complexidade
* Separação clara entre frontend e backend
* Estrutura simples e fácil de entender

---

## Execução do Backend

# Local (WSL)

    npm install
    npm run dev

# Docker


    docker build -t devops-lab-backend .
    docker run -p 3001:3001 devops-lab-backend

