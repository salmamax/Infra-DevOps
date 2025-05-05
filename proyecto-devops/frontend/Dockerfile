# Fase de construcción (builder)
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production  # Build de producción

# Fase final (servir con Nginx)
FROM nginx:1.25-alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY docker/nginx/angular.conf /etc/nginx/conf.d/default.conf
