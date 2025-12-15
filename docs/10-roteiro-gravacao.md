# DevOps Lab – Roteiro de Gravação (Loom)

## Objetivo deste Documento

Este documento define o **roteiro oficial de gravação em vídeo (Loom)** do projeto **DevOps Lab**, com foco em apresentar o projeto de forma **profissional, clara e técnica**, simulando uma explicação real para recrutadores ou avaliadores técnicos.

O roteiro foi estruturado para:

* Demonstrar domínio técnico
* Mostrar raciocínio DevOps
* Evidenciar boas práticas
* Apresentar erros reais e soluções

---

## Estrutura Geral dos Vídeos

A apresentação está dividida em **5 vídeos curtos**, permitindo melhor organização e fácil consumo do conteúdo.

Tempo total estimado: **35 a 45 minutos**.

---

## Vídeo 1 – Visão Geral do Projeto e Ambiente (3–5 min)

### Objetivo

Apresentar o contexto do projeto, o ambiente utilizado e a organização geral.

### Roteiro

1. Apresentação rápida

   * Nome
   * Contexto do projeto (projeto pessoal DevOps)

2. Mostrar o sistema operacional

   * Windows
   * Terminal com WSL2 (Ubuntu)

3. Explicar rapidamente por que WSL2 foi escolhido

4. Abrir a pasta raiz `devops-lab`

5. Mostrar a estrutura geral do projeto:

   * `frontend/`
   * `backend/`
   * `infra/`
   * `docs/`

6. Explicar o objetivo do projeto:

   * Dashboard DevOps (frontend)
   * API de serviços (backend)
   * Docker, Docker Compose e Docker Swarm

---

## Vídeo 2 – Frontend e Visualização em Tempo Real (5–8 min)

### Objetivo

Demonstrar o funcionamento do frontend e a interface do dashboard.

### Roteiro

1. Abrir o `index.html`

2. Mostrar o layout do dashboard:

   * Header
   * Seção hero
   * Cards de serviços
   * Logs

3. Explicar o papel do frontend no projeto

4. Mostrar o arquivo `app.js`

   * Explicar brevemente o `fetch` para a API

5. Atualizar a página e mostrar a renderização dinâmica dos dados

---

## Vídeo 3 – Backend e Integração Frontend ↔ Backend (8–10 min)

### Objetivo

Explicar a API, suas rotas e como o frontend consome os dados.

### Roteiro

1. Abrir a pasta `backend/`

2. Mostrar o arquivo `src/index.js`

3. Explicar as rotas principais:

   * `/health`
   * `/api/services`

4. Testar rotas via navegador ou `curl`

5. Mostrar a chamada do frontend consumindo a API

6. Atualizar dados e demonstrar a atualização na interface

---

## Vídeo 4 – Dockerização e Docker Compose (8–10 min)

### Objetivo

Demonstrar a containerização e a orquestração local dos serviços.

### Roteiro

1. Mostrar os Dockerfiles do backend e frontend

2. Explicar rapidamente imagem vs container

3. Executar comandos:

```bash
docker build
docker run
docker ps
```

4. Mostrar o arquivo `docker-compose.yml`

5. Subir o ambiente completo:

```bash
docker compose up -d
```

6. Mostrar containers rodando e aplicação acessível

---

## Vídeo 5 – Docker Swarm e Escalabilidade (10–12 min)

### Objetivo

Demonstrar orquestração distribuída e escalabilidade.

### Roteiro

1. Explicar brevemente o que é Docker Swarm
2. Mostrar o comando de inicialização:

```bash
docker swarm init
```

3. Mostrar o arquivo `stack.yml`

4. Executar deploy:

```bash
docker stack deploy -c stack.yml devops-lab
```

5. Listar serviços:

```bash
docker service ls
```

6. Escalar o backend:

```bash
docker service scale devops-lab_backend=3
```

7. Mostrar aplicação funcionando após escala

---

## Mensagem Final

Encerrar a apresentação reforçando:

* O que foi aprendido
* Como o projeto simula um ambiente real
* Quais práticas DevOps foram aplicadas

---

**Este roteiro serve como guia oficial de apresentação do projeto DevOps Lab.**
