require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { handleChat } = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', handleChat);

app.listen(PORT, () => {
  console.log(`AVA Chatbot server running on http://localhost:${PORT}`);
});
