# DevOps Lab — Documentação Oficial

## 📌 Apresentação

Este documento é o **índice central e base oficial** da documentação do projeto **DevOps Lab**, desenvolvido como **projeto pessoal de portfólio**, com foco em demonstrar conhecimentos práticos em **DevOps**, **Docker**, **WSL2**, **Nginx**, **Node.js** e **infraestrutura como código**.

O projeto foi construído **passo a passo**, documentando decisões técnicas, erros reais encontrados e soluções aplicadas, simulando fielmente o dia a dia de um ambiente profissional DevOps.

---

## 🎯 Objetivo do Projeto

O objetivo do **DevOps Lab** é demonstrar, de forma prática e estruturada:

* Criação de uma aplicação completa (Frontend + Backend)
* Containerização com Docker
* Uso de Nginx como servidor web e proxy reverso
* Organização de código e infraestrutura
* Preparação do ambiente para Docker Compose e Docker Swarm
* Documentação técnica clara e profissional

Este projeto foi pensado para ser apresentado em **portfólio técnico**, entrevistas e desafios práticos de vagas DevOps.

---

## 🧠 Tecnologias Utilizadas

* **WSL2 (Ubuntu Linux)**
* **Docker**
* **Docker Compose**
* **Docker Swarm**
* **Node.js 20 (Backend API)**
* **Nginx (Frontend + Reverse Proxy)**
* **HTML5 / CSS3 / JavaScript (Frontend)**
* **Git & GitHub**

---

## 🏗️ Arquitetura Geral (Visão Simplificada)

```
[ Navegador ]
      │
      ▼
[ Frontend (Nginx) ]  →  Porta 8080
      │
      ▼
[ Backend (Node.js) ] →  Porta 3001
      │
      ▼
[ Serviços simulados / APIs ]
```

A comunicação entre serviços é feita via **rede Docker**, utilizando DNS interno (nomes de serviços), seguindo boas práticas de ambientes modernos.

---

## 📂 Estrutura do Projeto

```
devops-lab/
├── backend/        # API Node.js
├── frontend/       # Frontend HTML/CSS/JS
├── infra/          # Arquivos de infraestrutura Docker
│   └── docker/
├── docs/           # Documentação completa do projeto
└── README.md
```

---

## 📘 Estrutura da Documentação (/docs)

A documentação do projeto está organizada em arquivos independentes, facilitando leitura, manutenção e apresentação:

1. **01-visao-geral.md** – Visão geral do projeto e arquitetura
2. **02-ambiente-wsl.md** – Configuração do ambiente (WSL2 + Docker)
3. **03-backend.md** – Estrutura e funcionamento do backend
4. **04-frontend.md** – Estrutura e funcionamento do frontend
5. **05-docker-backend.md** – Dockerização do backend
6. **06-docker-frontend.md** – Dockerização do frontend
7. **07-docker-compose.md** – Orquestração com Docker Compose
8. **08-docker-swarm.md** – Deploy com Docker Swarm
9. **09-troubleshooting.md** – Problemas encontrados e soluções
10. **10-roteiro-gravacao.md** – Roteiro de apresentação (Loom)

Cada documento pode ser lido de forma isolada, mas juntos formam uma visão completa do projeto.

---

## 🧪 Status Atual do Projeto

* [x] Ambiente WSL2 configurado
* [x] Backend Node.js funcional
* [x] Backend dockerizado
* [x] Frontend funcional
* [x] Frontend dockerizado com Nginx
* [ ] Docker Compose
* [ ] Docker Swarm

---

## 📌 Metodologia Utilizada

O desenvolvimento seguiu uma abordagem **incremental e documentada**:

* Construção primeiro em ambiente local
* Testes manuais via navegador e terminal
* Containerização individual dos serviços
* Correção de erros reais (Node path, permissões, cache, DNS Docker)
* Documentação contínua de decisões e soluções

Essa metodologia reflete práticas reais adotadas em times DevOps.

---

## 🎥 Registro em Vídeo (Loom)

Durante o desenvolvimento, telas-chave do projeto foram pensadas para gravação com **Loom**, incluindo:

* Estrutura do projeto
* Containers rodando
* Comunicação entre frontend e backend
* Deploy com Docker Compose e Swarm

O roteiro completo de gravação está documentado em:

📄 **10-roteiro-gravacao.md**

---

## 📍 Próximo Documento

➡️ **01-visao-geral.md** – Visão geral detalhada do projeto e arquitetura

Este documento serve como ponto de partida para toda a documentação do **DevOps Lab**.
