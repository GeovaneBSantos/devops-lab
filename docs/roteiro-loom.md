# Roteiro de Gravação – Loom (Projeto DevOps Lab)

## Vídeo 1 – Visão geral do ambiente e do projeto (3–5 min)

1. Apresentação rápida (nome, contexto da proposta de trabalho).
2. Mostrar o **Windows** e a integração com **WSL2** (terminal Ubuntu aberto).
3. Explicar a pasta raiz `devops-lab`.
4. Mostrar a estrutura de pastas inicial no VS Code.
5. Explicar brevemente o objetivo do projeto:
   - Frontend (dashboard DevOps)
   - Backend (API)
   - Docker + Swarm

## Vídeo 2 – Frontend básico e live reload (5–8 min)

1. Mostrar o arquivo `index.html` sendo aberto com a extensão Live Server ou servidor simples.
2. Navegar pelo layout:
   - Header com título do projeto
   - Cards de serviços DevOps (frontend, backend, banco, etc.)
3. Explicar que os dados ainda são mockados (fixos em JavaScript).
4. Mostrar como a página atualiza automaticamente quando o código é alterado.

## Vídeo 3 – Backend e integração com o frontend (8–10 min)

1. Apresentar o backend em Node.js (arquivos principais).
2. Explicar as rotas criadas (ex: `/api/services`, `/health`).
3. Mostrar a chamada fetch no frontend consumindo a API.
4. Demonstrar a atualização da tela quando a API responde.

## Vídeo 4 – Dockerização (8–10 min)

1. Mostrar os `Dockerfile` do frontend e backend.
2. Explicar brevemente o conceito de imagem e container.
3. Executar `docker build` e `docker run` para cada serviço.
4. Mostrar os containers rodando com `docker ps`.

## Vídeo 5 – Docker Swarm e stack (10–12 min)

1. Explicar de forma simples o que é o Docker Swarm.
2. Mostrar o arquivo `infra/swarm/stack.yml`.
3. Executar:
   - `docker swarm init` (se necessário)
   - `docker stack deploy -c infra/swarm/stack.yml devops-lab`
4. Mostrar os serviços com `docker stack services devops-lab`.
5. Acessar o frontend rodando via Swarm e navegar na aplicação.

## Dicas Gerais de Gravação

- Falar de forma clara e pausada.
- Sempre mostrar o terminal e o código lado a lado quando possível.
- Comentar brevemente o porquê de cada comando importante.
- Se algo der erro, explicar como foi feito o diagnóstico (isso mostra prática real em DevOps).
