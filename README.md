# FAQ Chatbot

A simple rule-based FAQ chatbot for e-commerce customer support with React frontend and Node.js backend.

## Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS v4
- Axios

### Backend
- Node.js + Express
- Rule-based keyword matching
- CORS enabled

## Features

✅ Real-time chat interface  
✅ Keyword-based intent matching  
✅ FAQ responses for common questions  
✅ Clean, responsive UI with Tailwind  
✅ Topics covered:
  - Greetings
  - Products & Pricing
  - Shipping & Delivery
  - Order Tracking
  - Returns & Refunds
  - Payments
  - Order Cancellation
  - Customer Support

## Project Structure

```
faq-chatbot/
├── server/
│   ├── server.js          # Express API
│   ├── faqData.js         # FAQ intents & responses
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.jsx        # Chat UI component
│   │   ├── main.jsx
│   │   └── index.css      # Tailwind imports
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```

## Setup & Installation

### 1. Backend Setup
```bash
cd server
npm install
npm run dev
```
Server runs on `http://localhost:5001`

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## Usage Examples

Try asking:
- "Hello" or "Hi"
- "How do I track my order?"
- "What's your return policy?"
- "How much does shipping cost?"
- "How can I contact support?"
- "Can I cancel my order?"

## API Endpoint

**POST** `/api/chat`
```json
{
  "message": "hello"
}
```

Response:
```json
{
  "message": "Hey there 👋 How can I help you today?...",
  "timestamp": "2026-02-07T13:00:00.000Z"
}
```

## How It Works

1. User sends message via React frontend
2. Backend matches keywords against FAQ intents
3. Returns predefined response based on best match
4. Falls back to default response if no match found

## Future Enhancements

- [ ] AI integration (Google Gemini/OpenAI)
- [ ] Conversation history
- [ ] Multi-language support
- [ ] Admin dashboard for FAQ management
- [ ] Analytics & insights

## Branch Structure

- `main` - Rule-based chatbot (current)
- `ai-integration` - AI-powered version (planned)

## License

Private project. All rights reserved.
