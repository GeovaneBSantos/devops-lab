# DevOps Lab – Dockerização do Backend

## Objetivo deste Documento

Este documento descreve o processo de **dockerização do backend Node.js**, explicando o Dockerfile, as decisões técnicas adotadas, os comandos utilizados e os problemas reais encontrados durante a execução do serviço em container.


## Por que Dockerizar o Backend?

A dockerização do backend permite:

* Padronização do ambiente de execução
* Isolamento da aplicação
* Facilidade de deploy
* Escalabilidade futura com Docker Swarm
* Execução consistente entre ambientes (dev/prod)


## Arquivos Relacionados

backend/
├── src/
│   └── index.js
├── package.json
├── package-lock.json
├── Dockerfile
└── .dockerignore


## Dockerfile do Backend

# Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]


# Explicação do Dockerfile (linha a linha)

* `FROM node:20-alpine`
  Imagem base leve com Node.js 20.

* `WORKDIR /app`
  Define o diretório de trabalho dentro do container.

* `COPY package*.json ./`
  Copia arquivos de dependências para aproveitar cache de build.

* `RUN npm install`
  Instala dependências do projeto.

* `COPY . .`
  Copia o restante do código-fonte.

* `EXPOSE 3001`
  Documenta a porta usada pela aplicação.

* `CMD ["npm", "start"]`
  Comando de inicialização do container.

---

## Build da Imagem

docker build -t devops-lab-backend .


## Execução do Container

docker run -d -p 3001:3001 --name backend devops-lab-backend


## 🧪 Testes do Backend em Container

# Teste de healthcheck

curl http://localhost:3001/health


# Teste de serviços

curl http://localhost:3001/api/services


## Problemas Encontrados e Soluções

# Nodemon não executava

**Sintoma:** erro de permissão ao executar `nodemon`.

**Solução:** utilizar `npm start` no container ao invés de `nodemon`, mantendo nodemon apenas para desenvolvimento local.


# Node incorreto no WSL

**Sintoma:** Node do Windows sendo utilizado.

**Solução:** documentada em `02-ambiente-wsl.md`, com instalação do Node nativo no WSL.


## Boas Práticas Aplicadas

* Uso de imagem Alpine
* Separação de dependências
* Evitar ferramentas de desenvolvimento em produção
* Containers stateless
