import { useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:5001/api/chat', {
        message: input,
      });
      setMessages((prev) => [
        ...prev,
        { text: data.message, sender: 'bot' },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: 'Error connecting to server', sender: 'bot' },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[620px] backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl flex flex-col border border-white/40">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <h2 className="text-xl font-bold tracking-wide">FAQ Assistant</h2>
          <p className="text-sm opacity-80">Ask me anything ✨</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex animate-fadeIn ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] px-5 py-3 rounded-3xl shadow-md text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-gray-100 px-4 py-3 rounded-3xl shadow-md flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className="p-4 border-t border-gray-200 flex gap-2 bg-white/70 rounded-b-3xl"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
