ARG NODE_VERSION=20
ARG VITE_API_URL=/api

FROM node:${NODE_VERSION} AS builder
WORKDIR /workspace

# 1. FIX: Copy from app/app-vite/ instead of just app/
COPY app/app-vite/package*.json ./
COPY app/app-vite/ ./

# Build the frontend with the API mounted at /api
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm install --silent
RUN npm run build

FROM node:${NODE_VERSION} AS runner
WORKDIR /app

# 2. FIX: Copy runtime package metadata from the nested folder
COPY app/app-vite/package*.json ./
RUN npm install --silent

# 3. FIX: Copy the API server from the correct nested path
COPY app/app-vite/api ./api
COPY --from=builder /workspace/dist ./api/dist

# Expose a single port for app + API
ENV PORT=3001
EXPOSE 3001

CMD ["node", "api/server.cjs"]