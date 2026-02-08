import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Home } from './components/Home';
import { ChatModal } from './components/ChatModal';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

type Language = 'en' | 'de' | null;

function App() {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(null);
  const [typingMessage, setTypingMessage] = useState<string>('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingMessage]);

  // Cleanup: Stop any running timer if the component unmounts
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  const typeMessage = (text: string): void => {
    let index = 0;
    
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    
    setTypingMessage('');

    typingTimerRef.current = setInterval(() => {
      if (index < text.length) {
        setTypingMessage((prev) => prev + (text[index] || ''));
        index++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setMessages((prev) => [...prev, { text, sender: 'bot' }]);
        setTypingMessage('');
      }
    }, 20);
  };

  const selectLanguage = (lang: 'en' | 'de'): void => {
    setLanguage(lang);
    setTimeout(() => {
      const greeting = lang === 'en' 
        ? 'How can I help you today?'
        : 'Wie kann ich Ihnen heute helfen?';
      typeMessage(greeting);
    }, 300);
  };

  const handleStartChat = (): void => {
    setShowChat(true);
  };

  const sendMessage = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const currentInput = input.trim();
    if (!currentInput || !language) return;

    const userMsg: Message = { text: currentInput, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:6001/api/chat', {
        message: currentInput,
        language
      });
      typeMessage(data.message);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg = language === 'de' 
        ? 'Fehler beim Verbinden mit dem Server'
        : 'Error connecting to server';
      setMessages((prev) => [
        ...prev,
        { text: errorMsg, sender: 'bot' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
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
          onLanguageSwitch={toggleLanguage}
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