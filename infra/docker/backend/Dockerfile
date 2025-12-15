# ------------------------------
# 1. Imagem base
# ------------------------------
FROM node:20-slim

# ------------------------------
# 2. Diretório de trabalho
# ------------------------------
WORKDIR /app

# ------------------------------
# 3. Copiar arquivos do backend
# ------------------------------
COPY package*.json ./

# Instalar dependências
RUN npm install --production

# Copiar restante do código
COPY . .

# ------------------------------
# 4. Criar usuário não-root (boa prática DevOps)
# ------------------------------
RUN useradd -m appuser
USER appuser

# ------------------------------
# 5. Expor a porta da API
# ------------------------------
EXPOSE 3001

# ------------------------------
# 6. Iniciar o servidor
# ------------------------------
CMD ["node", "src/index.js"]
