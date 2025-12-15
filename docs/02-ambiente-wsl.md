# DevOps Lab – Configuração do Ambiente (WSL2 + Docker)


## Objetivo deste Documento

- Este documento descreve todo o processo de preparação do ambiente de desenvolvimento, desde a configuração do WSL2 até a validação do Docker, registrando decisões técnicas, comandos utilizados e problemas reais encontrados durante o processo.

- O objetivo é garantir reprodutibilidade, clareza e transparência, simulando práticas adotadas em ambientes profissionais DevOps.


## Ambiente Utilizado

. Sistema Operacional Host: Windows 10/11

. Subsistema Linux: WSL2

. Distribuição Linux: Ubuntu 24.04 LTS

. Terminal: Windows Terminal

. Editor de Código: Visual Studio Code


## Por que WSL2?

O WSL2 foi escolhido por permitir:

- Execução de um kernel Linux real

- Integração nativa com Docker Desktop

- Experiência de desenvolvimento próxima à produção

- Uso de ferramentas Linux sem necessidade de máquina virtual tradicional

. Isso torna o ambiente ideal para projetos DevOps em sistemas Windows.


## Instalação e Configuração do WSL2

Verificação do WSL
wsl --list --verbose

Resultado esperado:

NAME      STATE           VERSION
Ubuntu    Running         2


## Instalação do Docker

O Docker foi instalado utilizando Docker Desktop, integrado ao WSL2.

. Verificação do Docker no WSL
docker --version
docker info

. Resultado esperado:

Docker reconhecido dentro do WSL

Driver de storage ativo

Comunicação com o daemon funcionando


## Problema Encontrado: Node.js do Windows sendo usado no WSL

- Sintoma: 

Durante a execução do backend, o comando npm run dev retornava erros relacionados a caminhos UNC e execução via CMD.EXE.

Exemplo de erro:
        CMD.EXE foi iniciado...
        Não há suporte para caminhos UNC
    
- Diagnóstico:

Foi identificado que o Node.js do Windows estava sendo utilizado dentro do WSL:
        which node
        which npm

Resultado incorreto:
        /mnt/c/Program Files/nodejs/node


- Solução Aplicada
    1. Bloquear PATH do Windows no WSL
        sudo nano /etc/wsl.conf
    Conteúdo:
        [interop]
        appendWindowsPath = false
    
    2. Reiniciar o WSL
        wsl --shutdown

    3. Instalar Node.js nativo no WSL
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt install -y nodejs

    4. Validação
        node -v
        npm -v
        which node
        which npm
    
    . Resultado correto:
        /usr/bin/node
        /usr/bin/npm


## Validação Final do Ambiente

- Testes executados:
    docker run hello-world

    node -v
    npm -v

. Todos os testes foram concluídos com sucesso.


## Boas Práticas Adotadas

- Uso exclusivo de ferramentas Linux dentro do WSL

- Separação clara entre ambiente Windows e Linux

- Registro de erros reais e soluções

- Validação constante após cada etapa


