import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { handleChat } from './routes/chat';
import { initializeVectorDB } from './services/vectorService';

const app = express();
const PORT = process.env.PORT || 6001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', handleChat);

async function startServer() {
  await initializeVectorDB();
  app.listen(PORT, () => {
    console.log(`AVA Chatbot server running on http://localhost:${PORT}`);
  });
}

startServer();
