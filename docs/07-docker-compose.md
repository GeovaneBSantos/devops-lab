# DevOps Lab – Orquestração com Docker Compose

## Objetivo deste Documento

Este documento descreve a utilização do **Docker Compose** para orquestrar os serviços do projeto **DevOps Lab**, permitindo subir **frontend e backend juntos**, com **rede interna**, **DNS por nome de serviço** e **configuração reproduzível** com um único comando.


## Por que Docker Compose?

O Docker Compose é utilizado para:

* Orquestrar múltiplos containers
* Criar redes automaticamente
* Facilitar comunicação entre serviços
* Padronizar ambientes de desenvolvimento
* Servir como base conceitual para Docker Swarm


## Arquivos Relacionados

infra/
└── docker/
    └── docker-compose.yml


## Arquivo docker-compose.yml

version: "3.9"

services:
  backend:
    image: devops-lab-backend
    container_name: backend
    ports:
      - "3001:3001"
    networks:
      - devops-net

  frontend:
    image: devops-lab-frontend
    container_name: frontend
    ports:
      - "8080:8080"
    depends_on:
      - backend
    networks:
      - devops-net

networks:
  devops-net:
    driver: bridge


## Explicação do docker-compose.yml

# Versão

* `version: "3.9"`
  Compatível com Docker Compose e Docker Swarm.


# Serviço: backend

* Usa a imagem `devops-lab-backend`
* Expõe a porta `3001`
* Conectado à rede `devops-net`


# Serviço: frontend

* Usa a imagem `devops-lab-frontend`
* Expõe a porta `8080`
* Depende do backend
* Conectado à mesma rede do backend


# Rede

* `devops-net` é uma rede bridge criada automaticamente
* Permite comunicação entre containers pelo nome do serviço

Exemplo:

    frontend → http://backend:3001


## Ajuste no Nginx para Docker Compose

No modo Docker Compose, o proxy do Nginx deve apontar para o nome do serviço:

    location /api/ {
        proxy_pass http://backend:3001/api/;
    }

Isso substitui o uso de `host.docker.internal`.


## Subindo o Ambiente Completo

    docker compose up -d


## Testes do Ambiente

* [http://localhost:8080](http://localhost:8080)
* [http://localhost:3001/health](http://localhost:3001/health)

### Logs


docker compose logs frontend
docker compose logs backend


## Diferença: Standalone x Compose x Swarm

| Modo       | Características          |
| ---------- | ------------------------ |
| Standalone | Containers isolados      |
| Compose    | Orquestração local       |
| Swarm      | Orquestração distribuída |



## Boas Práticas Aplicadas

* Comunicação via DNS Docker
* Rede isolada
* Serviços desacoplados
* Configuração reproduzível
