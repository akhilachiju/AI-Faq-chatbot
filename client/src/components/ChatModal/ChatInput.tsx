import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  language: 'en' | 'de' | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ChatInput({ input, language, onInputChange, onSubmit }: ChatInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 border-t border-white/20 flex gap-2 bg-black rounded-b-2xl"
    >
      <input
        value={input}
        onChange={onInputChange}
        placeholder={language === 'de' ? 'Nachricht...' : 'Message...'}
        className="flex-1 px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full focus:outline-none focus:border-white/40"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-200 text-black hover:bg-white transition-colors rounded-full flex items-center justify-center"
      >
        <Send size={18} />
      </button>
    </form>
  );
}
