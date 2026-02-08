# AVA - Administrative Virtual Assistant

A multilingual AI-powered chatbot for administrative support services. Built with TypeScript for type safety and enterprise-grade architecture.

## Features

- **RAG Architecture** - Retrieval Augmented Generation for accurate responses
- **AI-Powered Responses** - Google Gemini AI integration  
- **Vector Database** - Qdrant for semantic search of FAQs
- **Semantic Search** - Find relevant FAQs by meaning, not just keywords
- **Multilingual Support** - English & German with easy language switching  
- **TypeScript** - Full type safety across frontend and backend  
- **Modal Chat Interface** - Bottom-right floating chat window  
- **Typing Effect** - Natural conversation flow  
- **Auto-scroll** - Latest messages always visible  
- **Responsive Design** - Works on all screen sizes  
- **Fallback Mechanism** - Rule-based responses when AI is unavailable

## Topics Covered

- About AVA & Services
- Document Management & Requirements
- Appointment Scheduling
- Process & Timelines
- Pricing & Payment
- Data Protection & Security (GDPR Compliant)
- Contact & Support

## Tech Stack

### Frontend
- React 19 + Vite
- TypeScript
- Tailwind CSS v4
- Axios
- Lucide React (Icons)

### Backend
- Node.js + Express
- TypeScript
- Google Gemini AI (gemini-3-flash-preview)
- Google Gemini Embeddings (gemini-embedding-001)
- Qdrant Vector Database
- CORS enabled
- Retry logic for API reliability

## Project Structure

```
faq-chatbot/
├── server/
│   ├── data/
│   │   └── avaFaqData.ts      # Multilingual FAQ knowledge base
│   ├── routes/
│   │   └── chat.ts            # Chat endpoint handler
│   ├── services/
│   │   └── vectorService.ts   # Vector database operations
│   ├── utils/
│   │   └── helpers.ts         # Helper functions (FAQ matching, context building)
│   ├── server.ts              # Express server setup
│   ├── test-vector.ts         # Vector database test script
│   ├── tsconfig.json          # TypeScript configuration
│   ├── .env                   # API keys
│   ├── .env.example           # Environment template
│   └── package.json
├── client/
│   ├── public/
│   │   └── favicon.svg        # Chat icon favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/
│   │   │   │   ├── Home.tsx
│   │   │   │   └── index.js
│   │   │   └── ChatModal/
│   │   │       ├── ChatModal.tsx
│   │   │       ├── ChatHeader.tsx
│   │   │       ├── LanguageSelector.tsx
│   │   │       ├── MessageList.tsx
│   │   │       ├── ChatInput.tsx
│   │   │       └── index.js
│   │   ├── App.tsx            # Main app with state management
│   │   ├── main.tsx
│   │   └── index.css
│   ├── tsconfig.json          # TypeScript configuration
│   ├── tsconfig.node.json     # TypeScript Node config
│   └── package.json
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- Google Gemini API Key

### 1. Start Qdrant Vector Database
```bash
docker-compose up -d qdrant
```
Qdrant runs on `http://localhost:6333`

### 2. Backend Setup
```bash
cd server
npm install

# Create .env file
echo "GEMINI_API_KEY=your_api_key_here" > .env
echo "QDRANT_URL=http://localhost:6333" >> .env

npm run dev
```
Server runs on `http://localhost:6001`

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## Usage

1. Open `http://localhost:5173` in your browser
2. Click the floating chat button (bottom-right) or "Launch Assistant"
3. Select your preferred language (English/German)
4. Start chatting with AVA!

## API Endpoint

**POST** `/api/chat`
```json
{
  "message": "What documents do I need?",
  "language": "en"
}
```

Response:
```json
{
  "message": "Required documents usually include...",
  "timestamp": "2026-02-07T20:00:00.000Z"
}
```

## Key Features Explained

### RAG (Retrieval Augmented Generation)
The chatbot uses RAG architecture to provide accurate, context-aware responses:
1. **Retrieval** - Searches vector database for relevant FAQs using semantic similarity
2. **Augmentation** - Builds context with top 3 most relevant FAQs
3. **Generation** - AI generates response based on retrieved context

This ensures responses are grounded in your actual FAQ data, not just AI's general knowledge.

### Vector Database & Semantic Search
Uses Qdrant to store FAQ embeddings and perform semantic similarity search. Finds relevant FAQs by meaning, not just keyword matching.

### AI with Fallback Mechanism
When Gemini AI is unavailable (quota exceeded, network error), the system automatically falls back to rule-based keyword matching using the FAQ database, ensuring users always get answers.

### Language Switching
Users can switch between English and German anytime by clicking the language indicator in the chat header.

### Typing Effect
Bot responses appear character-by-character for a natural conversation feel.

### Auto-scroll
Chat automatically scrolls to show the latest message. Scroll up to view conversation history.

### Retry Logic
API calls automatically retry up to 3 times if the service is overloaded.

## Environment Variables

```env
GEMINI_API_KEY=your_google_gemini_api_key
PORT=6001
QDRANT_URL=http://localhost:6333
```

See `GEMINI_SETUP.md` for API key setup instructions.

4. Copy the key

5. Paste it in `server/.env`:
   ```
   GEMINI_API_KEY=your_actual_key_here
   ```

6. Restart the server


## Future Enhancements

- [ ] More languages (French, Spanish, Italian)
- [ ] Voice input/output
- [ ] File upload for documents
- [ ] Appointment booking integration
- [ ] Admin dashboard for FAQ management
- [ ] Analytics & conversation insights
- [ ] Export chat history

