# --------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./
RUN npm ci || npm install

# Copy the rest of the source code
COPY . .

# Build Vite app(uses .env automatically if present during build)
RUN npm run build

# ---------- Run Stage ---------
FROM nginx:1.27-alpine

# Copy custom nginx config (we'll create this in Step 4)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose container port
EXPOSE 80

#Start nginx
CMD ["nginx", "-g", "daemon off;"]