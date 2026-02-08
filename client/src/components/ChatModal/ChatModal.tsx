import ChatHeader from './ChatHeader';
import LanguageSelector from './LanguageSelector';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatModalProps {
  language: 'en' | 'de' | null;
  messages: Message[];
  typingMessage: string;
  loading: boolean;
  input: string;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onLanguageSwitch: () => void;
  onSelectLanguage: (lang: 'en' | 'de') => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export default function ChatModal({
  language,
  messages,
  typingMessage,
  loading,
  input,
  messagesEndRef,
  onLanguageSwitch,
  onSelectLanguage,
  onInputChange,
  onSubmit,
  onClose
}: ChatModalProps) {
  return (
    <div className="fixed bottom-8 right-8 w-96 h-150 bg-black border border-white/20 rounded-2xl shadow-2xl flex flex-col">
      <ChatHeader 
        language={language}
        onLanguageSwitch={onLanguageSwitch}
        onClose={onClose}
      />

      {!language && (
        <LanguageSelector onSelectLanguage={onSelectLanguage} />
      )}

      {language && (
        <>
          <MessageList
            messages={messages}
            typingMessage={typingMessage}
            loading={loading}
            messagesEndRef={messagesEndRef}
          />
          <ChatInput
            input={input}
            language={language}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        </>
      )}
    </div>
  );
}
