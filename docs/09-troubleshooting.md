# DevOps Lab – Problemas Encontrados e Soluções

## 📌 Objetivo deste Documento

Este documento descreve os principais **problemas técnicos reais** encontrados durante o desenvolvimento do projeto **DevOps Lab**, suas **causas**, as **soluções aplicadas** e os **aprendizados obtidos**.

O objetivo é demonstrar capacidade de **diagnóstico, investigação e resolução de problemas**, habilidades essenciais em ambientes DevOps.

---

## 1️⃣ Node.js do Windows sendo usado no WSL

### Sintoma
Durante a execução do backend no WSL, o comando `npm run dev` retornava erros como:

CMD.EXE foi iniciado...
Não há suporte para caminhos UNC


### Causa
O **Node.js instalado no Windows** estava sendo utilizado dentro do WSL, causando conflitos de path e permissões.

### Solução
1. Bloquear o PATH do Windows no WSL:

    sudo nano /etc/wsl.conf
        [interop]
        appendWindowsPath = false

2. Reiniciar o WSL:

    wsl --shutdown

3. Instalar Node.js nativo no WSL:

    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs

### Aprendizado

    Em ambientes WSL, todas as ferramentas devem ser instaladas nativamente no Linux para evitar conflitos.


## 2️⃣ Erro de permissão ao usar Nodemon

### Sintoma

Erro de permissão ao executar nodemon dentro do container.

### Causa

nodemon é uma ferramenta de desenvolvimento e não é adequada para execução dentro de containers de produção.

### Solução

Utilizar npm start no container

Manter nodemon apenas para desenvolvimento local

### Aprendizado

Containers devem executar apenas o processo necessário, evitando ferramentas de desenvolvimento em produção.


## 3️⃣ Arquivo nginx.conf não encontrado no build

### Sintoma

Erro durante o build do frontend:

    COPY failed: nginx.conf not found

### Causa

O arquivo nginx.conf estava fora do contexto de build do Docker.

### Solução

Mover/copiar o arquivo para o diretório correto:

    cp infra/docker/frontend/nginx.conf frontend/nginx.conf

### Aprendizado

É fundamental entender como o Docker constrói o contexto de build.

## 4️⃣ Proxy reverso não resolvia o backend

### Sintoma

Erro no Nginx:

    host not found in upstream "backend"

### Causa

Tentativa de acessar o backend por nome de serviço fora de uma rede Docker compartilhada.

### Solução

Em modo standalone: usar host.docker.internal

Em Docker Compose / Swarm: usar o nome do serviço

    proxy_pass http://backend:3001/api/;

### Aprendizado

Em ambientes Docker, DNS interno por nome de serviço é a abordagem correta.


## 5️⃣ Cache do navegador impedindo atualização

### Sintoma

Frontend não atualizava após rebuild do container.

### Causa

Cache agressivo do navegador para arquivos estáticos.

### Solução

    Ctrl + Shift + R

    Navegação anônima

    Disable cache no DevTools

### Aprendizado

Cache pode mascarar problemas reais durante deploys frontend.


## 6️⃣ JavaScript ausente no container

### Sintoma

Dashboard abria, mas permanecia em branco.

### Causa

O arquivo app.js não estava presente no container.

### Solução

Garantir estrutura correta:

    public/assets/js/app.js

E rebuild sem cache:

    docker build --no-cache ...

### Aprendizado

Sempre validar arquivos dentro do container, não apenas no host.


## Boas Práticas Reforçadas

- Debug incremental

- Validação dentro do container

- Logs como primeira fonte de diagnóstico

- Separação clara entre dev e prod

- Documentação contínua