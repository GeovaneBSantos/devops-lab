# DevOps Lab – Frontend (HTML, CSS, JavaScript + Nginx)

## Objetivo deste Documento

Este documento descreve a **estrutura, funcionamento e decisões técnicas** do frontend do projeto **DevOps Lab**. O frontend é responsável por exibir um **dashboard DevOps** que consome dados do backend via API REST, sendo servido por **Nginx** em ambiente containerizado.


## Visão Geral do Frontend

O frontend foi desenvolvido utilizando **HTML, CSS e JavaScript puro**, com os seguintes objetivos:

* Simplicidade e clareza
* Fácil entendimento do fluxo de dados
* Independência de frameworks
* Foco no funcionamento da infraestrutura e não em bibliotecas

O frontend atua como uma **camada de visualização**, exibindo informações de status e saúde dos serviços monitorados.


## Estrutura de Pastas

frontend/
├── public/
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── app.js
│       └── img/
│           └── devops-hero.jpg
├── nginx.conf
└── Dockerfile

Essa estrutura segue boas práticas de separação entre **conteúdo**, **estilo** e **lógica**.


## index.html

O arquivo `index.html` define a estrutura base do dashboard.

Principais seções:

* Header (barra superior com status do ambiente)
* Seção hero (título, descrição e imagem)
* Grid de serviços
* Seção de logs
* Footer

Trecho relevante:

<script src="./assets/js/app.js"></script>

Esse script é responsável por buscar dados do backend e renderizar dinamicamente os cards de serviços.


## style.css

O arquivo `style.css` define o layout visual do dashboard.

Características:

* Layout responsivo
* Paleta de cores com tema DevOps
* Cards de serviços com destaque de status
* Separação visual clara entre seções

O CSS foi mantido simples, priorizando **legibilidade e organização**.


## app.js

O arquivo `app.js` é responsável por:

* Buscar dados do backend via `fetch`
* Processar o JSON retornado
* Criar dinamicamente os cards de serviços
* Atualizar a interface ao clicar no botão "Atualizar"

Fluxo simplificado:

fetch('/api/services')
  .then(response => response.json())
  .then(data => renderServices(data.services));

Esse fluxo demonstra a comunicação frontend ↔ backend de forma clara e didática.


## Comunicação com o Backend

A comunicação ocorre através de **proxy reverso configurado no Nginx**.

Exemplo:

Frontend → /api/services → Nginx → Backend (Node.js)

Isso evita problemas de CORS e simula um ambiente real de produção.


## Testes do Frontend

# Teste via navegador

    * [http://localhost:8080](http://localhost:8080)

# Validações realizadas:

* Carregamento do HTML
* Aplicação correta do CSS
* Execução do JavaScript
* Requisições para o backend
* Renderização dinâmica dos dados


## Problemas Encontrados e Soluções

1️⃣ Cache do navegador

**Sintoma:** Página não atualizava após rebuild do container.

**Solução:** Recarregar a página ignorando cache (Ctrl + Shift + R) ou usar janela anônima.

---

2️⃣ Arquivo JavaScript ausente

**Sintoma:** Dashboard não renderizava dados.

**Causa:** Arquivo `app.js` não estava presente no container.

**Solução:** Criar corretamente o arquivo em `public/assets/js/app.js` e realizar rebuild sem cache.


## Decisões de Design

* Uso de JS puro para clareza
* Proxy reverso no Nginx
* Estrutura simples e escalável
* Separação clara de responsabilidades

