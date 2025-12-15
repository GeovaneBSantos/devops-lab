# DevOps Lab – Visão Geral do Projeto


## Contexto

O DevOps Lab é um projeto pessoal de portfólio criado para demonstrar, de forma prática e organizada, conhecimentos fundamentais e intermediários em DevOps, simulando um ambiente real de desenvolvimento e infraestrutura.

O projeto foi desenvolvido em ambiente Windows com WSL2 (Ubuntu) e tem como foco principal a containerização de aplicações, a orquestração de serviços e a documentação técnica profissional.


## Objetivo do Projeto

Criar um ambiente prático para demonstrar conhecimentos em:
- WSL2 e integração Windows/Linux
- Docker e Docker Swarm
- Organização de projeto (frontend, backend e infraestrutura)
- Boas práticas de documentação técnica
- Comunicação entre serviços em ambiente conteinerizado

O projeto simula um **portal DevOps**, com uma interface web que exibe:
- Status de serviços (frontend, backend, banco, cache, etc.)
- Informações de saúde dos serviços (healthchecks)
- Estrutura preparada para execução em Docker Compose e Docker Swarm


## Tecnologias Principais

- **Sistema operacional de desenvolvimento:** Windows 10/11 com WSL2 (Ubuntu)
- **Containerização:** Docker
- **Orquestração:** Docker Swarm
- **Frontend:** HTML, CSS, JavaScript puro
- **Backend:** Node.js + Express (API REST)
- **Servidor Web / Proxy Reverso:** Nginx
- **Documentação:** Markdown (/docs)
- **Gravação de telas:** Loom


## Arquitetura do projeto

- Visão lógica simplificada:

[ Navegador ]
      │
      ▼
[ Frontend (Nginx) ]  → Porta 8080
      │
      ▼
[ Backend (Node.js) ] → Porta 3001

- O frontend é servido via Nginx, responsável também por encaminhar requisições da API.

- O backend expõe endpoints REST para fornecimento de dados de status.

- A comunicação entre serviços ocorre via rede Docker, utilizando DNS interno (nomes de   serviços).


## Estrutura de Pastas

devops-lab/
├── docs/ # Documentação do projeto
├── frontend/ # Código do frontend (dashboard DevOps)
├── backend/ # Código do backend (API REST)
├── infra/ # Dockerfiles e configurações de infraestrutura
└── README.md

- Essa separação facilita manutenção, escalabilidade e entendimento do projeto.


## Fluxo de Desenvolvimento

- O projeto foi desenvolvido seguindo o fluxo abaixo:

1. Configuração do ambiente WSL2.
2. Criação do frontend e visualização em tempo real via navegador.
3. Criação do backend (API REST).
4. Integração frontend ↔ backend.
5. Criação dos Dockerfiles (frontend e backend).
6. Testes e correções de erros reais de ambiente.
7. Preparação para Docker Compose.
8. Preparação para Docker Swarm.
9. Registro do processo em documentação e vídeo (Loom).


## Observações Importantes

- O projeto prioriza clareza e didática, sem ocultar problemas reais encontrados durante o desenvolvimento.

- Os erros e soluções fazem parte da documentação, simulando um cenário real de trabalho DevOps.

- Toda a infraestrutura é descrita como código, facilitando reprodutibilidade.
