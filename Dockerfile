# Base stage
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
WORKDIR /app
COPY package.json ./
RUN pnpm install

# Development stage
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

# Build stage
FROM base AS build
COPY . .
RUN pnpm run build

# Production stage
FROM nginx:stable-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 8080;\n  server_name localhost;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
