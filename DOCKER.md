# AVA Chatbot - Docker Setup

## Quick Start

1. **Set environment variables:**
```bash
cp server/.env.example server/.env
# Add your GEMINI_API_KEY to server/.env
```

2. **Start all services:**
```bash
docker compose up
```

3. **Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:6001

## Development Commands

```bash
# Start services
docker compose up

# Start in detached mode
docker compose up -d

# Stop services
docker compose down

# Rebuild containers
docker compose up --build

# View logs
docker compose logs -f

# View specific service logs
docker compose logs -f server
docker compose logs -f client

# Restart a service
docker compose restart server
```

## Services

- **server**: Node.js + Express + TypeScript (Port 6001)
- **client**: React + Vite + TypeScript (Port 5173)

## Hot Reload

Both services support hot reload:
- Server: nodemon watches for TypeScript changes
- Client: Vite HMR for instant updates

## Environment Variables

Create `server/.env`:
```env
GEMINI_API_KEY=your_api_key_here
PORT=6001
```
