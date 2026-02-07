# AVA - Administrative Virtual Assistant

A multilingual AI-powered chatbot for administrative support services.

## Features

AI-Powered Responses - Google Gemini AI integration  
Multilingual Support - English & German with easy language switching   
Modal Chat Interface - Bottom-right floating chat window  
Typing Effect - Natural conversation flow  
Auto-scroll - Latest messages always visible  
Responsive Design - Works on all screen sizes

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
- Tailwind CSS v4
- Axios
- Lucide React (Icons)

### Backend
- Node.js + Express
- Google Gemini AI (gemini-3-flash-preview)
- CORS enabled
- Retry logic for API reliability

## Project Structure

```
faq-chatbot/
├── server/
│   ├── data/
│   │   └── avaFaqData.js      # Multilingual FAQ knowledge base
│   ├── routes/
│   │   └── chat.js            # Chat endpoint handler
│   ├── utils/
│   │   └── helpers.js         # Helper functions (FAQ matching, context building)
│   ├── server.js              # Express server setup
│   ├── .env                   # API keys
│   ├── .env.example           # Environment template
│   └── package.json
├── client/
│   ├── public/
│   │   └── favicon.svg        # Chat icon favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   └── index.js
│   │   │   └── ChatModal/
│   │   │       ├── ChatModal.jsx
│   │   │       ├── ChatHeader.jsx
│   │   │       ├── LanguageSelector.jsx
│   │   │       ├── MessageList.jsx
│   │   │       ├── ChatInput.jsx
│   │   │       └── index.js
│   │   ├── App.jsx            # Main app with state management
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- Google Gemini API Key

### 1. Backend Setup
```bash
cd server
npm install

# Create .env file
echo "GEMINI_API_KEY=your_api_key_here" > .env

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
PORT=5001
```

## Future Enhancements

- [ ] More languages (French, Spanish, Italian)
- [ ] Voice input/output
- [ ] File upload for documents
- [ ] Appointment booking integration
- [ ] Admin dashboard for FAQ management
- [ ] Analytics & conversation insights
- [ ] Export chat history

# Get your API key from Google AI Studio

## Steps:

1. Go to: https://aistudio.google.com/app/apikey

2. Sign in with your Google account

3. Click "Create API Key"

4. Copy the key

5. Paste it in `server/.env`:
   ```
   GEMINI_API_KEY=your_actual_key_here
   ```

6. Restart the server

