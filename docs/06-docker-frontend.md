# DevOps Lab – Dockerização do Frontend (Nginx)

## Objetivo deste Documento

Este documento descreve o processo de **dockerização do frontend** do projeto **DevOps Lab**, utilizando **Nginx** como servidor web e **proxy reverso** para comunicação com o backend.

São apresentados o Dockerfile, o arquivo de configuração do Nginx, decisões técnicas, comandos utilizados e problemas reais encontrados durante a implementação.


## Por que Dockerizar o Frontend?

A dockerização do frontend permite:

* Padronizar o ambiente de execução
* Servir arquivos estáticos de forma eficiente
* Simular um ambiente real de produção
* Centralizar o proxy reverso
* Facilitar orquestração futura com Docker Compose e Swarm


## Arquivos Relacionados

frontend/
├── public/
│   ├── index.html
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
├── nginx.conf
├── Dockerfile
└── .dockerignore


## Dockerfile do Frontend

FROM nginx:latest

# Remover configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuração customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos estáticos
COPY public /usr/share/nginx/html

EXPOSE 8080

## Explicação do Dockerfile

* `FROM nginx:latest`
  Utiliza a imagem oficial do Nginx.

* `RUN rm /etc/nginx/conf.d/default.conf`
  Remove o site padrão do Nginx.

* `COPY nginx.conf ...`
  Aplica configuração customizada com proxy reverso.

* `COPY public ...`
  Copia os arquivos estáticos do frontend.

* `EXPOSE 8080`
  Documenta a porta de exposição do serviço.

---

## Configuração do Nginx (`nginx.conf`)

server {
    listen 8080;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://host.docker.internal:3001/api/;
    }

    location /health {
        proxy_pass http://host.docker.internal:3001/health;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}

## Proxy Reverso

O Nginx atua como **proxy reverso**, encaminhando:

* `/api/*` → backend
* `/health` → backend

Essa abordagem:

* Evita problemas de CORS
* Centraliza o ponto de entrada
* Simula ambientes reais de produção


## Build da Imagem

docker build -t devops-lab-frontend \
  -f ../infra/docker/frontend/Dockerfile \
  .


## Execução do Container


docker run -d -p 8080:8080 --name frontend devops-lab-frontend


## Testes do Frontend em Container

* [http://localhost:8080](http://localhost:8080)
* Teste do carregamento do dashboard
* Teste de comunicação com o backend


## Problemas Encontrados e Soluções

1️⃣ Arquivo `nginx.conf` não encontrado

**Sintoma:** erro no build informando que `nginx.conf` não foi encontrado.

**Causa:** arquivo estava fora do contexto de build.

**Solução:** copiar `nginx.conf` para o diretório correto ou ajustar o contexto de build.


2️⃣ Backend não resolvido no proxy

**Sintoma:** erro `host not found in upstream "backend"`.

**Causa:** containers não estavam na mesma rede.

**Solução:** comunicação via `host.docker.internal` no modo standalone.


3️⃣ Cache do navegador

**Sintoma:** alterações não refletiam no browser.

**Solução:** limpar cache ou usar navegação anônima.


## Boas Práticas Aplicadas

* Uso de Nginx como servidor estático
* Proxy reverso centralizado
* Containers imutáveis
* Separação clara de responsabilidades
