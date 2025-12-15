# -------------------------------------
# 1. Imagem base
# -------------------------------------
FROM nginx:latest

# -------------------------------------
# 2. Remover configuração default
# -------------------------------------
RUN rm /etc/nginx/conf.d/default.conf

# -------------------------------------
# 3. Copiar configuração customizada
# -------------------------------------
COPY nginx.conf /etc/nginx/conf.d/default.conf

# -------------------------------------
# 4. Copiar arquivos do frontend
# -------------------------------------
COPY public /usr/share/nginx/html

# -------------------------------------
# 5. Expor porta 8080 (frontend)
# -------------------------------------
EXPOSE 8080

# -------------------------------------
# 6. Iniciar o nginx (default entrypoint)
# -------------------------------------
CMD ["nginx", "-g", "daemon off;"]
