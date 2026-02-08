# Development Dockerfile for Server
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 6001

# Start with nodemon for hot reload
CMD ["npm", "run", "dev"]
