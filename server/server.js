const express = require('express');
const cors = require('cors');
const { faqs, defaultResponse } = require('./faqData');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const userMessage = message.toLowerCase().trim();
  
  const match = faqs.find(faq => 
    faq.keywords.some(keyword => userMessage.includes(keyword))
  );

  const responseText = match ? match.response() : defaultResponse;
  
  res.json({ 
    message: responseText,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
