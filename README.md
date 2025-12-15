# DevOps Lab

> 🇧🇷 **Projeto pessoal de portfólio DevOps** • 🇺🇸 **Personal DevOps portfolio project**

---

## 🇧🇷 Visão Geral

O **DevOps Lab** é um projeto prático criado para demonstrar conhecimentos reais em **DevOps**, simulando um ambiente profissional com **frontend**, **backend** e **infraestrutura containerizada**.

O projeto cobre desde a configuração do ambiente com **WSL2**, passando por **Docker**, **Docker Compose** e **Docker Swarm**, até documentação técnica completa e roteiro de apresentação em vídeo.

Este repositório é **público** e foi estruturado para facilitar a avaliação técnica por recrutadores.

---

## 🇺🇸 Overview

**DevOps Lab** is a hands-on project created to demonstrate real-world **DevOps skills**, simulating a professional environment with **frontend**, **backend**, and **containerized infrastructure**.

The project covers the full lifecycle: **WSL2 setup**, **Docker**, **Docker Compose**, **Docker Swarm**, complete technical documentation, and a video presentation script.

This is a **public repository**, designed for technical evaluation by recruiters.

---

## 🏗️ Arquitetura | Architecture

```
[ Browser ]
     │
     ▼
[ Frontend (Nginx) ]  → 8080
     │
     ▼
[ Backend (Node.js) ] → 3001
```

* Frontend servido via **Nginx**
* Backend em **Node.js + Express**
* Comunicação via **proxy reverso**
* Orquestração com **Docker Compose** e **Docker Swarm**

---

## 🧠 Tecnologias | Technologies

* **WSL2 (Ubuntu 24.04)**
* **Docker**
* **Docker Compose**
* **Docker Swarm**
* **Node.js 20 + Express**
* **Nginx**
* **HTML, CSS, JavaScript**
* **Git & GitHub**

---

## 📂 Estrutura do Projeto | Project Structure

```
devops-lab/
├── backend/        # API Node.js
├── frontend/       # Frontend Dashboard
├── infra/          # Docker, Compose e Swarm
├── docs/           # Documentação técnica completa
└── README.md
```

---

## 🚀 Como Executar | How to Run

### 🔹 Docker (Standalone)

```bash
# Backend
docker build -t devops-lab-backend backend/
docker run -d -p 3001:3001 devops-lab-backend

# Frontend
docker build -t devops-lab-frontend frontend/
docker run -d -p 8080:8080 devops-lab-frontend
```

Acesse:

* Frontend: [http://localhost:8080](http://localhost:8080)
* Backend: [http://localhost:3001/health](http://localhost:3001/health)

---

### 🔹 Docker Compose

```bash
docker compose up -d
```

---

### 🔹 Docker Swarm

```bash
docker swarm init
docker stack deploy -c stack.yml devops-lab
```

---

## 📘 Documentação Técnica

Toda a documentação detalhada está disponível na pasta [`/docs`](./docs):

* Ambiente WSL2
* Backend
* Frontend
* Docker
* Docker Compose
* Docker Swarm
* Troubleshooting
* Roteiro de apresentação (Loom)

---

## 🎥 Vídeo de Apresentação (Loom)

📌 *Link do vídeo Loom será adicionado aqui após gravação.*

---

## 🧪 Status do Projeto

* [x] Ambiente configurado
* [x] Backend funcional
* [x] Frontend funcional
* [x] Dockerização
* [x] Docker Compose
* [x] Docker Swarm
* [x] Documentação completa

---

## 👤 Autor

**Geovane Santos**
DevOps em formação • Full Stack Background

📧 Contatos: *(geovanes.dev@gmail.com)*
                *(75 98248 - 7110)*
                 *(geovane_dev_)*

---

## 📌 Observação Final

Este projeto foi desenvolvido com foco em **aprendizado prático**, **boas práticas DevOps** e **clareza técnica**, simulando desafios reais encontrados no dia a dia profissional.
