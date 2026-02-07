import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Home } from './components/Home';
import { ChatModal } from './components/ChatModal';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(null);
  const [typingMessage, setTypingMessage] = useState('');
  const messagesEndRef = useRef(null);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const typeMessage = (text) => {
    let index = 0;
    setTypingMessage('');
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingMessage((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { text, sender: 'bot' }]);
        setTypingMessage('');
      }
    }, 20);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setTimeout(() => {
      const greeting = lang === 'en' 
        ? 'How can I help you today?'
        : 'Wie kann ich Ihnen heute helfen?';
      typeMessage(greeting);
    }, 300);
  };

  const handleStartChat = () => {
    setShowChat(true);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !language) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:5001/api/chat', {
        message: input,
        language
      });
      typeMessage(data.message);
    } catch {
      const errorMsg = language === 'de' 
        ? 'Fehler beim Verbinden mit dem Server'
        : 'Error connecting to server';
      setMessages((prev) => [
        ...prev,
        { text: errorMsg, sender: 'bot' },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      <Home onStartChat={handleStartChat} />

      {showChat && (
        <ChatModal
          language={language}
          messages={messages}
          typingMessage={typingMessage}
          loading={loading}
          input={input}
          messagesEndRef={messagesEndRef}
          onLanguageSwitch={() => setLanguage(language === 'en' ? 'de' : 'en')}
          onSelectLanguage={selectLanguage}
          onInputChange={(e) => setInput(e.target.value)}
          onSubmit={sendMessage}
          onClose={() => setShowChat(false)}
        />
      )}
    </>
  );
}

export default App;
