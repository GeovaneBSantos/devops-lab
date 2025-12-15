# DevOps Lab – Orquestração com Docker Swarm

## Objetivo deste Documento

Este documento descreve a utilização do **Docker Swarm** para orquestrar os serviços do projeto **DevOps Lab** em um ambiente distribuído, demonstrando conceitos de **cluster**, **serviços**, **rede overlay**, **escalabilidade** e **alta disponibilidade**.


## Por que Docker Swarm?

O Docker Swarm foi escolhido por:

* Integrar-se nativamente ao Docker
* Simplificar a criação de clusters
* Oferecer balanceamento de carga interno
* Facilitar escalabilidade de serviços
* Utilizar conceitos semelhantes a ambientes de produção


## Conceitos Fundamentais

* **Manager Node**: responsável por orquestrar o cluster
* **Worker Node**: executa os containers
* **Service**: abstração de containers
* **Task**: instância de um container
* **Overlay Network**: rede distribuída entre nós


## Inicialização do Swarm

    docker swarm init

Comando para verificar o estado do cluster:

    docker node ls


## Criação da Rede Overlay


    docker network create \
        --driver overlay \
    devops-overlay


## Arquivo stack.yml

version: "3.9"

services:
  backend:
    image: devops-lab-backend
    deploy:
      replicas: 2
      restart_policy:
        condition: on-failure
    networks:
      - devops-overlay

  frontend:
    image: devops-lab-frontend
    ports:
      - "8080:8080"
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
    networks:
      - devops-overlay

networks:
  devops-overlay:
    external: true


## Deploy da Stack

    docker stack deploy -c stack.yml devops-lab


## Verificação dos Serviços

    docker service ls

    docker service ps devops-lab_backend


## Escalando Serviços

    docker service scale devops-lab_backend=3


## Logs e Monitoramento

    docker service logs devops-lab_backend


## Rollback de Serviços

    docker service update --rollback devops-lab_backend


##  Testes do Ambiente Swarm

* Acesso ao frontend: [http://localhost:8080](http://localhost:8080)
* Verificação de múltiplas réplicas do backend


## Boas Práticas Aplicadas

* Serviços stateless
* Uso de redes overlay
* Escalabilidade horizontal
* Separação clara entre serviços
